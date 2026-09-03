import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { UserForm } from './user-form/user-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, UserForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-day1-task');
}
