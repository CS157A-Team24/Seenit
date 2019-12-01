package com.seenit.server.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@Setter
@Entity
@Table(name = "Comments")
@EntityListeners(AuditingEntityListener.class)
public class Comment{

    @Id
    private String id;
    
    @Column(name = "content")
    private String content;

    @Column(name = "created_at", nullable = false)
    @CreatedDate
    private Date createdAt;

    @Column(name = "updated_at")
    @LastModifiedDate
    private Date updatedAt;

    @JsonManagedReference
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "comment")
    private CreateCom createdBy;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "commentVote")
    private Set<VoteCom> usersVoted;

    @JsonIgnore
    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE})
    @JoinTable(name = "Have", inverseJoinColumns = @JoinColumn(name = "post_id"), joinColumns = @JoinColumn(name = "com_id"))
    private Post postCom;

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "parentComment")
    private Set<Comment> children;

    @JsonBackReference
    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE})
    @JoinTable(name = "Have_Com", inverseJoinColumns = @JoinColumn(name = "parent_id"), joinColumns = @JoinColumn(name = "child_id"))
    private Comment parentComment;
}