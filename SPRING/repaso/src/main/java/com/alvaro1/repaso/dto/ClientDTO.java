package com.alvaro1.repaso.dto;

import jakarta.persistence.*;
import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@ToString

public class ClientDTO {

    private Long id;
    private String name;
    private String email;
    private String phone;

}
