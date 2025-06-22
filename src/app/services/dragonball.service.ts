import { computed, Injectable, signal, effect } from '@angular/core';
import { Character } from '../../intefaces/character.interface';

const loadFormLocalStorage = () : Character[] => {

    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
}

//Un servicio es una clase que se utiliza inyección de depencia (Usa Singleton)
// Un servicio nos proporciona una data centralizada en toda la aplicación como un estado global
@Injectable({ providedIn: 'root' })
export class DragonBallService  {

  constructor() {
    effect(() => {
        
    })
  }

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>(loadFormLocalStorage());

  actualLenght = computed(() => this.characters().length);

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }

  //Efecto como watch en vue o useEffect-> No se recomienda para hacer peticiones HTTP
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  
}
