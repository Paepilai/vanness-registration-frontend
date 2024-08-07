// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import axios from "axios";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     personalInfo: {
//       firstName: "",
//       lastName: "",
//       dateOfBirth: "",
//     },
//   });

//   const onChange = (e) => {
//     const { name, value } = e.target;

//     if (name in formData.personalInfo) {
//       setFormData({
//         ...formData,
//         personalInfo: {
//           ...formData.personalInfo,
//           [name]: value,
//         },
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/users/register",
//         formData
//       );
//       console.log(response.data);
//       alert("User registered successfully!");
//     } catch (error) {
//       console.error(
//         "There was an error!",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   return (
//     <Card className="mx-auto max-w-md">
//       <CardHeader>
//         <CardTitle className="text-3xl">Register</CardTitle>
//         <CardDescription>
//           Enter your information to create an account
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <form onSubmit={onSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="username">Username</Label>
//             <Input
//               id="username"
//               name="username"
//               placeholder="Username"
//               onChange={onChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="Password"
//               onChange={onChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Email"
//               onChange={onChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="firstName">First Name</Label>
//             <Input
//               id="firstName"
//               name="firstName"
//               placeholder="First Name"
//               onChange={onChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="lastName">Last Name</Label>
//             <Input
//               id="lastName"
//               name="lastName"
//               placeholder="Last Name"
//               onChange={onChange}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="dateOfBirth">Date of Birth</Label>
//             <Input
//               id="dateOfBirth"
//               name="dateOfBirth"
//               type="date"
//               onChange={onChange}
//               required
//             />
//           </div>
//           <Button className="w-full">Register</Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default Register;

/////////

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    personalInfo: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
    },
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name in formData.personalInfo) {
      setFormData({
        ...formData,
        personalInfo: {
          ...formData.personalInfo,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/api/users/register`,
        formData
      );
      console.log(response.data);
      alert("User registered successfully!");
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error(
        "There was an error!",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="text-3xl">Register</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
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
              placeholder="Password"
              onChange={onChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={onChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={onChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={onChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              onChange={onChange}
              required
            />
          </div>
          <Button className="w-full">Register</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;
