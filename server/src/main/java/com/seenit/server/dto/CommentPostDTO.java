package com.seenit.server.dto;

import com.seenit.server.ibprojections.CommentDetails;
import lombok.Data;

import java.util.List;

@Data
public class CommentPostDTO {

    final private String id;

    final private List<CommentDetails> comments;
}
