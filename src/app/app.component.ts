import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  name = "Vijay";
  day = new Date(1984, 6, 21);
  arr = [3,7,8,2,1];
}
