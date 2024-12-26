import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    /* UpperCasePipe,
    LowerCasePipe, */
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent  implements OnInit{
    faceSnap!: FaceSnap;
    snapButtonText!: string;
    userHasSnapped!: boolean;


   constructor(private faceSnapsService: FaceSnapService,
               private route: ActivatedRoute){}
    myLargeNumber:number = 4667916.76;
    myPercentage : number = 0.3367;
    myprice : number = 336.75;

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }
 
  onSnap(): void{
    if(this.userHasSnapped){
      this.unSnap();
    }else{
      this.snap();
    }
  }

  unSnap(){
    /* this.faceSnap.removeSnap(); */
   /*  this.faceSnapsService.unsnapFaceSnapById(this.faceSnap.id); */
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap(){
    /* this.faceSnap.addSnap(); */
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }

  private prepareInterface() {
    this.snapButtonText ='Oh Snap!';
    this.userHasSnapped = false;
  }
  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

}
