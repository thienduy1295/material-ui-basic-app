import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import apiService from "../app/apiService";
import LoadingScreen from "../components/LoadingScreen";
import { Alert, Chip, Divider } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function JobModal() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    navigate(from, { replace: true });
  };

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const getProduct = async () => {
        setLoading(true);
        try {
          const res = await apiService.get(`/jobs/${params.id}`);
          setJob(res.data);
          setError("");
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
        setLoading(false);
      };
      getProduct();
    }
  }, [params]);

  // let date = new Date(job.postedDate).toDateString();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <>
                <Box className="boxModal" sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {job.title}
                  </Typography>
                  <Divider />
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {job.description}
                  </Typography>
                  <Typography>Skill:</Typography>
                  <Typography>
                    {job.skills.map((skill) => (
                      <Chip
                        key={skill}
                        className="chip"
                        label={skill}
                        sx={{
                          backgroundColor: "#FD7272",
                          mr: 0.5,
                          mb: 0.5,
                          color: "#fff",
                          fontSize: 10,
                          height: 25,
                        }}
                      />
                    ))}
                  </Typography>
                  <Typography>City: {job.city}</Typography>
                  <Typography>
                    Salary: {job.salaryLow} - {job.salaryHigh} VNĐ
                  </Typography>
                  <Typography>Posted: {job.postedDate}</Typography>
                </Box>
              </>
            )}
          </>
        )}
      </Modal>
    </div>
  );
}
