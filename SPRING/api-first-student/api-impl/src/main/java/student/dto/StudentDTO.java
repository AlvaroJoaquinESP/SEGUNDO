package student.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
// @NoArgsConstructor CONSTRUCTOR VACIO.
public class StudentDTO {
    private static int count_id = 1;
    private Integer id;
    private String name;
    private String email;
    private LocalDate bornDate;


    public StudentDTO(String name, String email, LocalDate bornDate) {
        this.id = count_id;
        count_id++;
        this.name = name;
        this.email = email;
        this.bornDate = bornDate;
    }


}
