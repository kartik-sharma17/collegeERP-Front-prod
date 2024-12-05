'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {Login} from "./Components/Login"
import { StudentDashboard } from "./Components/Students/Components/StudentDashboard";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
    {/* <Login/> */}
    <StudentDashboard/>
    </BrowserRouter>
  );
}
