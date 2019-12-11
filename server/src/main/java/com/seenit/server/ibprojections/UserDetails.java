package com.seenit.server.ibprojections;

import java.util.Date;

public interface UserDetails {
        String getUserName();
        Date getCreatedAt();
        String getEmail();
        long getPoints();
}
