import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "../Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const course = db.courses.find((course) => course._id === courseId);

    let pageTitle = "Dashboard"; // Default title

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

            <p>{courseId} <i class="fa-solid fa-angle-right"></i> {pageTitle} </p>


            <CourseNavigation />

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