askExpert.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory){

    $scope.question.answer = UtilitiesFactory.findById(QuestionsFactory.question.answers, $stateParams.answerId);

    $scope.addComment = function(){
        $scope.question.answer.comments.push({ cText: $scope.answers.comments.commentText });
        $scope.answers.comments.commentText = null;
    };
});
