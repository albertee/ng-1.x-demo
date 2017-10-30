var PhoneDetailController = function ($routeParams, Phone) {
    this.setImage = imageUrl => this.mainImageUrl = imageUrl;
    this.phone = Phone.get({
        phoneId: $routeParams.phoneId
    }, phone => this.setImage(phone.images[0]))
    // console.log($routeParams)
};

angular
    .module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'components/phone-detail/phone-detail.template.html',
        controller: ['$routeParams', 'Phone', PhoneDetailController]
    });


// var PhoneDetailController = function ($routeParams, $http) {
//     this.setImage = imageUrl => this.mainImageUrl = imageUrl;
//
//     // console.log($routeParams)
//     $http.get('../../phones/' + $routeParams.phoneId + '.json').then(res => {
//         // console.log(res);
//         this.phone = res.data;
//         this.mainImageUrl = res.data.images[0];
//     })
// };
//
// angular
//     .module('phoneDetail')
//     .component('phoneDetail', {
//         templateUrl: 'components/phone-detail/phone-detail.template.html',
//         controller: ['$routeParams', "$http", PhoneDetailController]
//     });
