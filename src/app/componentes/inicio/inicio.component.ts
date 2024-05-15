import { Component } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
