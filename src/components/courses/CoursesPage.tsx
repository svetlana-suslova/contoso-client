import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'reducers/rootReducer';
import Course from './Course';
import CoursesFilter from './CoursesFilter';
import {loadCourses, loadCourse, saveCourse, deleteCourse} from 'actions/courseActions';
import {loadDepartments} from 'actions/departmentActions';
import {Container, Button} from '../bootstrap';
import {Heading} from 'styles/shared';
import _ from 'helpers/entityHelper';
import CourseDetails from './CourseDetails';
import CourseSave from './CourseSave';
import uiHelper from 'helpers/uiHelper';
import COURSE from 'constants/literals/courses';
import {confirmAction} from 'actions/commonActions';

function CoursesPage() {
  const courses: Array<Course> = useSelector((state: AppState) => state.course.list);
  const currentCourse: Course = useSelector((state: AppState) => state.course.current);
  const departments: Array<Department> = useSelector((state: AppState) => state.department.list);
  const dispatch = useDispatch();

  const [departmentId, setDepartmentId] = useState('');
  const [detailsModal, toggleDetailsModal] = useState(false);
  const [courseToEdit, setCourseToEdit] = useState<Course | null>(null);

  const options = _.getDepartmentsOptions(departments);

  useEffect(() => {
    dispatch(loadCourses(null));
    dispatch(loadDepartments());
  }, []);

  function filterCourses() {
    dispatch(loadCourses(departmentId));
  }

  function showDetailsModal(courseId) {
    dispatch(loadCourse(courseId));
    toggleDetailsModal(!detailsModal);
  }

  function closeDetailsModal() {
    toggleDetailsModal(!detailsModal);
  }

  function createCourse() {
    setCourseToEdit({
      credits: 0,
      department: {
        name: '',
      },
      departmentId: 0,
      id: 0,
      number: 0,
      title: '',
    });
  }

  function updateCourse(course) {
    setCourseToEdit({...course});
    dispatch(loadCourse(course.id));
  }

  function updateCourseState(field: string, value) {
    if (!courseToEdit) return;

    setCourseToEdit({...courseToEdit, [field]: value});
  }

  async function onSaveCourse() {
    const completed = await dispatch(saveCourse(courseToEdit));
    const message = courseToEdit && courseToEdit.id ? COURSE.UPDATED : COURSE.CREATED;
    if (completed !== undefined) {
      dispatch(loadCourses(null));
      dispatch(loadDepartments());
      uiHelper.showMessage(message);
    }
    closeSaveModal();
  }

  function closeSaveModal() {
    setCourseToEdit(null);
  }

  function onDeleteCourse(id) {
    dispatch(
      confirmAction({
        title: COURSE.DELETE,
        action: async () => {
          let completed = await dispatch(deleteCourse(id));
          if (completed !== undefined) {
            dispatch(loadCourses(departmentId));
            uiHelper.showMessage(COURSE.DELETED);
          }
        },
      })
    );
  }

  function render() {
    let editMode = courseToEdit ? true : false;
    return (
      <Container>
        <Heading>Courses</Heading>
        <CoursesFilter
          departmentId={departmentId}
          options={options}
          onChange={(e) => setDepartmentId(e.target.value)}
          onClick={filterCourses}
        />
        <table className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Credits</th>
              <th>Department</th>
              <th>
                <Button variant="link" onClick={createCourse}>
                  Create New
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <Course
                key={course.id}
                course={course}
                onDetailsClick={() => showDetailsModal(course.id)}
                onSaveClick={() => updateCourse(course)}
                onDeleteClick={() => onDeleteCourse(course.id)}
              />
            ))}
          </tbody>
        </table>
        <CourseDetails visible={detailsModal} close={closeDetailsModal} currentCourse={currentCourse} />
        {editMode && (
          <CourseSave
            visible={editMode}
            close={closeSaveModal}
            course={courseToEdit}
            saveCourse={onSaveCourse}
            onChange={updateCourseState}
            options={options}
          />
        )}
      </Container>
    );
  }
  return render();
}
export default CoursesPage;
