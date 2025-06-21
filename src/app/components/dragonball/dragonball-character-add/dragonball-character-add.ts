import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../../../intefaces/character.interface';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html',
})
export class DragonballCharacterAdd {

  name = signal("")
  power = signal(0)
  actualLenght = input.required<number>() //Prop

  //Es un evento, con output permite la comunicación de un componente hijo a padre (emitir)
  //Emitimes un evento para mandar el personaje
  newCharacter = output<Character>(); 

  
  addCharacter() {
    if( !this.name() || !this.power || this.power() <= 0) {
      return
    }

    const newCharacter : Character = {
      id: this.actualLenght() + 1,
      name: this.name(),
      power: this.power()
    }

    console.log(newCharacter);
    

    //Emitimos al padre
    this.newCharacter.emit(newCharacter)
    this.resetFields()

  }

    
    resetFields() {
      this.name.set('')
      this.power.set(0)
    }
}
