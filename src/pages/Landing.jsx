import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <Card className="mx-auto max-w-lg p-4 mt-10">
      <CardHeader>
        <CardTitle className="text-2xl">
          Please select a sign up method to continue
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full">
          <Link to="/login" className="w-full text-center">
            Login
          </Link>
        </Button>
        <Button className="w-full">
          <Link to="/register" className="w-full text-center">
            Register
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default LandingPage;
