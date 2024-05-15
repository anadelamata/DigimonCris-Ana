import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Content, DataDigimon } from "../common/data-digimon";
import { PersonajeComponent } from "../componentes/personaje/personaje.component";
import { PersonajeDigi } from "../common/personaje-digi";

@Injectable({
    providedIn: 'root'
  })

export class DataService {

    constructor(private http: HttpClient) { }

    /*loadSimpsons(): Observable <dataSimpsons>{
        return this.http.get<dataSimpsons>("https://api.sampleapis.com/simpsons/characters");
    }
    reloadPag(pag: string): Observable <dataSimpsons>{
        return this.http.get<dataSimpsons>(pag);
      }*/
    /*loadGOT(): Observable<DataGot>{
      return this.http.get<DataGot>("https://thronesapi.com/api/v2/Characters");
    }*/
    loadDigimon(): Observable<DataDigimon>{
      return this.http.get<DataDigimon>("https://digi-api.com/api/v1/digimon");
    }    
    loadChar(id: string): Observable <PersonajeDigi>{
      return this.http.get<PersonajeDigi>("https://digi-api.com/api/v1/digimon/" + id);
    }
    reloadPag(pag: string): Observable <DataDigimon>{
      return this.http.get<DataDigimon>(pag);
    }
   
}
