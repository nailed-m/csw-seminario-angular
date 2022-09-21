import { Component } from '@angular/core';
import { Logger } from './logger.service';
@Component({
    selector: 'hello-world',
    templateUrl: './hello-world.component.html' 
})

export class HelloWorldComponent {
    // The code in this class drives the component's behavior.
    fontColor = 'blue';
    sayHelloId = 1;
    canClick = false;
    message = 'Hola Mundo';

    valor = 0;

    constructor(private logger: Logger) { }

    incrementar(){
        this.valor++;
        this.logger.writeCount(this.valor);
    }
    decrementar(){
        this.valor--;
    }

    sayMessage() {
        alert(this.message);
    }
}
