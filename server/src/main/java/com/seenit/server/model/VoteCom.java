package com.seenit.server.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.seenit.server.compositeKey.UserComKey;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "Vote_Com")
public class VoteCom {

    @EmbeddedId
    private UserComKey id;

    @Column(name = "up_down")
    private int isUp;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    private User userVoteCom;

    @ManyToOne
    @MapsId("com_id")
    @JoinColumn(name = "com_id")
    private Comment commentVote;
}
