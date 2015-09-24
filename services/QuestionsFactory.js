askExpert.factory('QuestionsFactory', function QuestionsFactory(){
    var factory = {};
    factory.questions = [];
    factory.addQuestion = function() {
        factory.questions.push({ qText: factory.questionText, id: factory.questions.length + 1, answers: [], answered: false });
        factory.questionText = null;
    };

    // factory.addAnswer = function(){
    //     factory.question.answers.push({ aText: factory.answerText, upvote: 0, comments: []})
    //     factory.answers.aText = null;
    // };


    return factory;
});
