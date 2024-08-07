import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import api from "@/api/api";

const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await api.get(`${API_URL}/api/users/me`, {
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
    <Card className="mx-auto max-w-auto p-4 m-20">
      <CardHeader>
        <CardTitle className="text-7xl">Welcome, {user.username}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-3xl">:: Personal Information ::</CardTitle>
        <div className="space-y-2">
          <Label className="text-1xl">Email: {user.email}</Label>
        </div>
        <div className="space-y-2">
          <Label className="text-1xl">
            Firstname: {user.personalInfo?.firstName}
          </Label>
        </div>
        <div className="space-y-2">
          <Label className="text-1xl">
            Lastname: {user.personalInfo?.lastName}
          </Label>
        </div>
        <div className="space-y-2">
          <Label className="text-1xl">
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
