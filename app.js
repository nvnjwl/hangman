/* global angular*/
var app = angular.module("HangmanApp",[]);


app.controller("GameController",["$scope",function($scope){
    
    $scope.demo = "Welcome";
    
    var words = ["rat","cat","bat","mat"];
    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen = [];
    $scope.guesses = 6;
    $scope.displayWprd = "";
    $scope.input = {
        letter : ""
    }
    
    
    
    var selectRandom = function(){
        //console.log("selectRandom called");
        var index = Math.round(Math.random()*words.length);
        return words[index];
    }
    
    
    
    var newGame = function(){
        $scope.incorrectLettersChosen = [];
        $scope.correctLettersChosen = [];
        $scope.guesses = 6;
        $scope.displayWord = "";
        
        $scope.selectedWord = selectRandom();
        console.log("Selctedword:: " +  $scope.selectedWord);
        
        
        
        var tempDisplayWord = "";
        for(var i=0;i<$scope.selectedWord.length;i++){
            tempDisplayWord += "*";
        }
        $scope.displayWord = tempDisplayWord;
        
    }
    newGame();
    
    
    
    $scope.letterChosen = function(){
        if($scope.input.letter == "")return;
        console.log("letterChosen called");
        for(var i=0;i<$scope.correctLettersChosen.length;i++){
            if($scope.correctLettersChosen[i] == $scope.input.letter){
                $scope.input.letter = "";
                console.log("letterChosen was already in correct");
                return;
            }
        }
        for(var i=0;i<$scope.incorrectLettersChosen.length;i++){
            if($scope.incorrectLettersChosen[i]== $scope.input.letter){
                $scope.input.letter = "";
                console.log("letterChosen was already in  incorrect");
                return;
            }else{
                console.log("else0");
            }
             
        }
        
        
        var correct = false;
        for(var i=0;i<$scope.selectedWord.length;i++){
            if($scope.selectedWord[i] == $scope.input.letter){
                console.log("letterChosen match");
                $scope.displayWord = $scope.displayWord.slice(0,i) + $scope.input.letter + $scope.displayWord.slice(i+1,$scope.selectedWord.length);
                console.log("displayWord modi ::" + $scope.displayWord);
                correct = true;
                console.log("correct ::" + correct);
               // return;
            }
            else{
                console.log("letterChosen not  match because :: " + $scope.selectedWord[i] +" _ _ "+ $scope.input.letter);
            }
             
        }
        
        if(correct){
           console.log("true correct");
            $scope.correctLettersChosen.push($scope.input.letter);
            console.log("crc:: " +$scope.correctLettersChosen);
            $scope.input.letter = "";
            if( $scope.displayWord == $scope.selectedWord)
            {
                alert("Win0");
                newGame();
            }
            
        }else{
            console.log("false correct");
            $scope.incorrectLettersChosen.push($scope.input.letter);
            console.log("INC:: " +$scope.incorrectLettersChosen);
            $scope.guesses-- ;
            if($scope.guesses <=0){
                alert("Game over");
                newGame();
            }
            $scope.input.letter = "";
        }
    }
    
}]);



