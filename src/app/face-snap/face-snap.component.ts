import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [
    // NgStyle,
    // NgClass,
    /* UpperCasePipe,
    LowerCasePipe, */
    TitleCasePipe
    // DatePipe,
    // DecimalPipe,
    // PercentPipe,
    // CurrencyPipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent  //implements OnInit
{

 
    @Input() faceSnap!: FaceSnap;
      // snapButtonText!: string;
      // userHasSnapped!: boolean;


    constructor(private router: Router
               //private faceSnapsService: FaceSnapService
              ){}
    onViewFaceSnap() {
      this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    }

      // myLargeNumber:number = 4667916.76;
      // myPercentage : number = 0.3367;
      // myprice : number = 336.75;

    // ngOnInit(): void {
    //    this.userHasSnapped = false;
    //    this.snapButtonText ='Oh Snap!';
    // }

    // onSnap(): void{
    //   if(this.userHasSnapped){
    //     this.unSnap();
    //   }else{
    //     this.snap();
    //   }
    // }

    // unSnap(){
    //   /* this.faceSnap.removeSnap(); */
    // /*  this.faceSnapsService.unsnapFaceSnapById(this.faceSnap.id); */
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    //   this.snapButtonText = 'Oh Snap!';
    //   this.userHasSnapped = false;
    // }

    // snap(){
    //   /* this.faceSnap.addSnap(); */
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    //   this.snapButtonText = 'Oops, unSnap!';
    //   this.userHasSnapped = true;
    // }

}
