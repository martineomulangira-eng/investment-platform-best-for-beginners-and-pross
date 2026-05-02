export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <p>Welcome to your investment dashboard</p>

      <div style={{ marginTop: 20 }}>
        <h3>Total Portfolio</h3>
        <p>$0.00</p>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Recent Investments</h3>
        <p>No investments yet</p>
      </div>
    </div>
  );
}