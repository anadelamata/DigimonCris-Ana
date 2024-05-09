import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';
import { DataDigimon } from '../../common/data-digimon';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  
  personajes!: DataDigimon
  private data: DataService = inject(DataService);

  constructor(){
    this.cargarRM();
}

private cargarRM(){
  this.data.loadDigimon().subscribe({
    next: (datos: DataDigimon) =>{
      this.personajes = datos;
    }, 
    error: (err: string) =>{
      console.log(err);
    }, 
    complete: () =>{
      console.log("Complete");
    }
  })
}
cambiarPag(pag: string){
  switch(pag){
    case "first":
      this.loadPag("https://digi-api.com/api/v1/digimon?page=1");
      break;
    case "prev":
      this.loadPag(this.personajes.pageable.previousPage);
      break
    case "next":
      this.loadPag(this.personajes.pageable.nextPage);
      break;
    case "last":
      this.loadPag("https://digi-api.com/api/v1/digimon?page=" + 50);
      break;
    default:
      break;
  }
}

private loadPag(pag: string){
  this.data.reloadPag(pag).subscribe({
    next: (datos: DataDigimon) =>{
      this.personajes = datos;
    }, 
    error: (err: string) =>{
      console.log(err);
    }, 
    complete: () =>{
      console.log("Complete");
    }
  })
}









  /******************************************************************************************/
  /*personajes!: DataGot
  private data: DataService = inject(DataService);

  constructor(){
      this.cargarRM();
  }

  private cargarRM(){
    this.data.loadGOT().subscribe({
      next: (datos: DataGot) =>{
        this.personajes = datos;
      }, 
      error: (err: string) =>{
        console.log(err);
      }, 
      complete: () =>{
        console.log("Complete");
      }
    })
  }*/

  /*cambiarPag(pag: string){
    switch(pag){
      case "first":
        this.loadPag("https://rickandmortyapi.com/api/character/?page=1");
        break;
      case "prev":
        this.loadPag(this.personajes.);
        break
      case "next":
        this.loadPag(this.personajes.info.next);
        break;
      case "last":
        this.loadPag("https://rickandmortyapi.com/api/character/?page=" + 42);
        break;
      default:
        break;
    }*/

    /*private loadPag(pag: string): void {
      this.data.reloadPag(pag).subscribe({
        next: (datos: dataSimpsons) =>{
          this.personajes = datos;
        },
        error: (err: string) =>{
          console.log(err);
        },
        complete: () =>{
          console.log("Complete");
        }
      })
    }*/

}
