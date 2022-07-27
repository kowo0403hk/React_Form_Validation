import { useRef, useState, useEffect } from "react";

const Login = () => {
  const userRef: any = useRef();
  const errRef: any = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false); // for demonstration only

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  return <div></div>;
};

export default Login;
