import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import React, { useState, useEffect } from "react";
import {
  findAssignmentsForCourse,
  deleteAssignment,
  updateAssignment,
  createAssignment,
} from "./client";

function Assignments() {
  const { courseId } = useParams();
  const [assignments, setAssignments] = useState([]);
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

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
              <div key={assignment._id} className="list-group-item">
                <button onClick={() => updateAssignment(assignment)}>
                  Edit
                </button>
                <button onClick={() => deleteAssignment(assignment._id)}>
                  Delete
                </button>
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
