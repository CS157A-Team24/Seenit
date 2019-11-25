package com.seenit.server.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seenit.server.exception.ResourceNotFoundException;
import com.seenit.server.ibprojections.TopChannels;
import com.seenit.server.model.Channel;
import com.seenit.server.repository.ChannelRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ChannelController{
    @Autowired
    private ChannelRepository channelRepository;

    @GetMapping("/channels")
    public List<Channel> getAllChannels(){
        return channelRepository.findAll();
    }

    @GetMapping("/channels/top5")
    public Page<TopChannels> getTopChannels(){
        return channelRepository.findTopChannels(PageRequest.of(0,5, Sort.Direction.DESC,"members","name"));
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
