import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import _ from 'lodash';
import {AppState} from 'reducers/rootReducer';
import Instructor from './Instructor';
import {loadInstructors, loadInstructor, saveInstructor, deleteInstructor} from 'actions/instructorActions';
import {loadCourses} from 'actions/courseActions';
import {Container, Button} from '../bootstrap';
import {loadEnrollments} from 'actions/enrollmentActions';
import {Heading} from 'styles/shared';
import InstructorDetails from './InstructorDetails';
import InstructorSave from './InstructorSave';
import uiHelper from 'helpers/uiHelper';
import dateHelper from 'helpers/dateHelper';
import INSTRUCTOR from 'constants/literals/instructors';
import {confirmAction} from 'actions/commonActions';
import __ from 'helpers/entityHelper';
import InstructorCoursesList from './InstructorCoursesList';
import InstructorStudentsList from './InstructorStudentsList';

function InstructorsPage() {
  const instructors: Array<Instructor> = useSelector((state: AppState) => state.instructor.list);
  const currentInstructor: Instructor = useSelector((state: AppState) => state.instructor.current);
  const courses: Array<Course> = useSelector((state: AppState) => state.course.list);
  const enrollments: Array<Enrollment> = useSelector((state: AppState) => state.enrollment.list);
  const dispatch = useDispatch();

  const [coursesVisible, showInstructorCoursesBlock] = useState(false);
  const [studentsVisible, showCourseStudentsBlock] = useState(false);
  const [selectedInstructorId, setSelectedInstructorId] = useState(0);
  const [selectedCourseId, setSelectedCourseId] = useState(0);
  const [detailsModal, toggleDetailsModal] = useState(false);
  const [instructorToEdit, setInstructorToEdit] = useState<Instructor | null>(null);

  useEffect(() => {
    dispatch(loadInstructors());
    dispatch(loadCourses(null));
  }, []);

  function showCoursesList(instructorId) {
    dispatch(loadInstructor(instructorId));
    showInstructorCoursesBlock(true);
    showCourseStudentsBlock(false);
    setSelectedInstructorId(instructorId);
    setSelectedCourseId(0);
  }

  function showStudentsList(courseId) {
    dispatch(loadEnrollments(courseId));
    showCourseStudentsBlock(true);
    setSelectedCourseId(courseId);
  }

  function showDetailsModal(instructorId) {
    dispatch(loadInstructor(instructorId));
    toggleDetailsModal(!detailsModal);
  }

  function closeDetailsModal() {
    toggleDetailsModal(!detailsModal);
  }

  function createInstructor() {
    setInstructorToEdit({
      courses: [],
      firstName: '',
      lastName: '',
      hireDate: dateHelper.getCurrentDate(),
      id: 0,
      number: 0,
      officeAssignment: {
        location: '',
      },
    });
  }

  function updateInstructor(instructor) {
    setInstructorToEdit({...instructor});
    dispatch(loadInstructor(instructor.id));
  }

  function updateInstructorState(field, value) {
    if (!instructorToEdit) return;
    const instructor = {...instructorToEdit};

    if (field === 'location') {
      instructor.officeAssignment = {...instructor.officeAssignment, location: value};
      setInstructorToEdit({...instructor});
    } else if (!_.isNaN(parseInt(field, 10))) {
      let id = parseInt(field, 10);
      let exist = _.find(instructor.courses, (item) => {
        return item.id === id;
      });
      if (exist) {
        instructor.courses = _.filter(instructor.courses, (course) => {
          return course.id !== id;
        });
      } else {
        instructor.courses = [
          ...instructor.courses,
          {
            credits: 0,
            department: {
              name: '',
            },
            departmentId: 0,
            id: id,
            number: 0,
            title: '',
          },
        ];
      }
      setInstructorToEdit({...instructor});
    } else {
      setInstructorToEdit({...instructorToEdit, [field]: value});
    }
  }

  async function onSaveInstructor() {
    const completed = await dispatch(saveInstructor(instructorToEdit));
    const message = instructorToEdit && instructorToEdit.id ? INSTRUCTOR.UPDATED : INSTRUCTOR.CREATED;
    if (completed !== undefined) {
      dispatch(loadInstructors());
      uiHelper.showMessage(message);
    }
    closeSaveModal();
  }

  function closeSaveModal() {
    setInstructorToEdit(null);
  }

  function onDeleteInstructor(id) {
    dispatch(
      confirmAction({
        title: INSTRUCTOR.DELETE,
        action: async () => {
          let completed = await dispatch(deleteInstructor(id));
          if (completed !== undefined) {
            dispatch(loadInstructors());
            uiHelper.showMessage(INSTRUCTOR.DELETED);
          }
        },
      })
    );
  }

  function render() {
    let editMode = instructorToEdit ? true : false;
    return (
      <Container>
        <Heading>Instructors</Heading>
        <table className="table">
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Hire Date</th>
              <th>Office</th>
              <th>Courses</th>
              <th>
                <Button variant="link" onClick={createInstructor}>
                  Create New
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor) => (
              <Instructor
                key={instructor.id}
                instructor={instructor}
                onDetailsClick={() => showDetailsModal(instructor.id)}
                onSaveClick={() => updateInstructor(instructor)}
                onDeleteClick={() => onDeleteInstructor(instructor.id)}
                onPointerClick={() => showCoursesList(instructor.id)}
                selectedInstructorId={selectedInstructorId}
              />
            ))}
          </tbody>
        </table>
        <InstructorCoursesList
          currentInstructor={currentInstructor}
          visible={coursesVisible}
          selectedCourseId={selectedCourseId}
          onPointerClick={showStudentsList}
        />

        <InstructorStudentsList visible={studentsVisible} enrollments={enrollments} />

        <InstructorDetails visible={detailsModal} close={closeDetailsModal} currentInstructor={currentInstructor} />
        {editMode && (
          <InstructorSave
            visible={editMode}
            close={closeSaveModal}
            instructor={instructorToEdit}
            saveInstructor={onSaveInstructor}
            onChange={updateInstructorState}
            options={__.getCoursesOptions(courses)}
          />
        )}
      </Container>
    );
  }
  return render();
}
export default InstructorsPage;
