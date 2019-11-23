package com.seenit.server.repository;

import com.seenit.server.model.Channel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChannelRepository extends JpaRepository<Channel, String> {
}
