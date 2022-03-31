import { Container } from "@mui/material";
import React from "react";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
import jobs from "./data.json";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <JobList jobs={jobs} />
      </Container>
    </>
  );
}

export default App;
