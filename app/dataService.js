angular.module("app")
    .service("dataService", [ "$http", function ($http) {
        var item = {
            id: 0,
            category: "",
            type: "",
            name: "",
            url: ""
        };
        

        this.getKitchens = function (){
            return {}
        };
        this.getFurnitures = function() {
        
            return {};
        }

        this.getCabinets = function (type) {
            type = "two-door";
             $http.get("/data/cabinets.json").then(function (response) {
                console.log(angular.fromJson(response.data));
                return angular.fromJson(response.data);
            })
        }
        
}])