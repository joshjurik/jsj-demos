import { Task } from './task';
import { Guid } from "guid-typescript";

export class List {
    public id: Guid;
    public name: string;
    public tasks: Task[];

    constructor() {
        this.id = Guid.create();
        this.name = '';
        this.tasks = [];
    }
}