import React, { useState } from "react";
import { CardContent, Typography, Button } from "@mui/material";
import {
  CustomBox,
  MyCard,
  Input,
  Form,
  FileType,
  Label,
  UploadImg,
} from "../components/card";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link } from "react-router-dom";
const initialState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  profilePic: "",
};
const Register = () => {
  const [userInfo, setUserInfo] = useState(initialState);

  const [profile, setProfile] = useState(null);

  const hangleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfilePic = (e) => {
    if (e.target.files.length !== 0) {
      setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value,
      });
    }
    const reader = new FileReader();

    reader.onload = () => {
      setProfile(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleRegister = (e) => {
    const { userName, email,password,confirmPassword,profilePic } = userInfo;
    e.preventDefault();
    const formData = new FormData();

    formData.append('userName', userName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append("confirmPassword", confirmPassword);
    formData.append('profilePic',profilePic) 
    console.log(userInfo);
  };

  return (
    <CustomBox>
      <MyCard>
        <CardContent>
          <Typography variant="h4">Create an account</Typography>
          <Form onSubmit={handleRegister}>
            <Input
              onChange={hangleChange}
              variant="outlined"
              label=" Your Name"
              type="text"
              name="userName"
              required
            />
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
              label="Enter Password"
              type="password"
              name="password"
              required
            />
            <Input
              onChange={hangleChange}
              variant="outlined"
              label="Confirm Your password"
              type="password"
              name="confirmPassword"
              required
            />
            <UploadImg>
              <div className="imgBox">
                {profile ? <img src={profile} alt="profilePicture" /> : ""}
              </div>
              <div>
                <Label
                  htmlFor="file-upload"
                  className="custom-file-upload"
                  required
                >
                  <AiOutlineCloudUpload className="icon" /> Upload Profile
                  Picture
                </Label>
                <FileType
                  type="file"
                  onChange={handleProfilePic}
                  name="profilePic"
                  id="file-upload"
                  required
                />
              </div>
            </UploadImg>

            <Button fullWidth={true} variant="contained" type="submit">
              Register
            </Button>
          </Form>
          <Typography align="center">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Log in Your account
            </Link>
          </Typography>
        </CardContent>
      </MyCard>
    </CustomBox>
  );
};

export default Register;
