package com.seenit.server.dto;

import com.seenit.server.model.Channel;
import com.seenit.server.model.CreatePost;
import com.seenit.server.model.Post;
import com.seenit.server.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
public class PostDTO {

    @NotNull
    final private Post post;

    @NotNull
    final private Channel channel;

    final private int points;

    @NotNull
    private String userId;
    @NotNull
    private String userName;
}
