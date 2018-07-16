angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('myProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    /*
    *@description
    *Static variable to use on View
    */
    var firstName = "FirstName",
        lastName = "LastName",
        type = 'type',
        person= 'Person',
        selectBloodType = "Select Blood Type";

    var personJsonIn  = localStorage.getItem(person);

    if(personJsonIn !== null){
      var personJsonOut = JSON.parse(personJsonIn);

      $scope.firstName = personJsonOut.name;
      $scope.lastName  = personJsonOut.surname;

      if(personJsonOut.hasOwnProperty(type)){
         $scope.selectBloodType = personJsonOut.type;
      }else{
         $scope.selectBloodType = selectBloodType;
      }
    }else{
      $scope.firstName = firstName;
      $scope.lastName  = lastName;
    }

    $scope.itemList   = [];
    $scope.bloodsType = [{type:"A Rh+"},{type:"A Rh-"},{type:"B Rh+"},{type:"B Rh-"},
                         {type:"AB Rh+"},{type:"AB Rh-"},{type:"0 Rh+"},{type:"0 Rh-"}];
    $scope.chooseBlood = function(bloodTypeSelected){
      if(bloodTypeSelected == null){
        //error

      }else{
        var userBlood = bloodTypeSelected.type;
        personJsonOut.type = userBlood;
        localStorage.setItem(person,JSON.stringify(personJsonOut));
      }
    }

}])

.controller('myMedicineCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

.controller('myVisitCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('homePageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('detailInformationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.itemList   = [];
    $scope.selectUserType = "Select User Type";
    $scope.usersTypes = [{userType:"Disable"},{userType:"Volunteer"}];

    $scope.chooseUserType = function(userType){
      if(userType == null){
      //error

    }else{
      var userTypes = userType.userType;
      personJsonOut.userType = userTypes;
      localStorage.setItem('Person',JSON.stringify(personJsonOut));
    }
    };

    var personJsonIn  = localStorage.getItem('Person');

    if(personJsonIn !== null){
      var personJsonOut = JSON.parse(personJsonIn);
        $scope.nameValue = personJsonOut.name;
        $scope.surnameValue = personJsonOut.surname;
        $scope.ageValue = personJsonOut.age;
        $scope.weightValue = personJsonOut.weight;
        $scope.cityValue = personJsonOut.city;
        $scope.streetValue = personJsonOut.street;
        $scope.flatValue = personJsonOut.flat;
        $scope.zipCodeValue = personJsonOut.zipCode;
        $scope.phoneValue = personJsonOut.phone;

        if(personJsonOut.hasOwnProperty('userType')){
         $scope.selectUserType = personJsonOut.userType;
        }else{
         $scope.selectUserType = "Select User Type";
       }

    }else{

    }

    $scope.saveToLocalStorage = function(obj){
      console.log(obj);
      if(obj == null && obj == undefined){

      }else {
        console.log('AAAAAAAAA');
        console.log(obj.phone);
        var person = {
           'callback' : 'JSON_CALLBACK',
           'name' : obj.name,
           'surname' : obj.surname,
           'age' : obj.age,
           'weight' : obj.weight,
           'city' : obj.city,
           'street': obj.street,
           'flat': obj.flat,
           'phone' : obj.phone,
           'zipCode': obj.zipCode,

       };
       localStorage.setItem('Person',JSON.stringify(person));
      }

    }

}])

.controller('mapsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('staticVariableController', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
