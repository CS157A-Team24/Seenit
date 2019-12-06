package com.seenit.server.ibprojections;

import com.seenit.server.compositeKey.UserPostKey;

public interface VotedPost {
    UserPostKey getId();
    int getIsUp();
}
