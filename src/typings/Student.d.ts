interface StatisticsItem {
  enrollmentDate: string;
  studentCount: string;
}

interface Student {
  id: number;
  enrollmentDate: string;
  firstName: string;
  lastName: string;
  enrollments: Array<Enrollment>;
}

interface Enrollment {
  id: number;
  courseId: number;
  studentId: number;
  grade: string;
  course: {};
}
