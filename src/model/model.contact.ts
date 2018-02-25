/**
 * Created by ahmed on 24/02/2018.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class Contact{
    id:any=null;
    nom:string="";
    prenom:string="";
    email:string="";
    dateNaissance:Date;
    tel:number=0;
    photo:string="";

/*    constructor(public nom:string,
                public prenom:string,
                public email:string,
                public tel:number,
                public photo:string){

    }*/
}