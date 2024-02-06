import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const handleClick = () => {
    let path = "/exams";
    navigate(path);
  };
  return (
    <>
      <h2> Log-in Page</h2>
      <button type="button" onClick={handleClick}>
        Log-in
      </button>
    </>
  );
}
