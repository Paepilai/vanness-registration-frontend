import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import api from "@/api/api";

const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await api.post(`${API_URL}/api/users/login`, formData);
  //     console.log(response.data);
  //     alert("User logged in successfully!");
  //     localStorage.setItem("token", response.data.token);
  //     navigate("/home");
  //   } catch (error) {
  //     console.error(
  //       "There was an error!",
  //       error.response ? error.response.data : error.message
  //     );
  //   }
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`${API_URL}/api/users/login`, formData);
      console.log(response.data);
      alert("User logged in successfully!");
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        if (errorMessage === "Invalid username") {
          alert("The username is invalid.");
        } else if (errorMessage === "Invalid password") {
          alert("The password is invalid.");
        } else {
          alert("Login failed. Please try again.");
        }
      } else {
        console.error(
          "There was an error!",
          error.response ? error.response.data : error.message
        );
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <Card className="mx-auto max-w-lg p-4 mt-10 mb-10">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your username and password to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              onChange={onChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={onChange}
              required
            />
          </div>
          <CardFooter>
            <Button className="w-full" type="submit">
              Sign in
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
