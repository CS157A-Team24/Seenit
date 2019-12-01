package com.seenit.server.ibprojections;

import com.seenit.server.compositeKey.UserComKey;
import com.seenit.server.model.Comment;
import com.seenit.server.model.CreateCom;
import com.seenit.server.model.User;

import java.util.Date;
import java.util.Set;

public interface CommentDetails {
    String getId();
    String getContent();
    Date getCreatedAt();
    Date getUpdatedAt();
    CreateCom getCreatedBy();
    Set<Comment> getChildren();

    interface CreateCom {
        User getUserCom();
        int getPoints();
            interface User{
                String getId();
                String getUserName();
            }
    }

    interface Comment{
        String getId();
        String getContent();
        Date getCreatedAt();
        Date getUpdatedAt();
        CreateCom getCreatedBy();
        Set<Comment> getChildren();

        interface CreateCom {
            User getUserCom();
            int getPoints();
            interface User{
                String getId();
                String getUserName();
            }
        }
    }
}
