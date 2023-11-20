import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import React, { useState, useEffect } from "react";
import { findAssignmentsForCourse } from "./client";

function Assignments() {
  // courseAssignments is the list of assignments for this course
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const { courseId } = useParams();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const data = await findAssignmentsForCourse(courseId);
      setAssignments(data);
    };

    fetchAssignments();
  }, [courseId]);
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <button className="btn">Assignments for course {courseId}</button>
        </div>
        <div className="card-body">
          <div id="assignments-list" className="list-group-flush">
            {courseAssignments.map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item"
              >
                {assignment.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
