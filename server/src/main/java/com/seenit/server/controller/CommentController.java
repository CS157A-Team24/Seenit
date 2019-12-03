package com.seenit.server.controller;

import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

import com.seenit.server.compositeKey.UserComKey;
import com.seenit.server.dto.CommentPostDTO;
import com.seenit.server.dto.CommentUserPostDTO;
import com.seenit.server.ibprojections.CommentDetails;
import com.seenit.server.model.Comment;
import com.seenit.server.model.CreateCom;
import com.seenit.server.model.Post;
import com.seenit.server.repository.CommentRepository;

import com.seenit.server.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class CommentController{
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/comments")
    public List<CommentDetails> getAllComments(){
        return commentRepository.findAllCustom();
    }

    @GetMapping("/comments/test/{postId}")
    public List<Object[]> getCom(@PathVariable(value = "postId") String postId){
        return new LinkedList<>();
    }

    @GetMapping("/comments/ofapost/{postId}")
    public CommentPostDTO getComByPostId(@PathVariable(value = "postId") String postId){
        return new CommentPostDTO(postId,commentRepository.findComByPostId(postId));
    }

    @PostMapping("/comments")
    public Comment createPost(@Valid @RequestBody CommentUserPostDTO commentDTO){
        String commentId = UUID.randomUUID().toString();
        Comment comment = new Comment();
        comment.setId(commentId);
        comment.setContent(commentDTO.getContent());
        Post post = postRepository.findById(commentDTO.getPostId()).get();
        comment.setPostCom(post);
        CreateCom createCom = new CreateCom();
        UserComKey key = new UserComKey();
        key.setComId(commentId);
        key.setUserId(commentDTO.getUserId());
        createCom.setId(key);
        comment.setCreatedBy(createCom);
        commentRepository.save(comment);
        return comment;
    }
}