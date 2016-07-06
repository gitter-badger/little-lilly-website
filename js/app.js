var config = {
  apiKey: "AIzaSyA5-592fUq1D42RsZ417oIGOsiZ2101fpk",
  authDomain: "little-lilly-test.firebaseapp.com",
  databaseURL: "https://little-lilly-test.firebaseio.com",
  storageBucket: "little-lilly-test.appspot.com",
};
firebase.initializeApp(config);

var app = angular.module("LittleLillyApp", ["firebase"]);

app.factory("letter", ["$firebaseObject",
  function($firebaseObject) {
    var ref = firebase.database().ref('users/kvw18di6wrdMzHjstw8pjxFwsYQ2/letter');
    return $firebaseObject(ref);
  }
]);

app.factory("archive", ["$firebaseArray",
  function($firebaseArray) {
    var ref = firebase.database().ref('users/kvw18di6wrdMzHjstw8pjxFwsYQ2/archive').limitToLast(5);
    return $firebaseArray(ref);
  }
]);

app.controller("LetterController", ["$scope", "letter",
  function($scope, letter) {
    $scope.letter = letter;

    $scope.letter.$loaded(function() {
      console.log("letter", $scope.letter);
    });
  }
]);


app.controller("ArchiveController", ["$scope", "archive",
  function($scope, archive) {
    $scope.archive = archive;

    $scope.archive.$loaded(function() {
      console.log("Archive", $scope.archive);
    });
  }
]);
