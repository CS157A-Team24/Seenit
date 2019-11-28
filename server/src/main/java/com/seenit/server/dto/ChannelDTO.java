package com.seenit.server.dto;

import com.seenit.server.ibprojections.UserIdName;
import com.seenit.server.model.Channel;
import com.seenit.server.model.User;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class ChannelDTO {
    @NotNull
    final private Channel channel;

    @NotNull
    private long numberOfMembers;

    @NotNull
    final private List<UserIdName> moderators;
}
