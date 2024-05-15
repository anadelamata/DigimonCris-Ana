import { Component } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
