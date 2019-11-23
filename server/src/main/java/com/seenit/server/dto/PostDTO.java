package com.seenit.server.dto;

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
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO {

//    // Todo: Add member for image url
//
//    @NotNull
//    private String channelName;

    @NotNull
    private Post post;

    private int points;

    @NotNull
    private String userName;
}
