export interface ResultAnswer {
  questionId: string;
  correct: string;
}

export interface ResultQuestion {
  QID: string;
  Question: string;
  inCorrectAnswer: string;
  correctAnswer: string;
}

export interface GetExamResult_Request {
  answers: ResultAnswer[];
  time: number;
}

export interface GetExamResult_Response {
  message: string;
  correct: number;
  wrong: number;
  total: string;
  WrongQuestions: ResultQuestion[];
  correctQuestions: ResultQuestion[];
}
