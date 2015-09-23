var askExpert = angular.module('askExpert', ['ui.router']);

askExpert.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("home", {
        url: "",
        templateUrl: "partials/home.html",
        controller: "QuestionsCtrl"
    });

    $stateProvider.state('questions.answers', {
        url:"/:questionId",
        templateUrl: "partials/questions.answers.html",
        controller: "AnswersCtrl"
    });
});
