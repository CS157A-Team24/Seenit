package com.seenit.server.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.seenit.server.compositeKey.UserPostKey;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Create_Post")
public class CreatePost {

    @EmbeddedId
    private UserPostKey id;

    private int points;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @MapsId("post_id")
    @JoinColumn(name = "post_id")
    private Post post;
}
