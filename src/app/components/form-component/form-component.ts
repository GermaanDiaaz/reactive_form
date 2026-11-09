import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-component',
  styleUrl: './form-component.css',
  templateUrl: './form-component.html',
})
export class FormComponent {

  titulo = new FormControl('');
  descripcion = new FormControl('');
  categoria = new FormControl('');
  etiquetas = new FormControl('');
  email = new FormControl('');
  publicacion = new FormControl('');


}
