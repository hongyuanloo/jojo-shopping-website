import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Stack,
  Box,
  styled,
} from "@mui/material";

export default function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState({ status: false, code: "", message: "" });

  const navigate = useNavigate();

  const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: theme.typography.caption.fontSize,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = input.email;
    const password = input.password;
    // console.log("LoginNEW", email, password);

    try {
      //   const userCredentials =
      await signInWithEmailAndPassword(auth, email, password);
      setError({ status: false, code: "", message: "" });
      //   console.log("log in success");
      //   console.log("Login", userCredentials.user.email);
      navigate("/");
    } catch (err) {
      //   console.log("Login error Code: ", err.code);
      //   console.log("Login error message: ", err.message);
      setError({ status: true, code: err.code, message: err.message });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setInput((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  return (
    <Stack justifyContent="center">
      <Box sx={{ textAlign: "center" }} pt={3}>
        <Typography variant="h6" color="text.secondary">
          Login
        </Typography>
      </Box>

      <Stack justifyContent="center" alignItems="center">
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} p={3} sx={{ width: 250 }}>
            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              size="small"
              type="email"
              label="Email"
              variant="outlined"
              name="email"
              value={input.email}
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              size="small"
              type="password"
              label="Password"
              variant="outlined"
              name="password"
              value={input.password}
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <Button variant="contained" type="submit" size="small">
              Login
            </Button>

            {error.status && (
              <StyledTypography sx={{ color: "red" }}>
                {error.code}
              </StyledTypography>
            )}
          </Stack>
        </form>

        <Stack spacing={2}>
          <StyledTypography>
            Don't have an account?
            <Link to="/createAccount">Create an account</Link>
          </StyledTypography>

          <StyledTypography sx={{ textAlign: "left" }}>
            <Link to="/">Return to store </Link>
          </StyledTypography>
        </Stack>
      </Stack>
    </Stack>
  );
}
