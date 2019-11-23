package com.seenit.server.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@Setter
@Entity
@Table(name = "Users")
@EntityListeners(AuditingEntityListener.class)
public class User{

    @Id
    private String id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "username", unique = true, nullable = false)
    private String userName;

    @Column(name = "password", nullable = false)
    private String password;
    
    @Column(name = "created_at", nullable = false)
    @CreatedDate
    private Date createdAt;

    @Column(name = "avatar_url", nullable = false)
    private String avatarUrl;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private Set<CreatePost> posts;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userVote")
    private Set<VotePost> votedPosts;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userVoteCom")
    private Set<VoteCom> votedComments;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userCom")
    private Set<CreateCom> comments;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "owner")
    private Set<Channel> ownedChannels;

    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE},
                mappedBy = "moderators")
    private Set<Channel> moderatedChannels;

    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE},
                mappedBy = "subscribers")
    private Set<Channel> subscribedChannels;

    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE},
                mappedBy = "usersSavePost")
    private Set<Post> savedPosts;
}