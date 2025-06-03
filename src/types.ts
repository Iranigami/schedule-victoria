export interface Lesson {
  code: number;
  title: string;
  teacher: string;
  cabinet: string;
  age: string;
  group: number;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

export interface LessonSection extends Array<Lesson> {}

export interface Teacher {
  photo: string;
  name: string;
  post: string;
  speciality: string;
  phone: string;
  email: string;
  cabinet: string;
  classes: string[];
  awards: string;
}

export interface MCClass {
  photo: string;
  title: string;
  date: string;
  desc: string;
  code: string;
  time: string;
  absDate: string;
  fullDesc?: string;
}

export interface Article {
  photo: string;
  title: string;
  desc: string;
  fullDesc?: string;
}
