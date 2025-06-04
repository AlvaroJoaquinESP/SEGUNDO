package ecocharge.mapper;

import com.evaluable.ecocharge.dto.ChargerDTO;
import com.evaluable.ecocharge.entity.Charger;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface IChargerMapper {
    List<ChargerDTO> chargerTochargerDTO (List<Charger> charger);
    ChargerDTO chargerTochargerDTO (Charger charger);

}
