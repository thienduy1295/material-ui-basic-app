import React from "react";
import { Chip, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function JobCard({ job }) {
  return (
    <Grid item xs={12} md={4}>
      <Card
        className="card"
        variant="outlined"
        sx={{
          minWidth: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 260,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontSize: 16,
              textAlign: "center",

              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            gutterBottom
          >
            {job.title}
          </Typography>
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              className="chip"
              label={skill}
              sx={{
                backgroundColor: "#FD7272",
                mr: 0.5,
                mb: 0.5,
                color: "#fff",
              }}
            />
          ))}
          <Typography variant="body2" color="text.secondary">
            {job.description.length > 70
              ? `${job.description.slice(0, 70)} ...`
              : job.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button className="btn" size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default JobCard;
