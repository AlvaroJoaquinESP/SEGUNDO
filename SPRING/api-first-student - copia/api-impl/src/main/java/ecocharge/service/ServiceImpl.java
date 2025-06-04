package ecocharge.service;

import com.evaluable.ecocharge.dto.AvailabilityDTO;
import com.evaluable.ecocharge.mapper.IChargerMapper;
import com.evaluable.ecocharge.repository.IAvailabitilyRepository;
import com.evaluable.ecocharge.repository.IChargerRepository;
import com.evaluable.ecocharge.repository.IStationRepository;
import org.springframework.stereotype.Service;

@Service
public class ServiceImpl implements IService{
    private final IAvailabitilyRepository IAvailabilityRepo;
    private final IChargerRepository IChargerRepo;
    private final IStationRepository IStationRepo;
    private final IChargerMapper chargerMapper;

    public ServiceImpl(IAvailabitilyRepository iAvailabilityRepo, IChargerRepository iChargerRepo, IStationRepository iStationRepo, IChargerMapper chargerMapper) {
        IAvailabilityRepo = iAvailabilityRepo;
        IChargerRepo = iChargerRepo;
        IStationRepo = iStationRepo;
        this.chargerMapper = chargerMapper;
    }


    /*
    @Override
    public ChargerDTO createCharger(RequestChargerDTO requestChargerDTO) {
        RequestChargerDTO RequestChargerDTO1 = RequestChargerDTO.builder()
                .serialNumber(requestChargerDTO.getSerialNumber())
                .type(requestChargerDTO.getType())
                .status(requestChargerDTO.getStatus())
                .powerKW(requestChargerDTO.getPowerKW())
                .installationDate(requestChargerDTO.getInstallationDate())
                .station(requestChargerDTO.getStation()).build();

        return this.chargerMapper.chargerTochargerDTO
                ()
    }
*/
    @Override
    public AvailabilityDTO getAvailability(AvailabilityDTO station) {
        return null;
    }
}
