package com.seenit.server.repository;

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

    List<UserIdName> findAllByModeratedChannelsId(String id);

    Optional<User> findByUserName(String userName);
}
