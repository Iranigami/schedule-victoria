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
  id: number;
  fullName?: string,
  name?: string;
  surname?: string;
  patronymic?: string;
  image: string;
  division?: string[];
  direction: string[];
  unities?: {
    id: number;
    title: string;
  }[];
  position?: string;
  phone?: string;
  email?: string;
  teacherInfos?: {
    id: number;
    title: string;
    text: string;
  }[];
  cabinet?: {
    id: number;
    number: string;
  }[];
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

export interface LessonClasses {
  schedule: Lesson;
  title: string;
  address: string;
  age: string;
  learnTime: string;
  conditions: string;
  desc: string;
  additionalInfo: string;
  teacher: Teacher;
  code: string;
}
