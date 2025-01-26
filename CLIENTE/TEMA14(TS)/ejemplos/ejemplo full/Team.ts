import { League } from './League';
import { Player } from './Player';

export class Team {

    private shortName: string;
    private longName: string;
    private imageSrc: string;
    private president: string;
    private sponsor: string;
    private members: number;
    private budget: number = 0;
    private founded: number;
    private leage:League;
    private player: Player;

    public constructor(shortName: string = "", longName: string = "", imageSrc: string = "", president: string = "", sponsor: string = "", members: number = 0, budget: number = 0, founded: number = 0) {
    }

    public getShortName(): string {
        return;
    }
    public setShortName(shortName: string) {
    }

    public getLongName(): string {
        return;
    }
    public setLongName(longName: string) {
    }

    public getImageSrc(): string {
        return;
    }
    public setImageSrc(imageSrc: string) {
    }

    public getPresident(): string {
        return;
    }
    public setPresident(president: string) {
    }

    public getSponsor(): string {
        return;
    }
    public setSponsor(sponsor: string) {
    }

    public getMembers(): number {
        return;
    }
    public setMembers(members: number) {
    }

    public getBudget(): number {
        return;
    }
    public setBudeget(budget:number) {
    }

    public getFounded(): number {
        return;
    }
    public setFounded(founded:number) {
    }
public addPlayer(player:Player) {
    }

public removePlayer(player:Player) {
}

public getSquad() :Player[] {
    return ;
}
public setSquad(squad:Player[]) {
 }
 public getLineup() :Player[] {
    return ;
}
public setLineup(squad:Player[]) {
 }

 public getPlayerByNumber(number:number) :Player {
     return ;
 }
 public getLeague() : League {
     return;
 }
 public setLeague(league:League) {
}

public toString(): string {
    return;
}

}