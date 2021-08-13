declare module "*.png" {
    const value: any;
    export = value;
 }

/// <reference types="react" />

declare module "reactMobxApp/ToDoList" {
    const ToDolist: React.ComponentType;

    export default ToDolist;
}