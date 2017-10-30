var PhoneListController = function () {
    this.phones = [
        {
            name: 'Nexus S',
            age: 1,
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            age: 2,
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            age: 3,
            snippet: 'The Next, Next Generation tablet.'
        }
    ];
    this.orderProp = 'age';
};

// register component "phoneList" ==> module "phoneList"
angular.module('phoneList').component('phoneList', {
    templateUrl: 'components/phone-list/phone-list.template.html',
    controller: PhoneListController
});