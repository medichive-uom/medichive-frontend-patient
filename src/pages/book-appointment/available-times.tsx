import React, { useState, useEffect } from 'react';
import { Button, Card, Divider } from 'antd';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import TimeDropDown from './available-time-dropDown'; // Importing custom TimeDropDown component

const { Meta } = Card;

const AvailableTimes: React.FC = () => {
  // State variables
  const [profile, setProfile] = useState<any>(null); // State to store doctor's profile
  const [availableTimes, setAvailableTimes] = useState<any>(null); // State to store available appointment times
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null); // State to store the selected appointment time ID

  // Extracting URL parameters using useLocation hook
  const location = useLocation();
  const doctorId = new URLSearchParams(location.search).get('doctorId'); // Doctor ID from URL
  const instituteId = new URLSearchParams(location.search).get('instituteId'); // Institute ID from URL
  const selectedDate = new URLSearchParams(location.search).get('date'); // Selected date from URL

  // Function to fetch doctor's profile
  const fetchDoctorProfile = async () => {
    try {
      if (!doctorId) {
        console.error('Doctor ID not provided');
        return;
      }

      const response = await axios.get(`http://localhost:8080/patient/${doctorId}/profile`);
      setProfile(response.data); // Set the doctor's profile state
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  // Function to fetch available appointment times
  const fetchAvailableTimes = async () => {
    try {
      if (!doctorId) {
        console.error('Doctor ID not provided');
        return;
      }

      const response = await axios.get(`http://localhost:8080/patient/doctors/available-times?doctorId=${doctorId}&instituteId=${instituteId}&date=${selectedDate}`);
      setAvailableTimes(response.data); // Set the available appointment times state
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  // Function to handle booking appointment
  async function postData() {
    try {
      const data = {
        patientId: 1, // Hardcoded patient ID for demonstration
        doctorAvailableTimeId: selectedTimeId, // Selected appointment time ID
      };
      if (!selectedTimeId) {
        alert('Please select a time');
        return;
      }
      const response = await axios.post('http://localhost:8080/patient/doctors/appointment', data);
      console.log('Response:', response.data);
      if (response.status === 201) {
        alert('Appointment booked successfully');
      } else {
        alert('Error booking appointment');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error; // Rethrow the error to handle it in the caller function
    }
  }

  // Fetch data on component mount or when doctorId changes
  useEffect(() => {
    fetchDoctorProfile();
    fetchAvailableTimes();
  }, [doctorId]);

  return (
    <div>
      {/* Booking Section */}
      <h3>Booking Section</h3>

      {/* Display doctor's profile */}
      {profile && (
        <Card
          hoverable
          style={{ width: 240, margin: 'auto' }}
          cover={<img src={'/doc_image.jpg'} alt="Doctor's Photo" />}
        >
          <Meta title={profile.name} />
          {/* Display doctor's specializations */}
          {profile.specializations && profile.specializations.map((specialization: any) =>
            <p key={specialization.id}>{specialization.name}</p>)
          }
        </Card>
      )}

      {/* Divider */}
      <Divider />

      {/* Card for scheduling appointments */}
      <Card style={{ width: 800, margin: 'auto', marginBottom: 20 }}>
        <h3>Schedule Appointments</h3>
        {/* Display TimeDropDown component for selecting appointment time */}
        {availableTimes && (
          <TimeDropDown availableTimes={availableTimes} setSelectedTimeId={setSelectedTimeId} />
        )}
        {/* Button to book appointment */}
        <Button type="primary" onClick={postData} style={{ marginTop: 20 }}>Book Now</Button>
      </Card>
    </div>
  );
};

export default AvailableTimes;
