export default {
  getDepartmentsOptions,
  getInstructorsOptions,
  getCoursesOptions,
};

function getDepartmentsOptions(departments) {
  return departments.map((department) => {
    return {
      value: department.id,
      text: department.name,
    };
  });
}

function getInstructorsOptions(instructors) {
  return instructors.map((instructor) => {
    return {
      value: instructor.id,
      text: instructor.lastName + ', ' + instructor.firstName,
    };
  });
}

function getCoursesOptions(courses) {
  return courses.map((course) => {
    return {
      value: course.id,
      text: course.number + ' ' + course.title,
    };
  });
}
