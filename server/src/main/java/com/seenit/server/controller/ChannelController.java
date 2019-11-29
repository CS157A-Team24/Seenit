package com.seenit.server.controller;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import com.seenit.server.dto.ChannelDTO;
import com.seenit.server.exception.ResourceNotFoundException;
import com.seenit.server.ibprojections.TopChannels;
import com.seenit.server.ibprojections.UserIdName;
import com.seenit.server.model.Channel;
import com.seenit.server.model.User;
import com.seenit.server.repository.ChannelRepository;

import com.seenit.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ChannelController{
    @Autowired
    private ChannelRepository channelRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/channels")
    public List<Channel> getAllChannels(){
        return channelRepository.findAll();
    }

    @GetMapping("/channels/top5")
    public Page<TopChannels> getTopChannels(){
        return channelRepository.findTopChannels(PageRequest.of(0,5,
                                                                Sort.Direction.DESC,"members","name"));
    }

    @GetMapping("/channels/details/{id}")
    public ChannelDTO getChannelDetailsById(@PathVariable(value = "id") String id) throws ResourceNotFoundException{
        return toChannelDTO(channelRepository.findNumberOfMembersByChannelId(id),
                            userRepository.findAllByModeratedChannelsId(id), id);
    }

    // Quick test
    @GetMapping("/channels/test/{id}")
    public List<Object[]> getChannelDetailsByIdTest(@PathVariable(value = "id") String id){
        return channelRepository.findNumberOfMembersByChannelId(id);
    }

    @GetMapping("/channels/{id}")
    public Channel getChannelById(@PathVariable(value = "id") String channelId) throws ResourceNotFoundException {
         Channel channel = channelRepository.findById(channelId)
                .orElseThrow(() -> new ResourceNotFoundException("Channel not found on :: " + channelId));
        return channel;
    }

    private ChannelDTO toChannelDTO(List<Object[]> channelDetail, List<UserIdName> moderators, String id) throws ResourceNotFoundException{
        ChannelDTO channelDTO = new ChannelDTO();
        if(channelDetail.size() < 1){
            channelDTO.setNumberOfMembers(0);
            channelDTO.setChannel(getChannelById(id));
        } else {
            channelDTO.setChannel((Channel)channelDetail.get(0)[0]);
            channelDTO.setNumberOfMembers((long)channelDetail.get(0)[1]);
        }
        if(moderators.size() > 0) channelDTO.setModerators(moderators);
        return channelDTO;
    }

    @DeleteMapping("/channels/{id}")
    public Map<String, Boolean> deleteChannel(
            @PathVariable(value = "id") String channelId) throws Exception {
        Channel channel = channelRepository.findById(channelId)
                .orElseThrow(() -> new ResourceNotFoundException("Channel not found on :: "+ channelId));

        channelRepository.delete(channel);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
