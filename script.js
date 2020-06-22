
var app= angular.module('app',[]).controller('appController',function($scope){

    $scope.filmoteka= new Filmoteka();
   
    $scope.film= new Film($scope.naslov,$scope.godIzdavanja,$scope.reziser,$scope.zanr,$scope.rejting,
        $scope.glumci,$scope.slika,$scope.link);
    
    
    $scope.text=true;
    

    $scope.addFilms=function(){
       
        
     if($scope.film.naslov!==undefined && $scope.film.godIzdavanja!==undefined &&$scope.film.reziser!==undefined&&
        $scope.film.zanr!==undefined&& $scope.film.rejting!==undefined && $scope.film.glumci!==undefined &&
        $scope.film.slika!==undefined &&$scope.film.link!==undefined){ 
     
        console.log($scope.film);
        $scope.filmoteka.addMovie($scope.film);

        $scope.film={
            naslov: undefined,
godIzdavanja: undefined,
reziser: undefined,
zanr: undefined,
rejting: undefined,
glumci: undefined,
slika: undefined,
link:undefined
        }
        $scope.text=true;
        console.log( $scope.filmoteka.allMovies);
    }
else{
    $scope.text=false;

}   

    }

    $scope.Delete=function(naslov){
        
        
        $scope.filmoteka.Delete(naslov);
    }
    

});

