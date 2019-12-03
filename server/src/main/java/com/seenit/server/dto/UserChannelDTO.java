package com.seenit.server.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class UserChannelDTO {

    @NotNull
    final private String channelId;

    @NotNull
    final private String userId;
}
