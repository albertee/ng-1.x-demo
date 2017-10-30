var PhoneListController = function ($http) {
    this.orderProp = 'age';
    $http.get('../../phones/phones.json').then(res => {
        this.phones = res.data;
    })
};

// register component "phoneList" ==> module "phoneList"
angular.module('phoneList').component('phoneList', {
    templateUrl: 'components/phone-list/phone-list.template.html',
    controller: ['$http', PhoneListController]
});

// 依赖注入 ==> 参数名实现
// 禁止压缩依赖名称列表
// 方法一：$inject
// xxxController.$inject = ['$http']
// 方法二：内联注解数组
// controller: ['$http',xxxController]