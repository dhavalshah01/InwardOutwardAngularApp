import { Purposeofinw } from './purposeofinw';
import { Branch } from './branch';
import { RefInwards } from './ref-inwards';
import { InwardStatus } from './inward-status';

export class Inward {
   Id:number;
   InwardDate: Date; 
   InwardNumber :number;
   ReferenceNumber:number;
   RefInwardDate: Date;
   Subject: string;

   Deleted: boolean ;
   CreatedBy:string;
   CreatedOnUtc: string;
   UpdatedOnUtc: string;

   PurposeId : number;
   Purposeofinw :Purposeofinw[];

   BrId:number;
   Branch:Branch[];

   RefeId:number;
   RefInwards:RefInwards[];

   InwStatusId:number;
   InwardStatus: InwardStatus[];

    constructor(values:Object ={}){
        Object.assign(this,values);
    }
}
