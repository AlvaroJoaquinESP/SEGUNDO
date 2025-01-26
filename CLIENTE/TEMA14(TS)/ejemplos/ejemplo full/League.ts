import { Country } from "./Country";
import { Team } from "./Team";

export class League {
    private _shortName: string;
    
    private _longName: string;
    private country: Country;
    private team:Team[];


constructor(shortName:string, LongName:string,country:Country) {

}


public get shortName(): string {
    return ;
}
public set shortName(value: string) {
}

public get longName(): string {
    return ;
}
public set longName(value: string) {
}

public getCountry() :Country {
return ;
}
public setCountry(country:Country) {
    }
    
public getTeams(): Team {
    return ;
}

public setTeams(team:Team){
    
}

public removeTeam(team:Team) {

}

public toString():string {
    return;
}
    
}