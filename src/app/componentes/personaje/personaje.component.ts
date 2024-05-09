import { Component, inject } from '@angular/core';
import { Content, DataDigimon } from '../../common/data-digimon';
import { DataService } from '../../services/data-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  personaje!: Content

  private data: DataService = inject(DataService);
  private ActivatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private Router: Router = inject(Router);

  constructor(){
      this.cargarRM();
  }
  
  private cargarRM(){
    const id = this.ActivatedRoute.snapshot.params["id"];
    this.data.loadChar(id).subscribe({
      next: (datos: Content) =>{
        this.personaje = datos;
      }, 
      error: (err: string) =>{
        console.log(err);
      },
      complete: () =>{
        console.log("Complete");
      }
    });
  }

  cambiarChar(id: number){
    if(id > 0 && id < 255){

    }
    this.Router.navigateByUrl("/personajes/" + id).then(() => this.cargarRM());
  }
}
