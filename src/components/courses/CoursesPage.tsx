import React from 'react';
import {Container, Button} from '../bootstrap';
import {Heading} from 'styles/shared';

function CoursesPage() {
  function render() {
    return (
      <Container>
        <Heading>Courses</Heading>
        <table className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Credits</th>
              <th>Department</th>
              <th>
                <Button variant="link">Create New</Button>
              </th>
            </tr>
          </thead>
          <tbody>Courses</tbody>
        </table>
      </Container>
    );
  }
  return render();
}
export default CoursesPage;
