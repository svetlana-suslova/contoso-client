export function getDepartmentsOptions(departments) {
  return departments.map((department) => {
    return {
      value: department.id,
      text: department.name,
    };
  });
}

export function getInstructorsOptions(instructors) {
  return instructors.map((instructor) => {
    return {
      value: instructor.id,
      text: instructor.lastName + ', ' + instructor.firstName,
    };
  });
}
