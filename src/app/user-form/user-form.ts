import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  name = '';
  email = '';

  submitForm()
  {
    alert(`Name: ${this.name}\n Email:${this.email}`);
  }
}
