import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballCharacterAdd } from "../../components/dragonball/dragonball-character-add/dragonball-character-add";
import { DragonBallService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, DragonballCharacterAdd]
})

export class DragonballSuperPageComponent {  

  //Inyecto el servicio - Es la forma antigua
  /*
    constructor(
      public dragonballService : DragonBallService
    ){}
  */

  //Nueva inyección de dependencias
  public dragonballservice = inject(DragonBallService);
  
  

}
