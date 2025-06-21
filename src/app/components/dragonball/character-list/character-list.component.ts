import { Component, input } from '@angular/core';
import type { Character } from '../../../../intefaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {

  //input: permite que el componente padre le mando información (props)
  characters = input.required<Character[]>()
  listName = input.required<string>()
}
