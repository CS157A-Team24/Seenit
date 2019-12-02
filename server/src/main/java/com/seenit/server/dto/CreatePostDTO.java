package com.seenit.server.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data

public class CreatePostDTO {

    @NotBlank
    @Size(max = 300, message = "Title must be between 1 and 300 characters")
    private final String title;

    @Size(max = 2000, message = "Title must be between 1 and 2000 characters")
    private final String content;

    @NotNull
    private final String channelId;

    @NotNull
    private final String userId;
}
