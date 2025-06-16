

export interface LessonSection extends Array<Lesson> {}

export interface Teacher {
  id: number;
  fullName?: string;
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
  id: number;
  image: string;
  title: string;
  date: string;
  smallDescription: string;
  code: string;
  startAt: string;
  endAt: string;
  qr: string;
  absDate: string;
  description: string;
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





export interface Unity {
  code: string,
  name: string,
  age_before: number,
  age_after: number,
  teacher: string,
}

export interface Group {
  group_name: string,
  schedule: {
    monday?: {
      id: number,
      title: string,
      cabinet: string,
      teacher: string,
      start_time: string,
      end_time: string,
      is_cancelled: boolean,
      edit_reason: string,
      date: string,
    },
    tuesday?: {
      id: number,
      title: string,
      cabinet: string,
      teacher: string,
      start_time: string,
      end_time: string,
      is_cancelled: boolean,
      edit_reason: string,
      date: string,
    },
    wednesday?: {
      id: number,
      title: string,
      cabinet: string,
      teacher: string,
      start_time: string,
      end_time: string,
      is_cancelled: boolean,
      edit_reason: string,
      date: string,
    },
    thursday?: {
      id: number,
      title: string,
      cabinet: string,
      teacher: string,
      start_time: string,
      end_time: string,
      is_cancelled: boolean,
      edit_reason: string,
      date: string,
    },
    friday?: {
      id: number,
      title: string,
      cabinet: string,
      teacher: string,
      start_time: string,
      end_time: string,
      is_cancelled: boolean,
      edit_reason: string,
      date: string,
    },
    saturday?: {
      id: number,
      title: string,
      cabinet: string,
      teacher: string,
      start_time: string,
      end_time: string,
      is_cancelled: boolean,
      edit_reason: string,
      date: string,
    },
    sunday?: {
      id: number,
      title: string,
      cabinet: string,
      teacher: string,
      start_time: string,
      end_time: string,
      is_cancelled: boolean,
      edit_reason: string,
      date: string,
    }
  }
}

export interface Lesson {
  unity: Unity,
  groups: Group[],
}