import { Team }  from './Team';

export class Match {
private pointsHomeTeam: number;
private pointsAwayTeam:number;
private homeTeam: Team;
private awayTeam: Team;

public constructor(homeTeam:Team, awayTeam:Team) {}
public getHomeTeam(): Team {
    return;
}
public setHomeTeam(team:Team) {}

public getAwayTeam(): Team {
    return;
}
public setAwayTeam(team:Team) {}

public getPointsHomeTeam(): number {
    return;
}
public getPointsAwayTeam(): number {
    return;
}

private setPointsHomeTeam(points:number) {}

private setPointsAwayTeam(points:number) {}

public play() {}

}