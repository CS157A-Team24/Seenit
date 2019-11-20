package com.seenit.server.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.seenit.server.compositeKey.CreatePostKey;

import javax.persistence.*;

@Entity
@Table(name = "Create_Post_Test")
public class CreatePost {

    @EmbeddedId
    CreatePostKey id;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    User user;

    @JsonBackReference
    @ManyToOne
    @MapsId("post_id")
    @JoinColumn(name = "post_id")
    Post post;

    int points;

    public CreatePost(){}

    public CreatePost(CreatePostKey id, User user, Post post, int points) {
        this.id = id;
        this.user = user;
        this.post = post;
        this.points = points;
    }

    public CreatePostKey getId() {
        return id;
    }

    public void setId(CreatePostKey id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
