import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import FormProvider from "../components/form/FormProvider";
import FTextField from "../components/form/FTextField";
import React, { useState } from "react";
import { Avatar, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FCheckbox from "../components/form/FCheckbox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 330,
  bgcolor: "white",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const defaultValues = {
  username: "thienduy",
  password: "caothienduyCoderSchool",
};

export default function LoginModal() {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    auth.login(data.username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxLogin" sx={style}>
          <Avatar sx={{ background: "#e26a2c" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={1.25} sx={{ mt: 3 }}>
              <FTextField name="username" label="Username" />
              <FTextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FCheckbox name="remember" label="Remember me" />
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Typography sx={{ padding: "1px 0" }}>
                <Link href="#">Forgot password ?</Link>
              </Typography>
              <Typography>
                Do you have an account ? <Link href="#">Sign Up</Link>
              </Typography>
            </Stack>
          </FormProvider>
        </Box>
      </Modal>
    </div>
  );
}
