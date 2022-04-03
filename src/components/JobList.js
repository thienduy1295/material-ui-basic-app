import { Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import JobCard from "./JobCard";

const limit = 5;

function JobList({ jobs }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const pageCount = Math.ceil(jobs.length / limit);

  return (
    <>
      <Grid container spacing={2}>
        {jobs &&
          jobs
            .slice((page - 1) * limit, page * limit)
            .map((job) => <JobCard key={job.id} job={job} />)}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={pageCount}
          variant="outlined"
          color="primary"
          page={page}
          onChange={handleChange}
          sx={{
            background: "rgba(255,255,255,0.35)",
            padding: "5px 5px",
            borderRadius: "30px",
            backdropFilter: "blur(15px)",
          }}
        />
      </Box>
    </>
  );
}

export default JobList;
