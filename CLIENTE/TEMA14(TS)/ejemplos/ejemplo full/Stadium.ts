import { Team } from './Team';

export class Stadium {

    private name: string;
    private address: string;
    private location: string;
    private capacity: number;
    private parkingLots: number;
    private created: Date;
    private team: Team;

    public constructor(name: string, address: string, location: string, capacity: number, parkingLots: number, created: Date) {

    }

    public getName(): string {
        return;
    }
    public setName(value: string) {
    }


    public getAddres(): string {
        return;
    }
    public setAddres(value: string) {
    }

    public getLocation(): string {
        return;
    }
    public setLocation(value: string) {
    }


    public getCapacity(): number {
        return;
    }
    public setCapacity(value: number) {
    }

    public getParkingLots(): number {
        return;
    }
    public setParkingLots(value: number) {
    }

    public getCreated(): number {
        return;
    }
    public setCreated(created: number) {
    }
    public addTeam(team: Team) {
    }
    public removeTeam(team: Team) {
    }
    public getTeam(): Team {
        return;
    }
    public toString(): string {
        return;
    }

}