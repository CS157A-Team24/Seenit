package com.seenit.server.repository;

import java.util.List;

import com.seenit.server.model.Post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post,String>{
    @Query("SELECT p.title FROM Post p")
    List<Post> findAllCustom();


}