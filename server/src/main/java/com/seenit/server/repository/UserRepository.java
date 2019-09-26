package com.seenit.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.seenit.server.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    
}
