import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextField, Button, Typography, Stack, styled } from "@mui/material";

export default function CreateAccount() {
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
      //   const userCredential =
      await createUserWithEmailAndPassword(auth, email, password);
      setError({ status: false, code: "", message: "" });
      //   console.log("createAccount", userCredential.user);
      //   console.log("createAccount  success");
      navigate("/");
    } catch (err) {
      //   const errorCode = err.code;
      //   const errorMessage = err.message;
      //   console.log("createAccount error: ", errorMessage);
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
    <Stack textAlign="center" justifyContent="center">
      <Typography variant="h6" color="text.secondary" pt={3}>
        Create Account
      </Typography>
      {/* {`email: ${input.email} pass: ${input.password}`} */}
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
            <StyledTypography sx={{ textAlign: "left", fontSize: 10 }}>
              By signing up, I agree to the XXX's Terms of Service, Privacy
              Policy and Refund Policy.
            </StyledTypography>
            <Button variant="contained" type="submit" size="small">
              CREATE
            </Button>

            {error.status && (
              <StyledTypography sx={{ color: "red" }}>
                {error.code}
              </StyledTypography>
            )}
          </Stack>
        </form>
        <Stack spacing={2} sx={{ width: 250 }}>
          <StyledTypography>
            Already have an account? <Link to="/login">Login</Link>
          </StyledTypography>

          <StyledTypography sx={{ textAlign: "left" }}>
            <Link to="/">Return to store </Link>
          </StyledTypography>
        </Stack>
      </Stack>
    </Stack>
  );
}
