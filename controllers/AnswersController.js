askExpert.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory){

    $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
    // $scope.questions = QuestionsFactory.questions;
    // $scope.answerQuestion = function(question) {
    //     question.answered = true;
    // };

    $scope.addAnswer = function(){
        $scope.question.answers.push({ aText: $scope.answers.answerText, upvote: 0, comments: []})
        $scope.answers.answerText = null;
    };
    // factory.addAnswerComment = function(){
    //     factory.questions.answers.comments.push({ cText: factory.answers.comments.commentText });
    //     factory.answers.comments.cText = null;
    // };
});
