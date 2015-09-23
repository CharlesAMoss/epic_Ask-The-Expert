askExpert.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory){

    $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
    // $scope.questions = QuestionsFactory.questions;
    // $scope.answerQuestion = function(question) {
    //     question.answered = true;
    // };
    $scope.addAnswer = function(){
        $scope.questions.answers.push({ aText: $scope.answerText, upvote: 0, comments: []})
        $scope.answers.aText = null;
    };
});
