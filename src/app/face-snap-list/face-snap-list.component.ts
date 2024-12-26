import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
 /* mySnap!: FaceSnap;
    myOtherSnap!: FaceSnap;
    myLastSnap!: FaceSnap; */
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapService){}

  ngOnInit(): void
  { 
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    /* this.faceSnaps[1].setLocation('à la montagne');
    this.faceSnaps[0].setLocation('à Paris'); */
  }
}
