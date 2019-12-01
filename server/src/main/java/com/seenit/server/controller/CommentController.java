package com.seenit.server.controller;

import java.util.LinkedList;
import java.util.List;

import com.seenit.server.dto.CommentPostDTO;
import com.seenit.server.ibprojections.CommentDetails;
import com.seenit.server.repository.CommentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CommentController{
    @Autowired
    private CommentRepository commentRepository;

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
}