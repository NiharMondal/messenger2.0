import { CardContent, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { CustomBox, Form, Input, MyCard } from "../components/card";
import { Link } from "react-router-dom";
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const hangleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(userInfo);
  };
  return (
    <CustomBox>
      <MyCard>
        <CardContent>
          <Typography variant="h4">Login your account</Typography>
          <Form onSubmit={handleLogin}>
            <Input
              onChange={hangleChange}
              variant="outlined"
              label=" Your Email"
              type="email"
              name="email"
              required
            />
            <Input
              onChange={hangleChange}
              variant="outlined"
              label="Enter your Password"
              type="password"
              name="password"
              required
            />
            <Button fullWidth={true} variant="contained" type="submit">
              Login
            </Button>
          </Form>
          <Typography align="center">
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Create your account
            </Link>
          </Typography>
        </CardContent>
      </MyCard>
    </CustomBox>
  );
};

export default Login;
