package com.seenit.server.exception;

import java.util.Date;
import org.springframework.http.HttpStatus;

public class ErrorDetails {
    private Date timestamp;
    private String message;
    private String details;
    private HttpStatus status;


    public ErrorDetails(Date timestamp, HttpStatus status, String message, String details) {
        super();
        this.timestamp = timestamp;
        this.status = status;
        this.message = message;
        this.details = details;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public HttpStatus getStatus(){
        return status;
    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }
}