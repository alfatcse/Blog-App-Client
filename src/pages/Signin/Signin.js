import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;
const Signin = () => {
  const [Login, { data, error, loading }] = useMutation(LOGIN);
  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log("data: ", data);
    Login({
      variables: data,
    });
  };
  const [userError, setError] = useState(null);
  useEffect(() => {
    if (data && data.signIn.token) {
      console.log("token", data.signIn.token);
      localStorage.setItem("token", data.signIn.token);
    }
    if (data && data.signIn?.userError) {
      setError(data.signIn.userError);
    }
  }, [data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;
  return (
    <div className="form">
      <form onSubmit={handleRegister}>
        <label htmlFor="">Your Email</label>
        <input name="email" type="email" />
        <label htmlFor="">Your Password</label>
        <input name="password" type="password" />
        <button type="submit" className="rounded-full p-2 bg-white text-black">
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
