"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var model_contact_1 = require("../../model/model.contact");
var EditContactComponent = (function () {
    function EditContactComponent(activatedRoute, contactsService, router) {
        this.activatedRoute = activatedRoute;
        this.contactsService = contactsService;
        this.router = router;
        this.mode = 1;
        this.contact = new model_contact_1.Contact();
        this.idContact = activatedRoute.snapshot.params['id'];
        console.log("................");
        console.log(activatedRoute.snapshot.params['id']);
        console.log("................");
    }
    EditContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactsService.getContact(this.idContact)
            .subscribe(function (data) {
            _this.contact = data;
        }, function (err) {
            console.log(err);
        });
    };
    EditContactComponent.prototype.updateContact = function () {
        var _this = this;
        this.contactsService.updateContact(this.contact)
            .subscribe(function (data) {
            alert("Mise à jur effectuée");
            _this.router.navigate(['contacts']);
        }, function (err) {
            console.log(err);
            alert("probleme");
        });
    };
    EditContactComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-contact',
            templateUrl: './edit-contact.component.html',
            styleUrls: ['./edit-contact.component.css']
        })
    ], EditContactComponent);
    return EditContactComponent;
}());
exports.EditContactComponent = EditContactComponent;
//# sourceMappingURL=edit-contact.component.js.map