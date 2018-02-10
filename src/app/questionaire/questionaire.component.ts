import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { Questionaire } from './question';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.css']
})
export class QuestionaireComponent implements OnInit {

  question1: Question =
  {
    id: 1,
    questionContent: 'First question',
    answers: ["one", "two", "three"],
    questionTime: '2018-02-11T16:08:00'
  };

  question2: Question =
  {
    id: 2,
    questionContent: 'Second question',
    answers: ["two", "four", "three"],
    questionTime: '2018-02-10T16:08:00'
  };

  //type Questionaire = Array<Question>;

  questionaire: Questionaire =
  {
    id: 1,
    title: 'First Questionaire',
    questions: [this.question1, this.question2],
    timeStamp: '2017-06-10T16:08:00'
  }

  constructor() { }

  ngOnInit() {
  }

}
