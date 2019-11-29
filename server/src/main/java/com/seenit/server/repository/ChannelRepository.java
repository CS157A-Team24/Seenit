package com.seenit.server.repository;

import com.seenit.server.ibprojections.TopChannels;
import com.seenit.server.model.Channel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChannelRepository extends JpaRepository<Channel, String> {
    @Query("SELECT c.id as id, c.name as name, COUNT(c.id) AS members FROM Channel c JOIN c.subscribers GROUP BY c.id")
    Page<TopChannels> findTopChannels(Pageable pageable);

    @Query("SELECT c, COUNT(c.id) FROM Channel c JOIN c.subscribers WHERE c.id = ?1 GROUP BY c.id")
    List<Object[]> findNumberOfMembersByChannelId(String id);

}
