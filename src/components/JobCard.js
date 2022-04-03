import React from "react";
import { Chip, Divider, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";

function JobCard({ job }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Grid item xs={12} md={4}>
      <Card
        variant="outlined"
        sx={{
          minWidth: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 260,
          background: "rgba(255, 255, 255, 0.05)",
          border: "none",
          borderRadius: 3,
          backdropFilter: "blur(15px)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          borderLeft: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "5px 5px 30px rgba(0,0,0,0.2)",
          color: "#fff",
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
          <Divider sx={{ mb: 2, border: "1px solid rgba(255,255,255,0.05)" }} />
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              key={skill}
              className="chip"
              label={skill}
              sx={{
                background: "rgba(255,255,255,0.6)",
                mr: 0.5,
                mb: 0.5,
                color: "#111",
                fontSize: 10,
                height: 25,
              }}
            />
          ))}
          <Typography variant="body2">
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
          <Button
            sx={{ color: "#111", background: "#fff", mb: 1 }}
            className="btnCard"
            size="small"
            onClick={() => navigate(`/jobs/${job.id}`)}
            state={{ backgroundLocation: location }}
          >
            Learn more
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default JobCard;
