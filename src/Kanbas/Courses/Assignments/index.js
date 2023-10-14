import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css'


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    // courseAssignments is the list of assignments for this course
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <button className="btn">
                        Assignments for course {courseId}
                    </button>
                </div>
                <div className="card-body">
                    <div id="assignments-list" className="list-group-flush">
                        {courseAssignments.map((assignment) => (
                            <Link
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                className="list-group-item">
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