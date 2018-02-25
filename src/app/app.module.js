"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var contacts_component_1 = require('./contacts/contacts.component');
var about_component_1 = require('./about/about.component');
var contacts_service_1 = require("../services/contacts.service");
var new_contact_component_1 = require('./new-contact/new-contact.component');
var nouveau_contact_component_1 = require('./nouveau-contact/nouveau-contact.component');
var edit_contact_component_1 = require('./edit-contact/edit-contact.component');
var appRoutes = [
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'editContact/:id', component: edit_contact_component_1.EditContactComponent },
    { path: 'new-contact', component: new_contact_component_1.NewContactComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                contacts_component_1.ContactsComponent,
                about_component_1.AboutComponent,
                new_contact_component_1.NewContactComponent,
                nouveau_contact_component_1.NouveauContactComponent,
                edit_contact_component_1.EditContactComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule
            ],
            providers: [contacts_service_1.ContactsService],
            bootstrap: [app_component_1.AppComponent,
                contacts_component_1.ContactsComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map