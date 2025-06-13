package org.iesribera.batch.mapper;

import org.generator.model.Agent;
import org.generator.model.AgentDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IMapper {
    Agent agentDTOtoAgent (AgentDTO agentDTO);
}
