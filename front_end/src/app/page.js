'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {Login} from "./Components/Login"
import { StudentDashboard } from "./Components/Students/Components/StudentDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Common } from "./Components/Common";

export default function Home() {
  return (
    <BrowserRouter>
    <Login/>
    <StudentDashboard/>
    <Common/>
    </BrowserRouter>
  );
}
