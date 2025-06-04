package ecocharge.controller;

import com.evaluable.ecocharge.service.IService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/chargers/", "/availability/", "/station/"})

public class Controller {

    private final IService service;

    public Controller(IService service) {
        this.service = service;
    }
}
