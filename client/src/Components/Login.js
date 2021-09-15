import { useState } from "react"

function Login({ onLogin }) {
  const [handle, setHandle] = useState("");
	const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
				handle,
				password
			}),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={handle}
				placeholder={"handle"}
        onChange={(e) => setHandle(e.target.value)}
      />
			<br />
      <input
        type="text"
        value={password}
				placeholder={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
			<br />
			<button type="submit">Login</button>
    </form>
  );
}

export default Login