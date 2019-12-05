package com.seenit.server.repository;

import java.util.List;

import com.seenit.server.ibprojections.CommentDetails;
import com.seenit.server.ibprojections.CommentLess;
import com.seenit.server.model.Comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, String>{
    @Query("SELECT p FROM Comment p")
    List<CommentDetails> findAllCustom();

    @Query("SELECT c FROM Comment c JOIN c.postCom post JOIN c.createdBy cb where post.id = ?1")
    List<CommentDetails> findComByPostId(String postId);

    List<CommentLess> findAllByCreatedByUserComId(String id);
}