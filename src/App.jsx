import { useState, useEffect } from 'react'


function App() {
  const [dashboardStats, setDashboardStats] = useState([
    { title: "CPU Usage", value: "32%" },
    { title: "RAM Usage", value: "58%" },
    { title: "Disk Usage", value: "71%" },
    { title: "Uptime", value: "4 Days" },
  ])

  useEffect(() => {
    fetch('http://localhost:8080')
      .then((response) => response.json())
      .then((data) => {
        setDashboardStats(data)
      })
  }, [])

  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        PC Monitoring Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {dashboardStats.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>
    </div>
  )
}

function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        padding: "1.5rem",
        borderRadius: "10px",
        width: "200px",
        textAlign: "center",
        border: "1px solid #333",
      }}
    >
      <h2>{title}</h2>

      <p
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginTop: "1rem",
        }}
      >
        {value}
      </p>
    </div>
  )
}

export default App
