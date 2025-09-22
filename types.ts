interface BaseQuestion {
    text: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
    type: 'multiple-choice';
    options: string[];
    correctAnswer: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
    type: 'true-false';
    correctAnswer: 'Benar' | 'Salah';
}

export interface ShortAnswerQuestion extends BaseQuestion {
    type: 'short-answer';
    correctAnswer: string; 
}

export type Question = MultipleChoiceQuestion | TrueFalseQuestion | ShortAnswerQuestion;

export interface LearningContent {
  title: string;
  explanation: string;
  example: string;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  materials: LearningContent[];
  questions: Question[];
}

export interface BadgeInfo {
  name: string;
  description: string;
  iconType: 'rocket' | 'star' | 'trophy' | 'crown';
}

export interface UserProgress {
  unlockedLevels: number[];
  scores: { [levelId: number]: number };
  badges: string[];
}