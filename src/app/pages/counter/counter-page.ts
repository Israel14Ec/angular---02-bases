import { Component, signal } from "@angular/core";

@Component({
    templateUrl: "./counter-page.html",
    styles: `
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `,
    //changeDetection: ChangeDetectionStrategy.OnPush, //No usa Zone.js, cuando no usa no detecta los cambios angular tradicional
})
export class CounterPageComponent {

    counter = 10;
    counterSignal = signal(10); //Señal en angular (signal crea una variable reactiva, cuando la señal cambia actualiza el HTML que lo usa)

    constructor() {
        setInterval(() => {
            this.counterSignal.update((prev) => prev + 1 )
            this.counter += 1
            console.log("tick")
        }, 1000)
    }

    increaseBy(value: number) {
        this.counter += value;

        //Actual
        this.counterSignal.update((prev) => prev + value )
    }

    decreaseBy(value: number) {
        this.counter -= value;

        //Actualizar la señal, cuando se necesita el valor anterior
        this.counterSignal.update( (prev) => prev -value )
    }

    resetCounter() {
        this.counter = 10;

        //Actualizar el valor de la señal
         this.counterSignal.set(10)
    }
}