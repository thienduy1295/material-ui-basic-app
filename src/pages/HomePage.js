import { Alert, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import JobList from "../components/JobList";
import "../App.css";
import apiService from "../app/apiService";
import LoadingScreen from "../components/LoadingScreen";

function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const res = await apiService.get("/jobs");
        setJobs(res.data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      <Container sx={{ mt: 3 }}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <JobList jobs={jobs} />
            )}
          </>
        )}
      </Container>
    </>
  );
}

export default HomePage;
