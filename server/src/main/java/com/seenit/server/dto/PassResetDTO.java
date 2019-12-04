package com.seenit.server.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class PassResetDTO {

    @NotNull
    final private String currentPassword;

    @NotNull
    final private String newPassword;

}
