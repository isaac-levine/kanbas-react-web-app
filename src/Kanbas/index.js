// import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Home from "./Home";
import './KanbasNavigation/index.css';

function Kanbas() {
    return (
        // Renders the navigation, and then whatever content is necessary for whatever page we are on
        // by default, we start at the Dashboard  
        <div className="d-flex">
            <KanbasNavigation />
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/*" element={<h1>Courses</h1>} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>

            </div>
        </div>
    );
}
export default Kanbas