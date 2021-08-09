import { Guid } from "guid-typescript";

export class Task {
    public id: Guid;
    public name: string;
    public isCompleted: boolean;

    constructor() {
        this.id = Guid.create();
        this.name = '';
        this.isCompleted = false;
    }
}