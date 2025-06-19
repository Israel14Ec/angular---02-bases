import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal, WritableSignal } from "@angular/core";

@Component({
    selector: "hero-page",
    templateUrl: "./hero-page.component.html",
    imports: [
        UpperCasePipe //Importo uppercase 
    ]
})
export class HeroPageComponent {

    //señal
    name : WritableSignal<string> = signal("Ironman")
    age = signal(45)

    //señal computada, cambia cuando sus dependencias que sean señales cambia
    heroDescription = computed(() => `${this.name()} - ${this.age()}`)
    capitalice = computed(() => this.name().toUpperCase())

    getHeroDescription() {
        return `${this.name()} - ${this.age()}`
    }

    changeHero() {
        this.name.set("Spiderman")
        this.age.set(22)
    }

    resetForm() {
        this.name.set("Ironman")
        this.age.set(45)
    }

    changeAge(){
        this.age.set(60)
    }

}