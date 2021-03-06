"use strict";
var testing_1 = require('@angular/core/testing');
var contacts_component_1 = require('./contacts.component');
describe('ContactsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [contacts_component_1.ContactsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(contacts_component_1.ContactsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contacts.component.spec.js.map