package com.seenit.server.model;

import com.seenit.server.compositeKey.UserComKey;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "Create_Com")
public class CreateCom{

    @EmbeddedId
    private UserComKey id;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    private User userCom;

    @ManyToOne
    @MapsId("com_id")
    @JoinColumn(name = "com_id")
    private Comment comment;

    private int points;
}
