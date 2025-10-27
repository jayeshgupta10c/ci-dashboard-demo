import React, { useEffect, useState } from "react";

function App() {
  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/builds")
      .then((res) => res.json())
      .then((data) => setBuilds(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CI Dashboard</h1>
      {builds.length === 0 ? (
        <p>No builds yet</p>
      ) : (
        <table border="1" cellPadding="10">
         <thead>
  <tr>
    <th>Status</th>
    <th>Time</th>
    <th>Coverage (%)</th>
    <th>Defects</th>
  </tr>
</thead>
<tbody>
  {builds.map((b, i) => (
    <tr key={i}>
      <td>{b.status}</td>
      <td>{b.time}</td>
      <td>{b.coverage}</td>
      <td>{b.defects}</td>
    </tr>
  ))}
</tbody>

        </table>
      )}
    </div>
  );
}

export default App;
