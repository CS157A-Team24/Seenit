package com.seenit.server.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class CommentUserPostDTO {
    @NotNull
    final private String content;

    @NotNull
    final private String userId;

    @NotNull
    final private String postId;
}
