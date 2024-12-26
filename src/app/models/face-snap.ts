// export class FaceSnap {
//     title: string;
//     description: string;
//     imageUrl: string;
//     createdDate: Date;
//     snaps: number;
//    

import { SnapType } from "./snap-type.type";

    
//     constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
//       this.title = title;
//       this.description = description;
//       this.imageUrl = imageUrl;
//       this.createdDate = createdDate;
//       this.snaps = snaps;
//     }
//   }
  export class FaceSnap {
    location?: string;
    id: string;

    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public snaps: number) {
           this.id = crypto.randomUUID().substring(0, 8);
         }

       addSnap(): void{
        this.snaps++;
       }   
       removeSnap(): void{
        this.snaps--;
       } 
       
      snap(snapType: SnapType){
        if(snapType === 'snap'){
          this.addSnap();
        } else if (snapType === 'unsnap'){
          this.removeSnap();
        }
      }

       setLocation(location: string): void {
        this.location = location;
       }

       withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
       }
  }
  
