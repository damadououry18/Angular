import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {

   private faceSnaps: FaceSnap [] = [
        new FaceSnap(
          'Archibald',
          'Mon meilleur ami depuis toujours !',
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          new Date(),
          6
        ).withLocation('à Paris'),
        new FaceSnap(
          'Three Rock Mountain',
          'Un endroit magnifique pour les randonnées.',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          new Date(),
          47
        ).withLocation('à la montagne'),
        new FaceSnap(
          'Une Tourtue',
          "L'ocean regorge des ressources magnifiques",
          'https://thefunnybeavercomd030b.zapwp.com/q:i/r:0/wp:1/w:1/u:https://thefunnybeaver.com/wp-content/uploads/2019/09/funny-grumpy-snapface.jpg',
          new Date(),
          15
        ).withLocation('Dans l ocean Atlantique'),
        new FaceSnap(
          'Un bon repas',
          'Mmmh que c\'est bon !',
          'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          new Date(),
          156
        ).withLocation('')
    ];

      getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
      }

      getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!foundFaceSnap){
            throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
      }

      snapFaceSnapById(faceSnapId: string, SnapType: SnapType): void 
      {
       /*  const foundFaceSnap : FaceSnap | undefined = this.faceSnaps.find(
            faceSnap : FaceSnap => faceSnap.id === faceSnapId
        ); */
        const faceSnap:FaceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(SnapType);
      }

      /* unsnapFaceSnapById(faceSnapId: string): void {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        foundFaceSnap.removeSnap(); */
    
}