export class Question {
 constructor(public id: number, public questionContent: string, public answers: Array<string>, public questionTime: string) {
        this.id = id;
        this.questionContent = questionContent;
        this.answers = answers;
    }
  //id: number;
  //title: string;
}
export class Questionaire {
 constructor(public id: number, public title: string, public questions: Array<Question>, public timeStamp: string) {
        this.id = id;
        this.title = title;
        this.questions = questions;
        this.timeStamp
    }
  //id: number;
  //title: string;
}

// type QuestionList = Array<Question>; 
