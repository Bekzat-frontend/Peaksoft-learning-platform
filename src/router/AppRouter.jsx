import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import MainLayot from "../layot/MainLayot";
import Courses from "../pages/Courses";
import Announcement from "../pages/Announcements";
import Basket from "../pages/Basket";
import Schedule from "../pages/Schedule";
import Raiting from "../coursePage/Raiting";
import Students from "../coursePage/Students";
import Material from "../coursePage/Material";
import CoursesLayout from "../layot/CoursesLayout";
import CoursesMaterial from "../coursesMaterial/CoursesMaterial";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayot />}>
          <Route index element={<Navigate to="courses" />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CoursesLayout />}>
            <Route index element={<Navigate to="material" />} />
            <Route path="material" element={<Material />} />
            <Route path="tema" element={<CoursesMaterial />} />
            <Route path="student" element={<Students />} />
            <Route path="raiting" element={<Raiting />} />
          </Route>
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
