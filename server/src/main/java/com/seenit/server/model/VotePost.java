package com.seenit.server.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.seenit.server.compositeKey.UserPostKey;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "Vote_Post")
public class VotePost {

    @EmbeddedId
    private UserPostKey id;

    @Column(name = "up_down")
    private int isUp;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    private User userVote;

    @ManyToOne
    @MapsId("post_id")
    @JoinColumn(name = "post_id")
    private Post postVote;
}
