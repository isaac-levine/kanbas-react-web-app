import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { React, useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  // {
  //   courses, course, setCourse, addNewCourse, deleteCourse, updateCourse;
  // }
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  // });
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };
  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  // };
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <h5>Course</h5>
        <input
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          value={course.name}
          className="form-control"
        />
        <input
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
          value={course.number}
          className="form-control"
        />
        <input
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
          value={course.startDate}
          className="form-control"
          type="date"
        />
        <input
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          value={course.endDate}
          className="form-control"
          type="date"
        />
        <button className="btn btn-primary" onClick={addNewCourse}>
          Add
        </button>
        <button className="btn btn-success" onClick={updateCourse}>
          Update
        </button>
      </div>

      <div className="card-group">
        {courses.map((course) => (
          <div key={course._id} className="card" style={{ width: "18rem" }}>
            <img
              src="/images/rectangle.png"
              className="card-img-top"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link
                to={`/Kanbas/Courses/${course._id}`}
                className="btn btn-primary"
              >
                Go to course
              </Link>
              <button
                className="btn btn-warning"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>

              <button
                className="btn btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
