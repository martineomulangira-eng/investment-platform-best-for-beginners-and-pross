export default function Signup() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Signup Page</h1>

      <input
        placeholder="Email"
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        placeholder="Password"
        type="password"
        style={{ display: "block", marginBottom: 10 }}
      />

      <button>Sign Up</button>
    </div>
  );
}