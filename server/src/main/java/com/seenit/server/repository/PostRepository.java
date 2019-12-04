package com.seenit.server.repository;

import java.util.Collection;
import java.util.List;

import com.seenit.server.dto.PostDTO;
import com.seenit.server.ibprojections.FrontPagePost;
import com.seenit.server.model.Post;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post,String>{
    // Using Interface-based projection - need to make an Alias for each field - longer in writing query,
    // but overall is more simple than using DTO
    @Query("SELECT ca.user.userName AS userName, p.title AS title, p.content AS content FROM Post p JOIN p.createdBy ca")
    List<FrontPagePost> findAllCustom();

    // Using DTO to cast the Object
    @Query("SELECT p, ch, ca.points, ca.user FROM Post p JOIN p.createdBy ca JOIN p.channel ch")
    List<Object[]> findAllObject();

    @Query("SELECT p, ch, ca.points, ca.user FROM Post p JOIN p.createdBy ca JOIN p.channel ch WHERE ca.user.id = ?1")
    List<Object[]> findAllObjectByUserId(String userId);

    @Query("SELECT p, ch, ca.points, ca.user FROM Post p JOIN p.createdBy ca JOIN p.channel ch")
    Page<Object[]> findAllObjectSort(Pageable pageable);

    @Query("SELECT p, ch, ca.points, ca.user FROM Post p JOIN p.createdBy ca JOIN p.channel ch WHERE ch.id = ?1")
    Page<Object[]> findAllPostsByChannel(String channelId, Pageable pageable);

    @Query("SELECT p, ch, ca.points, ca.user FROM Post p JOIN p.createdBy ca JOIN p.channel ch WHERE p.id = ?1")
    List<Object[]> findPostDetailById(String channelId);

    List<Post> findByChannelId(String id);

    List<Post> findByCreatedBy_PointsLessThan(int points);

    @Query("SELECT p, ch, ca.points, ca.user " + 
        "FROM Post p JOIN p.createdBy ca JOIN p.channel ch " +
        "WHERE p.title LIKE %?1% OR p.content LIKE %?1%")
    List<Object[]> findBySearch(String search);
}