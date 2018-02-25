import { Component, OnInit } from '@angular/core';
import { ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactsService:ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm){
    this.contactsService.saveContacts(dataForm)
                        .subscribe(data=>{
                          console.log(data);
                        },err=>{
                          console.log(JSON.parse(err.body).message);
                        });

  }

}
