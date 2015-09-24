askExpert.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory){

    $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
    // $scope.questions = QuestionsFactory.questions;
    // $scope.answerQuestion = function(question) {
    //     question.answered = true;
    // };

    $scope.addAnswer = function(){
        $scope.question.answers.push({ aText: $scope.answers.answerText, upvote: 0, comments: [], answerId: $scope.answers.length + 1 });
        $scope.answers.answerText = null;
    };

    // $scope.question.answer = UtilitiesFactory.findById(QuestionsFactory.question.answers, $stateParams.answerId);

    $scope.addAnswerComment = function(){
        $scope.questions.answers.comments.push({ cText: $scope.answers.comments.commentText });
        $scope.answers.comments.cText = null;
    };
});
