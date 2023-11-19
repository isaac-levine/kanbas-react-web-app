import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("course id is", courseId);
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
    console.log(modules);
  }, [courseId, modules]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div>
      <div>
        <a class="top-right-button btn btn-light float-end" role="button">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </a>
        {/* <a className="top-right-button btn btn-danger float-end" role="button">
          <i class="fa-solid fa-plus"></i> Module
        </a> */}
        <div className="top-right-button dropdown float-end">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <a className="top-right-button btn btn-light float-end" role="button">
          View Progress
        </a>
        <a className="top-right-button btn btn-light float-end" role="button">
          Collapse All
        </a>
        {/* BAD */}
        <br />
      </div>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">
          <div className="float-end">
            <button
              className="btn btn-success"
              // onClick={() =>
              //   dispatch(addModule({ ...module, course: courseId }))
              // }
              onClick={handleAddModule}
            >
              Add
            </button>
            <button
              className="btn btn-success float-end"
              // onClick={() => dispatch(updateModule(module))}
              onClick={handleUpdateModule}
            >
              Update
            </button>
          </div>

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
        {modules &&
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item" id="module-list-item">
                <div className="float-end">
                  <button
                    className="btn btn-light"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    // onClick={() => dispatch(deleteModule(module._id))}
                    onClick={() => handleDeleteModule(module._id)}
                  >
                    Delete
                  </button>
                </div>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </li>
            ))}
      </ul>
    </div>
  );
}
export default ModuleList;
