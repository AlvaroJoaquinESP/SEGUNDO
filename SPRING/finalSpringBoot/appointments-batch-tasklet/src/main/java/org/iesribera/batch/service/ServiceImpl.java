package org.iesribera.batch.service;

import org.generator.api.ControllerApi;
import org.generator.model.Patient;
import org.generator.model.PatientDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceImpl implements IService {
    @Override
    public List<String> listss(ControllerApi controllerApi) {



        for (PatientDTO patientDTO : )

        controllerApi.getAppointmentsByPatient()
    }
}
