var PhoneDetailController = function ($routeParams) {
    this.phoneId = $routeParams.phoneId;
};

angular
    .module('phoneDetail')
    .component('phoneDetail', {
        template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
        controller: ['$routeParams', PhoneDetailController]
    });
