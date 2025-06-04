package student.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
public class UpdateStudentRequest {

    @NotNull
    private String name;
    @NotNull
    private String email;
    @NotEmpty
    private LocalDate bornDate;

    public UpdateStudentRequest(LocalDate bornDate, String email, String name) {
        this.bornDate = bornDate;
        this.email = email;
        this.name = name;
    }
}
