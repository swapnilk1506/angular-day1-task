import { Component } from '@angular/core';
import { Highlight } from "../highlight";

@Component({
  selector: 'app-user',
  imports: [Highlight],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name = 'Swapnil'; //Properties
  role = 'FullStack Developer';//Properties
  isButtonDisabled = false;//Boolean Property
  
  //Method
  //We call this method using event binding when button is clicked.
  showMessage(){
    alert('Welcome to Angular Data Binding!');
  }
}
