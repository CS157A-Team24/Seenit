package com.seenit.server.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "Channels")
public class Channel {

    @Id
    private String id;

    private String name;

    @Column(name = "banner_url")
    private String bannerUrl;

    @JsonIgnore
    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE})
    @JoinTable(name = "Own", inverseJoinColumns = @JoinColumn(name = "user_id"), joinColumns = @JoinColumn(name = "channel_id"))
    private User owner;

    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE})
    @JoinTable(name = "Moderate", inverseJoinColumns = @JoinColumn(name = "user_id"), joinColumns = @JoinColumn(name = "channel_id"))
    private Set<User> moderators;

    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH, CascadeType.MERGE})
    @JoinTable(name = "Subscribe", inverseJoinColumns = @JoinColumn(name = "user_id"), joinColumns = @JoinColumn(name = "channel_id"))
    private Set<User> subscribers;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "channel")
    private Set<Post> ownedPosts;
}
