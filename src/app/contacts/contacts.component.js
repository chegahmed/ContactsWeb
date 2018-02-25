"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require("rxjs/add/operator/map");
var contacts_service_1 = require("../../services/contacts.service");
var ContactsComponent = (function () {
    function ContactsComponent(contactsService, router) {
        this.contactsService = contactsService;
        this.router = router;
        this.currentPage = 0;
        this.size = 3;
        this.motCle = "";
        this.pages = [];
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent.prototype.onEditContact = function (id) {
        this.router.navigate(['editContact', id]);
    };
    ContactsComponent.prototype.onDeleteContact = function (c) {
        var _this = this;
        alert(c.id);
        var confirm = window.confirm('Est vous sure?');
        if (confirm == true) {
            this.contactsService.deleteContact(c.id)
                .subscribe(function (data) {
                _this.pageContacts.content.splice(_this.pageContacts.content.indexOf(c), 1);
            }, function (err) {
                console.log(err);
            });
        }
    };
    ContactsComponent.prototype.goToPage = function (i) {
        this.currentPage = i;
        this.doSearch(); //{motCle:this.motCle}
    };
    ContactsComponent.prototype.doSearch = function () {
        var _this = this;
        this.contactsService.getContacts(this.motCle, this.currentPage, this.size)
            .subscribe(function (data) {
            _this.pageContacts = data;
            _this.pages = new Array(data.totalPages);
        }, function (err) {
            console.log(err);
        });
    };
    ContactsComponent.prototype.chercher = function () {
        this.doSearch();
    };
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'app-c',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.css'],
            providers: [contacts_service_1.ContactsService]
        })
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map