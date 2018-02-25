"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NouveauContactComponent = (function () {
    function NouveauContactComponent(contactsService) {
        this.contactsService = contactsService;
    }
    NouveauContactComponent.prototype.ngOnInit = function () {
    };
    NouveauContactComponent.prototype.onSaveContact = function (dataForm) {
        this.contactsService.saveContacts(dataForm)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(JSON.parse(err.body).message);
        });
    };
    NouveauContactComponent = __decorate([
        core_1.Component({
            selector: 'app-nouveau-contact',
            templateUrl: './nouveau-contact.component.html',
            styleUrls: ['./nouveau-contact.component.css']
        })
    ], NouveauContactComponent);
    return NouveauContactComponent;
}());
exports.NouveauContactComponent = NouveauContactComponent;
//# sourceMappingURL=nouveau-contact.component.js.map