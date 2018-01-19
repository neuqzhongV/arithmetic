/**
 * created by zhongwei 8/13/17
 */
import { IComponent } from "./IComponent";
import { Component } from './Component';
import { DeduplicateComponent } from './DeduplicateComponent';
import { OptimizeComponent } from './OptimizeComponent';


export class Decorators implements IComponent {

    component = new Component();
    deduplicateComponent = new DeduplicateComponent();
    optimizeComponent = new OptimizeComponent();

    optimizeData(data: Array<any>) {
        this.component.optimizeData(data);
        this.deduplicateComponent.optimizeData(data);
        this.optimizeComponent.optimizeData(data);
    }
}