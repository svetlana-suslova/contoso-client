export function getDepartmentsOptions(departments) {
  return departments.map((department) => {
    return {
      value: department.id,
      text: department.name,
    };
  });
}
