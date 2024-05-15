import { Component } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
