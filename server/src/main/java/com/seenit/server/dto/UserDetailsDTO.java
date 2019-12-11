package com.seenit.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
public class UserDetailsDTO {
    final private String userName;

    final private Date createdAt;

    final private String email;

    final private long points;
}
