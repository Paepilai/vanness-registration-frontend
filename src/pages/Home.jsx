import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("http://localhost:5000/api/users/me", {
            headers: { "x-auth-token": token },
          });
          setUser(res.data);
        } catch (err) {
          console.error(err.response.data);
        }
      }
    };
    fetchUser();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  if (!user) return <div>Loading...</div>;

  return (
    <Card className="mx-auto max-w-auto p-4 mt-10">
      <CardHeader>
        <CardTitle className="text-7xl">Welcome, {user.username}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label className="text-2xl">Email: {user.email}</Label>
        </div>
        <div className="space-y-2">
          <Label className="text-2xl">
            First Name: {user.personalInfo?.firstName}
          </Label>
        </div>
        <div className="space-y-2">
          <Label className="text-2xl">
            Last Name: {user.personalInfo?.lastName}
          </Label>
        </div>
        <div className="space-y-2">
          <Label className="text-2xl">
            Date of Birth:{" "}
            {user.personalInfo?.dateOfBirth
              ? formatDate(user.personalInfo.dateOfBirth)
              : ""}
          </Label>
        </div>
      </CardContent>
    </Card>
  );
};

export default Home;
