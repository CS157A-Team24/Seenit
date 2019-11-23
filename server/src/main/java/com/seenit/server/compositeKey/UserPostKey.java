package com.seenit.server.compositeKey;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@NoArgsConstructor
@Embeddable
public class UserPostKey implements Serializable {
    @Column(name = "user_id")
    private String userId;

    @Column(name = "post_id")
    private String postId;
}
