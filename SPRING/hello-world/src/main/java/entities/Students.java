package entities;

import java.time.LocalDate;

public class Students {

    private String name;
    private String email;
    private Integer id;
    private LocalDate bornDate;

    public Students(String name, String email, Integer id, LocalDate bornDate)
    {
        this.name = name;
        this.email = email;
        this.id = id;
        this.bornDate = bornDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getBornDate() {
        return bornDate;
    }

    public void setBornDate(LocalDate bornDate) {
        this.bornDate = bornDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
