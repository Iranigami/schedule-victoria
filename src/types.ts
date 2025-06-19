export interface LessonSection extends Array<LessonClass> {}

export interface Teacher {
  id: number;
  name?: string;
  surname?: string;
  patronymic?: string;
  imageFile?: string;
  image?: string;
  division?: string[];
  direction?: string[];
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
    teacher: string;
  }[];
  cabinet?: {
    id: number;
    number: string;
    division: string[];
    size: string[];
    equipment: string[];
    groups?: {
      id: number;
      title: string;
      year: string;
      unity: string;
      studentsCount: number;
      students: {
        id: number;
        studentId: string;
        fullName: string;
        dateBirth: string;
        yearMoscow: boolean;
        groups: string[];
        email: string;
        age: number;
      }[];
      lessons: string[];
      cabinet: string[];
      lessonsSchedules: {
        id: number;
        dateOfWeek: string;
        startAt: string;
        endAt: string;
        dateStart: string;
        dateEnd: string;
        groups: string;
        cabinet: string;
        title: string;
        teacher: string;
        unity: string;
      }[];
    }[];
    lessons: {
      id: number;
      date: string;
      startAt: string;
      endAt: string;
      dateStart: string;
      dateEnd: string;
      groups: string;
      cabinet: string;
      lessonsEditHistories: {
        id: number;
        status: string[];
        description: string;
        lesson: string;
        entityBefore: string[];
        entityAfter: string[];
      }[];
      isCancelled: true;
      editReason: string;
      title: string;
      teacher: string;
      unity: string;
    }[];
    lessonsSchedules: {
      id: number;
      dateOfWeek: string;
      startAt: string;
      endAt: string;
      dateStart: string;
      dateEnd: string;
      groups: string;
      cabinet: string;
      title: string;
      teacher: string;
      unity: string;
    }[];
    teachers: string[];
    masterClasses: {
      id: number;
      title: string;
      imageFile: string;
      image: string;
      date: string;
      startAt: string;
      endAt: string;
      url: string;
      qrFile: string;
      qr: string;
      description: string;
      smallDescription: string;
      cabinet: string;
    }[];
  }[];
  lessonsSchedules?: {
    id: number;
    dateOfWeek: string;
    startAt: string;
    endAt: string;
    dateStart: string;
    dateEnd: string;
    groups: string;
    cabinet: string;
    title: string;
    teacher: string;
    unity: string;
  }[];
  lessons?: string[];
  fullName?: string;
}

export interface MCClass {
  id: number;
  image: string;
  title: string;
  date: string;
  smallDescription: string;
  startAt: string;
  endAt: string;
  qr: string;
  description: string;
}

export interface Article {
  id: number;
  title: string;
  imageFile: string;
  image: string;
  newsParagraphs: [
    {
      id: number;
      title: string;
      text: string;
      news: string;
    },
  ];
}

export interface LessonClasses {
  schedule: LessonClass;
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
  id: number;
  qr: string;
  codEs3: number;
  title: string;
  direction: string[];
  division: string;
  level: string;
  ageBefore: number;
  ageAfter: number;
  finance: boolean;
  years: number;
  teachers: {
    id: number;
    name: string;
    surname: string;
    patronymic: string;
    photo: string;
  }[];
  url: string;
  description: string;
  note: string;
}

export interface Group {
  group_name: string;
  schedule: {
    monday?: {
      id: number;
      title: string;
      cabinet: string;
      teacher: string;
      start_time: string;
      end_time: string;
      is_cancelled: boolean;
      edit_reason: string;
      date: string;
    }[];
    tuesday?: {
      id: number;
      title: string;
      cabinet: string;
      teacher: string;
      start_time: string;
      end_time: string;
      is_cancelled: boolean;
      edit_reason: string;
      date: string;
    }[];
    wednesday?: {
      id: number;
      title: string;
      cabinet: string;
      teacher: string;
      start_time: string;
      end_time: string;
      is_cancelled: boolean;
      edit_reason: string;
      date: string;
    }[];
    thursday?: {
      id: number;
      title: string;
      cabinet: string;
      teacher: string;
      start_time: string;
      end_time: string;
      is_cancelled: boolean;
      edit_reason: string;
      date: string;
    }[];
    friday?: {
      id: number;
      title: string;
      cabinet: string;
      teacher: string;
      start_time: string;
      end_time: string;
      is_cancelled: boolean;
      edit_reason: string;
      date: string;
    }[];
    saturday?: {
      id: number;
      title: string;
      cabinet: string;
      teacher: string;
      start_time: string;
      end_time: string;
      is_cancelled: boolean;
      edit_reason: string;
      date: string;
    }[];
    sunday?: {
      id: number;
      title: string;
      cabinet: string;
      teacher: string;
      start_time: string;
      end_time: string;
      is_cancelled: boolean;
      edit_reason: string;
      date: string;
    }[];
  };
}

export interface LessonClass {
  unity: {
    code: string;
    name: string;
    age_before: number;
    age_after: number;
    teacher: string;
  };
  groups: Group[];
}

export interface News {
  id: number;
  title: string;
  image: string;
  newsParagraphs: {
    id: number;
    title: string;
    text: string;
  }[];
}
