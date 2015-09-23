askExpert.factory('QuestionsFactory', function QuestionsFactory(){
    var factory = {};
    factory.questions = [];
    factory.addQuestion = function() {
        factory.questions.push({ qText: factory.questionText, id: factory.questions.length + 1, answers: [], answered: false });
        factory.qText = null;
    };

    factory.addAnswerComment = function(){
        factory.questions.answers.comments.push({ cText: factory.answers.comments.commentText });
        factory.answers.comments.cText = null;
    };

    return factory;
});
