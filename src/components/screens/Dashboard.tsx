import React from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import "./styles/Dashboard.css";

export function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <Sidebar />
        <div className="dash-info">
          <div className="welcome-header">
            <p>Welcome, Alexandra</p>
          </div>
          <div className="stat-cards">
            <div>Today's Patients</div>
            <div>No. of Doctors</div>
            <div>No. of Beds</div>
            <div>Today's Operation</div>
            <div>No. of Appointments</div>
          </div>

          <div className="dash-row-2">
            <p>Patient History</p>
            <div className="p-history"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
