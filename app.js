var askExpert = angular.module('askExpert', ['ui.router']);

askExpert.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("questions", {
        url: "",
        templateUrl: "partials/home.html",
        controller: "QuestionsCtrl"
    });

    $stateProvider.state("questions.answers", {
        url:"/questions/:questionId",
        templateUrl: "partials/questions.answers.html",
        controller: "AnswersCtrl"
    });

});
