import db from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "../Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import "./index.css";
import bootstrap from "bootstrap";
import React, { useState } from "react";

function Courses({ courses }) {
  //   const { courseId } = useParams();
  const { pathname } = useLocation();
  //   const course = db.courses.find((course) => course._id === courseId);
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  let pageTitle = "Dashboard"; // Default title

  const [showCourseNavigation, setShowCourseNavigation] = useState(true);

  if (pathname.includes("Home")) {
    pageTitle = "Home";
  } else if (pathname.includes("Modules")) {
    pageTitle = "Modules";
  } else if (pathname.includes("Assignments")) {
    pageTitle = "Assignments";
  } else if (pathname.includes("Grades")) {
    pageTitle = "Grades";
  }

  return (
    <div>
      <div id="top-left-stuff">
        <i
          onClick={() => setShowCourseNavigation(!showCourseNavigation)}
          className="fa-1x d-sm-block d-xs-block d-md-none fa-solid fa-bars"
        ></i>
        <p id="breadcrumb">
          {courseId}
          <i class="fa-solid fa-angle-right"></i>
          {pageTitle}
        </p>
      </div>

      {showCourseNavigation && (
        <CourseNavigation className="d-none d-sm-block" />
      )}

      <div
        className="overflow-y-scroll position-fixed bottom-0 end-0"
        style={{
          left: "320px",
          top: "50px",
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentId"
            element={<AssignmentEditor />}
          />
          <Route path="Grades" element={<h1>Grades</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Courses;
