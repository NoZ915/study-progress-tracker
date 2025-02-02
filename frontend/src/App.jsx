import { Outlet } from "react-router-dom";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './App.css'

import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;
