package ecocharge.service;

import com.evaluable.ecocharge.dto.AvailabilityDTO;


public interface IService {
   // ChargerDTO createCharger(RequestChargerDTO requestChargerDTO);
    AvailabilityDTO getAvailability(AvailabilityDTO station);
}
