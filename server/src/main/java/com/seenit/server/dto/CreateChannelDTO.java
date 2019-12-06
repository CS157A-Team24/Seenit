package com.seenit.server.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;

@Data
public class CreateChannelDTO {

    @NotBlank
    @Size(max = 128, message = "Name must be between 1 and 128 characters")
    private final String name;

    @Size(max = 255, message = "Banner Url must be between 0 and 255 characters")
    private final String bannerUrl;

    @NotNull
    private final String ownerId;
}
