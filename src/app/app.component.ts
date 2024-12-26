import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";

/* import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
  */
/* import { FaceSnap } from './models/face-snap'; */

@Component({
  selector: 'app-root',
  imports: [
    //FaceSnapComponent,
    /* FaceSnapListComponent */
    HeaderComponent,
    RouterOutlet,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {  
}