import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import bootstrap from "bootstrap";


function CourseNavigation() {
    const links = ["Home", "Modules", "Assignments", "Grades"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div id="account-nav-list" className="list-group-flush" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}


export default CourseNavigation;