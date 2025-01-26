import { Country} from './Country';
import { Position } from './Position';
import { Training } from './Training';
import { Team } from './Team';
import { PlayerAttributes } from './PlayerAttributes';

export class Player {

public number: number;
public numInternational:number=0;
public injuredWeeks:number=0;
private attributes:PlayerAttributes;
public weight:number;
public height:number;
private training:Training;
private country:Country;
private team:Team;


public constructor( public name:string, public surname:string, public nick:string, public birthdate:Date,  country:Country, public salary:number, public cancelationClause:number, public contractYears:number, team: Team, number:number, height:number, weight:number, numInternational:number) {

}

public getNumber(): number {
    return ;
}
public setNumber(value: number) {
}

public getNumInternational(): number {
    return ;
}
public setNumInternational(value: number) {
}

public getPosition():Position {
    return ;
}

public setPosition(value: Position) {

}

public isInjured() :boolean {
    return ;
}

public getInjuredWeeks() : number {
    return ;
}

public setInjuredWeeks(value: number) {
    }

public getTraining() : Training {
    return;
}
public setTraining(value: Training) {
    }
public toString() :string {
    return;
}
}