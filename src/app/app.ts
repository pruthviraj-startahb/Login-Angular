import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  email: string = '';
  pass: string = '';

  onLogin() {
    if (this.email === 'pruthvi21@gmail.com' && this.pass === '1234') {
      alert('Login Successful');
    } else {
      alert('Invalid Credentials');
    }
  }
}
