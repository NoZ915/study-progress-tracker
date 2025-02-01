import { Outlet } from "react-router-dom";
import '@mantine/core/styles.css';
import './App.css'
import AuthButton from "../components/AuthButton";

function App() {
  return (
    <>
      <Outlet />
      <AuthButton />
    </>
  )
}

export default App;
