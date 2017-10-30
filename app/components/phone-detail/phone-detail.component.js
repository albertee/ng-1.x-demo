var PhoneDetailController = function ($routeParams, $http) {
    // console.log($routeParams)
    $http.get('../../phones/' + $routeParams.phoneId + '.json').then(res => {
        console.log(res)
        this.phone = res.data;
    })
};

angular
    .module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'components/phone-detail/phone-detail.template.html',
        controller: ['$routeParams', "$http", PhoneDetailController]
    });
