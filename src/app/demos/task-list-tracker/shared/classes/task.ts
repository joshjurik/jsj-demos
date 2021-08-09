import { Guid } from "guid-typescript";

export class Task {
    public id: Guid;
    public name: string;
    public isCompleted: boolean;

    constructor(id: Guid = Guid.create(), name: string = '', isCompleted: boolean = false) {
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
    }

    clone(): Task {
        const task = new Task();
        task.id = this.id;
        task.name = this.name;
        task.isCompleted = this.isCompleted;
        return task;
    }
}