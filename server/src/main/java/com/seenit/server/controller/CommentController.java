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
    @Autowired
    private ChannelRepository channelRepository;

    @GetMapping("/comments")
    public List<Comment> getAllComments(){
        return commentRepository.findAll();
    }

    @GetMapping("/channels")
    public List<Channel> getAllChannels(){
        return channelRepository.findAll();
    }

    @DeleteMapping("/channels/{id}")
    public Map<String, Boolean> deletePost(
            @PathVariable(value = "id") String channelId) throws Exception {
        Channel channel = channelRepository.findById(channelId)
                .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: "+ channelId));

        channelRepository.delete(channel);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}