import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../../intefaces/character.interface';
import { DragonballCharacterAdd } from "../../components/dragonball/dragonball-character-add/dragonball-character-add";

@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, DragonballCharacterAdd]
})

export class DragonballSuperPageComponent {  

  name = signal("")
  power = signal(0)

  characters = signal<Character[]>([]);

  actualLenght = computed( () => this.characters().length)


  addCharacter(character : Character) {
    this.characters.update(list => [...list, character])
  }

}
