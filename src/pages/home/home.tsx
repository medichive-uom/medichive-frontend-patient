import React from "react";
import { Table } from "antd";

const Home: React.FC = () => {
  // Sample patient profile data
  const patientProfile = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    address: "123 Main Street, Kurunegala",
    contact: "076 0045285",
  };

  return (
    <div>
      <h2>Home</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
          <h3>Patient Profile</h3>
          <div>
            <p><strong>Name:</strong> {patientProfile.name}</p>
            <p><strong>Age:</strong> {patientProfile.age}</p>
            <p><strong>Gender:</strong> {patientProfile.gender}</p>
            <p><strong>Address:</strong> {patientProfile.address}</p>
            <p><strong>Contact:</strong> {patientProfile.contact}</p>
          </div>
        </div>
      </div>
      <Table
        columns={[
          {
            title: "Id",
            dataIndex: "id",
            key: "id",
          },
          {
            title: "Date & Time",
            dataIndex: "dateTime",
            key: "dateTime",
          },
          {
            title: "Doctor",
            dataIndex: "doctor",
            key: "doctor",
          },
          {
            title: "Diagnosis",
            dataIndex: "diagnosis",
            key: "diagnosis",
          },
          {
            title: "Prescription",
            dataIndex: "prescription",
            key: "prescription",
          },
          {
            title: "Lab Reference",
            dataIndex: "labReferance",
            key: "labReferance",
          },
        ]}
        dataSource={[
          {
            key: "1",
            id: "1",
            dateTime: "2021-01-01",
            doctor: "Dr. John Doe",
            diagnosis: "Some diagnosis",
            prescription: "View",
            labReferance: "View",
          },
          {
            key: "2",
            id: "2",
            dateTime: "2021-01-02",
            doctor: "Dr. Jane Doe",
            diagnosis: "Some diagnosis",
            prescription: "View",
            labReferance: "View",
          },
        ]}
      />
    </div>
  );
};

export default Home;
