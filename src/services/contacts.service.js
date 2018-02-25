/**
 * Created by ahmed on 24/02/2018.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var ContactsService = (function () {
    function ContactsService(http) {
        this.http = http;
    }
    ContactsService.prototype.getContacts = function (motCle, page, size) {
        return this.http.get("http://localhost:8080/chercherContacts?mc=" + motCle + "&size=" + size + "&page=" + page)
            .map(function (resp) { return resp.json(); });
    };
    ContactsService.prototype.getContact = function (id) {
        return this.http.get("http://localhost:8080/contacts/" + id)
            .map(function (resp) { return resp.json(); });
    };
    ContactsService.prototype.saveContacts = function (contact) {
        return this.http.post("http://localhost:8080/contacts", contact)
            .map(function (resp) { return resp.json(); });
    };
    ContactsService.prototype.updateContact = function (contact) {
        return this.http.put("http://localhost:8080/contacts/" + contact.id, contact)
            .map(function (resp) { return resp.json(); });
    };
    ContactsService.prototype.deleteContact = function (id) {
        return this.http.delete("http://localhost:8080/contacts/" + id)
            .map(function (resp) { return resp.json(); });
    };
    ContactsService = __decorate([
        core_1.Injectable()
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map