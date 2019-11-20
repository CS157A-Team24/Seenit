package com.seenit.server.compositeKey;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class CreatePostKey implements Serializable {
    @Column(name = "user_id")
    String userId;

    @Column(name = "post_id")
    String postId;

    public CreatePostKey(){

    }

    public CreatePostKey(String userId, String postId) {
        this.userId = userId;
        this.postId = postId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    @Override
    public boolean equals(Object obj) {
        if(this == obj) return true;
        if(obj == null || getClass() != obj.getClass()) return false;

        CreatePostKey that = (CreatePostKey)obj;
        return userId.equals(that.userId) && postId.equals(that.postId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId,postId);
    }
}
