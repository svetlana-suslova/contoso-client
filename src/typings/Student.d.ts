interface StatisticsItem {
  enrollmentDate: string;
  studentCount: string;
}

interface Student {
  id: number;
  enrollmentDate: string;
  firstName: string;
  lastName: string;
  enrollments: [];
}
