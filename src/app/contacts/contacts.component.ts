import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { ContactsService} from "../../services/contacts.service";
import {Router} from "@angular/router";
import {Contact} from "../../model/model.contact";

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
    providers:[ContactsService]
})
export class ContactsComponent implements OnInit {

  pagePhotos:any;
  currentPage:number=0;
  size:number=3;
  totalPages:number;
  motCle:string="";
  pages:Array<number>=[];
  pageContacts:any;

  constructor(private contactsService:ContactsService,public router:Router) { }

  ngOnInit() {


  }
  onEditContact(id:number){
  this.router.navigate(['editContact',id]);
  }

  onDeleteContact(c:Contact){
    alert(c.id);
    let confirm=window.confirm('Est vous sure?');
    if(confirm==true){
      this.contactsService.deleteContact(c.id)
        .subscribe(data=>{
          this.pageContacts.content.splice(this.pageContacts.content.indexOf(c),1)
        },err=>{
          console.log(err);
        });
    }

  }

  goToPage(i){
    this.currentPage=i;
    this.doSearch();//{motCle:this.motCle}
  }
  doSearch(){
    this.contactsService.getContacts(this.motCle,this.currentPage,this.size)
        .subscribe(data=>{
          this.pageContacts=data;
          this.pages=new Array(data.totalPages);
        },err=>{
          console.log(err);
        })
  }
  chercher(){
        this.doSearch();
  }

}
