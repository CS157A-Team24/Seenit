package com.seenit.server.repository;

import java.util.List;

import com.seenit.server.model.Comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, String>{
    @Query("SELECT p FROM Comment p WHERE p.id < 2")
    List<Comment> findAllCustom();
}