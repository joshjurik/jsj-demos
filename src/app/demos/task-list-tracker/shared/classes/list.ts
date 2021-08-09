import { Task } from './task';
import { Guid } from "guid-typescript";

export class List {
    public id: Guid;
    public name: string;
    public tasks: Task[];

    constructor(id: Guid = Guid.create(), name: string = '', tasks: Task[] = []) {
        this.id = id;
        this.name = name;
        this.tasks = tasks;
    }

    clone(): List {
        const list = new List();
        list.id = this.id;
        list.name = this.name;

        if(this.tasks && this.tasks.length > 0) {
            list.tasks = this.tasks.map(t => t.clone());
        }

        return list;

    }
}