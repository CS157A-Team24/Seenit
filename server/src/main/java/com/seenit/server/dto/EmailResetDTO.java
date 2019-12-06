package com.seenit.server.dto;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class EmailResetDTO {

    @NotNull
    final private String userId;

    @NotNull
    final private String newEmail;

}