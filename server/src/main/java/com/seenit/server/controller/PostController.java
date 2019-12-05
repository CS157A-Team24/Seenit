package com.seenit.server.controller;

import java.util.*;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.seenit.server.compositeKey.UserPostKey;
import com.seenit.server.dto.CreatePostDTO;
import com.seenit.server.dto.PostDTO;
import com.seenit.server.dto.UserPostDTO;
import com.seenit.server.exception.ResourceNotFoundException;
import com.seenit.server.ibprojections.FrontPagePost;
import com.seenit.server.model.Channel;
import com.seenit.server.model.CreatePost;
import com.seenit.server.model.User;
import com.seenit.server.model.Post;
import com.seenit.server.repository.ChannelRepository;
import com.seenit.server.repository.PostRepository;

import com.seenit.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class PostController{
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private ChannelRepository channelRepository;

    @Autowired
    private  UserRepository userRepository;

    // Using DTO
    @GetMapping("/posts/sortby/{property}")
    public List<PostDTO> getPostDTOTest(@PathVariable(value = "property") String prop){
        List<Object[]> collections;
        if(prop.equals("none")){
            collections = postRepository.findAllObject();
        }else{
            String property;
            if(prop.equals("new")) property = "createdAt";
            else property = "ca.points";
            collections = postRepository.findAllObjectSort(PageRequest.of(0,20,
                    Sort.Direction.DESC, property)).getContent();
        }
        List<PostDTO> postList = collections.stream().map(collection -> toPostDTO(collection)).
                collect(Collectors.toList());
        return postList;
    }
    // Using DTO
    @GetMapping("/posts")
    public List<PostDTO> getPostDTO(){
        List<Object[]> collections = postRepository.findAllObject();
        List<PostDTO> postList = collections.stream().map(collection -> toPostDTO(collection)).
                collect(Collectors.toList());
        return postList;
    }

    @GetMapping("/posts/usersaved/{id}")
    public List<PostDTO> getSavedPostByUserIdDTO(@PathVariable(value = "id") String userId){
        List<Object[]> collections = postRepository.findAllSavedPostsByUserId(userId);
        List<PostDTO> postList = collections.stream().map(collection -> toPostDTO(collection)).
                collect(Collectors.toList());
        return postList;
    }

    @GetMapping("/posts/user/{id}")
    public List<PostDTO> getPostByUserIdDTO(@PathVariable(value = "id") String userId){
        List<Object[]> collections = postRepository.findAllObjectByUserId(userId);
        List<PostDTO> postList = collections.stream().map(collection -> toPostDTO(collection)).
                collect(Collectors.toList());
        return postList;
    }

    @GetMapping("/posts/c/{channelId}/{property}")
    public List<PostDTO> getPostsByChannel(@PathVariable(value = "channelId") String channelId,
                                            @PathVariable(value = "property") String prop){
        List<Object[]> collections;
        if(prop.equals("none")){
            collections = postRepository.findAllPostsByChannel(channelId, PageRequest.of(0,20)).getContent();
        }else{
            String property;
            if(prop.equals("new")) property = "createdAt";
            else property = "ca.points";
            collections = postRepository.findAllPostsByChannel(channelId,PageRequest.of(0,20,
                    Sort.Direction.DESC, property)).getContent();
        }
        List<PostDTO> postList = collections.stream().map(collection -> toPostDTO(collection)).
                collect(Collectors.toList());
        return postList;
    }

    private PostDTO toPostDTO(Object[] collection){
        User user = (User) collection[3];
        PostDTO postDTO = new PostDTO((Post)collection[0],(Channel)collection[1],(int)collection[2]);
        postDTO.setUserName(user.getUserName());
        postDTO.setUserId(user.getId());
        return postDTO;
    }

    @GetMapping("/posts/{id}")
    public PostDTO getPostById(@PathVariable(value = "id") String postId) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
                                    .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: " + postId));
        return toPostDTO(postRepository.findPostDetailById(postId).get(0));
    }

    @PostMapping("/posts")
    public Post createPost(@Valid @RequestBody CreatePostDTO postDTO){
        String postId = UUID.randomUUID().toString();
        Post post = new Post(postId,postDTO.getTitle(),postDTO.getContent());
        Channel channel = channelRepository.findById(postDTO.getChannelId()).get();
        post.setChannel(channel);
        CreatePost createPost = new CreatePost();
        UserPostKey key = new UserPostKey();
        key.setPostId(postId);
        key.setUserId(postDTO.getUserId());
        createPost.setId(key);
        post.setCreatedBy(createPost);
        postRepository.save(post);
        return post;
    }

    @PostMapping("/posts/save")
    public Post savePost(@Valid @RequestBody UserPostDTO userPostDTO){
        User user = userRepository.findById(userPostDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userPostDTO.getUserId()));
        Post post = postRepository.findById(userPostDTO.getPostId())
                .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: "+ userPostDTO.getPostId()));
        Set<User> userSaved = post.getUsersSavePost();
        userSaved.add(user);
        post.setUsersSavePost(userSaved);
        postRepository.save(post);
        return post;
    }

    @PostMapping("/posts/unsave")
    public Post unSavePost(@Valid @RequestBody UserPostDTO userPostDTO){
        User user = userRepository.findById(userPostDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userPostDTO.getUserId()));
        Post post = postRepository.findById(userPostDTO.getPostId())
                .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: "+ userPostDTO.getPostId()));
        Set<User> userSaved = post.getUsersSavePost();
        userSaved.remove(user);
        post.setUsersSavePost(userSaved);
        postRepository.save(post);
        return post;
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<Post> updatePost(
        @PathVariable(value = "id")
        String postId,
        @Valid @RequestBody
        Post postDetails
    ) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
                                    .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: " + postId));
        post.setContent(postDetails.getContent());
        post.setUpdatedAt(new Date());
        final Post updatedPost = postRepository.save(post);
        return ResponseEntity.ok(updatedPost);
    }


    @DeleteMapping("/posts/{id}")
    public Map<String, Boolean> deletePost(
        @PathVariable(value = "id") String postId) throws Exception {
        Post post = postRepository.findById(postId)
           .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: "+ postId));
 
        postRepository.delete(post);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @GetMapping("/posts/search/{str}")
    public List<PostDTO> searchPost(@PathVariable(value = "str") String str){
        List<Object[]> collections = postRepository.findBySearch(str);
        List<PostDTO> postList = collections.stream().map(collection -> toPostDTO(collection)).
                collect(Collectors.toList());
        return postList;
    }
}