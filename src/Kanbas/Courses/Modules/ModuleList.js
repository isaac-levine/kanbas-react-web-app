import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  //   return (
  //     <div id="module-list">
  //       <div className="container-fluid row">
  //         <div className="container float-end" id="buttons-container">
  //           <a class="top-right-button btn btn-light float-end" role="button">
  //             <i className="fa-solid fa-ellipsis-vertical"></i>
  //           </a>

  //           <a
  //             className="top-right-button btn btn-danger float-end"
  //             role="button"
  //           >
  //             <i class="fa-solid fa-plus"></i> Module
  //           </a>
  //           <div className="top-right-button dropdown float-end">
  //             <button
  //               class="btn btn-light dropdown-toggle"
  //               type="button"
  //               data-bs-toggle="dropdown"
  //               aria-expanded="false"
  //             >
  //               Dropdown button
  //             </button>
  //             <ul class="dropdown-menu">
  //               <li>
  //                 <a class="dropdown-item" href="#">
  //                   Action
  //                 </a>
  //               </li>
  //               <li>
  //                 <a class="dropdown-item" href="#">
  //                   Another action
  //                 </a>
  //               </li>
  //               <li>
  //                 <a class="dropdown-item" href="#">
  //                   Something else here
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //           <a className="top-right-button btn btn-light float-end" role="button">
  //             View Progress
  //           </a>
  //           <a className="top-right-button btn btn-light float-end" role="button">
  //             Collapse All
  //           </a>
  //         </div>
  //       </div>

  //       <hr />
  //       {modules
  //         .filter((module) => module.course === courseId)
  //         .map((module, index) => (
  //           <div id="module" className="accordion" key={index}>
  //             <div className="card">
  //               <div className="card-header" id={`heading${index}`}>
  //                 <button
  //                   className="btn btn-link"
  //                   type="button"
  //                   data-toggle="collapse"
  //                   data-target={`#collapse${index}`}
  //                   aria-expanded="true"
  //                   aria-controls={`collapse${index}`}
  //                 >
  //                   {module.name}
  //                 </button>
  //               </div>

  //               <div
  //                 id={`collapse${index}`}
  //                 className="collapse"
  //                 // className="expand"
  //                 // className={index === 0 ? "collapse show" : "collapse"}
  //                 aria-labelledby={`heading${index}`}
  //                 data-parent="#module-list"
  //               >
  //                 <div className="card-body">{module.description}</div>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //     </div>
  //   );
  // }
  // export default ModuleList;
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button
          className="btn btn-success"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
        <button
          className="btn btn-success float-end"
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
        <input
          className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          className="form-control"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button
              className="btn btn-secondary"
              onClick={() => dispatch(setModule(module))}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteModule(module._id))}
            >
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
