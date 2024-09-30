import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit() {
    // Lógica para manejar el envío del formulario
    alert('Mensaje enviado!'); // Puedes reemplazar esto con lógica real para enviar el mensaje
  }
}
