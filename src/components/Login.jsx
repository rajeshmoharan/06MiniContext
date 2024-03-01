import { useContext, useState } from "react";
import UserContext from "../context/UserContext";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser}= useContext(UserContext);

  const handleClicked = (e) => {
        e.preventDefault()
       setUser({username,setPassword})
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        style={{ margin: 10, fontSize: 20 }}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="text"
        style={{ margin: 10, fontSize: 20 }}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button style={{ margin: 10 }} onClick={handleClicked}>
        Submit
      </button>
    </div>
  );
}

export default Login;
