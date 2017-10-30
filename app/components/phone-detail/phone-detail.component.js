var PhoneDetailController = function ($routeParams, $http) {
    this.setImage = imageUrl => this.mainImageUrl = imageUrl;

    // console.log($routeParams)
    $http.get('../../phones/' + $routeParams.phoneId + '.json').then(res => {
        // console.log(res);
        this.phone = res.data;
        this.mainImageUrl = res.data.images[0];
    })
};

angular
    .module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'components/phone-detail/phone-detail.template.html',
        controller: ['$routeParams', "$http", PhoneDetailController]
    });
