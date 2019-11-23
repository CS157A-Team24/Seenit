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
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@Setter
@Entity
@Table(name = "Posts")
@EntityListeners(AuditingEntityListener.class)
public class Post{

    @Id
    private String id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "created_at", nullable = false)
    @CreatedDate
    private Date createdAt;

    @Column(name = "updated_at", nullable = false)
    @LastModifiedDate
    private Date updatedAt;

    @JsonIgnore
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "post")
    private CreatePost createdBy;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "postVote")
    private Set<VotePost> usersVoted;

    @JsonIgnore
    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE})
    @JoinTable(name = "Contain", inverseJoinColumns = @JoinColumn(name = "channel_id"), joinColumns = @JoinColumn(name = "post_id"))
    private Channel channel;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "postCom")
    private Set<Comment> comments;

    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE})
    @JoinTable(name = "Save", inverseJoinColumns = @JoinColumn(name = "user_id"), joinColumns = @JoinColumn(name = "post_id"))
    private Set<User> usersSavePost;
}