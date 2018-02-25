"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var model_contact_1 = require('../../model/model.contact');
var NewContactComponent = (function () {
    function NewContactComponent(contactsService) {
        this.contactsService = contactsService;
        this.contact = new model_contact_1.Contact();
        this.mode = 1;
    }
    NewContactComponent.prototype.ngOnInit = function () {
    };
    NewContactComponent.prototype.saveContact = function () {
        var _this = this;
        this.contactsService.saveContacts(this.contact)
            .subscribe(function (data) {
            _this.contact = data;
            _this.mode = 2;
        }, function (err) {
            console.log(err);
        });
    };
    NewContactComponent = __decorate([
        core_1.Component({
            selector: 'app-new-contact',
            templateUrl: './new-contact.component.html',
            styleUrls: ['./new-contact.component.css']
        })
    ], NewContactComponent);
    return NewContactComponent;
}());
exports.NewContactComponent = NewContactComponent;
//# sourceMappingURL=new-contact.component.js.map