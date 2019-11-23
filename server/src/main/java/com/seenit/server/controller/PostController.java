package com.seenit.server.controller;

import java.util.*;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.seenit.server.dto.PostDTO;
import com.seenit.server.exception.ResourceNotFoundException;
import com.seenit.server.ibprojections.FrontPagePost;
import com.seenit.server.model.User;
import com.seenit.server.model.Post;
import com.seenit.server.repository.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
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

    // Using Interface-based projection
//    @GetMapping("/posts")
//    public List<Post> getAllPosts() {
//        return postRepository.findAll();
//    }

    // Using DTO
    @GetMapping("/posts")
    public List<PostDTO> getPostDTO(){
        List<Object[]> collections = postRepository.findAllObject();
        List<PostDTO> postList = collections.stream().map(collection -> toPostDTO(collection)).
                collect(Collectors.toList());
        return postList;
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable(value = "id") String postId) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
                                    .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: " + postId));
        return ResponseEntity.ok().body(post); 
    }


    private PostDTO toPostDTO(Object[] collection){
        return new PostDTO((Post)collection[0],(int)collection[1], (String)collection[2]);
    }

    @PostMapping("/posts")
    public Post createPost(@Valid @RequestBody Post post){
        return postRepository.save(post);
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
}