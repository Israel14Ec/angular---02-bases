import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [],
  templateUrl: './dragonball-page.html',
})

export class DragonballPageComponent {  

  name = signal("")
  power = signal(0)

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 15000
    },
    /*
    {
      id: 2,
      name: 'Vegeta',
      power: 13500
    },
    {
      id: 3,
      name: 'Gohan',
      power: 5000
    },
    {
      id: 4,
      name: 'Yancha',
      power: 500
    },
    */
  ]);

  /*
  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  })
    */

  addCharacter() {
    if( !this.name() || !this.power || this.power() <= 0) {
      return
    }

    const newCharacter : Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    //this.characters().push(newCharacter) //Agregar

    //Opción recomendada para agregar
    this.characters.update(
      list => [...list, newCharacter]
    )
    this.resetFields()

  }

  
    resetFields() {
      this.name.set('')
      this.power.set(0)
    }
}
