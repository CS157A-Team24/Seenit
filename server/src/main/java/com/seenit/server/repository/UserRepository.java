package com.seenit.server.repository;

import com.seenit.server.ibprojections.UserDetails;
import com.seenit.server.ibprojections.UserIdName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.seenit.server.model.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
    @Query("Select u FROM User u JOIN u.moderatedChannels mods WHERE mods.id = ?1")
    List<UserIdName> findModeratorsByChannelId(String id);

    @Query("SELECT u.userName AS userName, u.createdAt AS createdAt, u.email AS email," +
            "SUM(cp.points) AS points FROM User u JOIN u.posts cp WHERE u.id = ?1 GROUP BY u.id")
    Optional<UserDetails> findUserDetailsById(String id);

    List<UserIdName> findAllByModeratedChannelsId(String id);

    Optional<User> findByEmail(String email);

    Optional<User> findByUserNameOrEmail(String username, String email);

    List<User> findByIdIn(List<String> userIds);

    Optional<User> findByUserName(String username);

    Boolean existsByUserName(String username);

    Boolean existsByEmail(String email);
}
