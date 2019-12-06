package com.seenit.server.repository;

import com.seenit.server.compositeKey.UserPostKey;
import com.seenit.server.ibprojections.VotedPost;
import com.seenit.server.model.VotePost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VotePostRepository extends JpaRepository<VotePost, UserPostKey> {
    List<VotedPost> findAllCustomByUserVoteId(String userId);
}
