

// import { Link } from "react-router-dom";
// import db from "../Database";
// function Dashboard() {
//     const courses = db.courses;
//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <div className="list-group-flush">
//                 {courses.map((course) => (
//                     <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
//                         {course.name}
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }
// export default Dashboard;


import './index.css';
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="card-group">
                {courses.map((course) => (
                    <div key={course._id} className="card" style={{ width: '18rem' }}>
                        <img src="/images/rectangle.png" className="card-img-top" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{course.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">Go to course</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
