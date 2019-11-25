package com.seenit.server.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seenit.server.exception.ResourceNotFoundException;
import com.seenit.server.model.Channel;
import com.seenit.server.model.Comment;
import com.seenit.server.repository.ChannelRepository;
import com.seenit.server.repository.CommentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CommentController{
    @Autowired
    private CommentRepository commentRepository;

    @GetMapping("/comments")
    public List<Comment> getAllComments(){
        return commentRepository.findAll();
    }
}