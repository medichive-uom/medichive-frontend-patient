import React, { useState, useEffect } from 'react';
import { Button, Card, Divider } from 'antd';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import TimeDropDown from './available-time-dropDown';

const { Meta } = Card;

const AvailableTimes: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [availableTimes, setAvailableTimes] = useState<any>(null);
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null);

  const patientId = 1;
  const location = useLocation();
  const doctorId = new URLSearchParams(location.search).get('doctorId');
  const instituteId = new URLSearchParams(location.search).get('instituteId');
  const selectedDate = new URLSearchParams(location.search).get('date');

  const fetchDoctorProfile = async () => {
    try {
      if (!doctorId) {
        console.error('Doctor ID not provided');
        return;
      }

      // Fetch data from the server
      const response = await axios.get(`http://localhost:8080/patient/${doctorId}/profile`);
      setProfile(response.data);
      console.log(profile);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };
  const fetchAvailableTimes = async () => {
    try {
      if (!doctorId) {
        console.error('Doctor ID not provided');
        return;
      }
      // Fetch data from the server
      const response = await axios.get(`http://localhost:8080/patient/doctors/available-times?doctorId=${doctorId}&instituteId=${instituteId}&date=${selectedDate}`);
      setAvailableTimes(response.data);
      // console.log(availableTimes);
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  }

  async function postData() {
    try {
      const data = {
        patientId,
        doctorAvailableTimeId: selectedTimeId,
      };
      if(!selectedTimeId){
        alert('Please select a time');
        return;
      }
      const response = await axios.post('http://localhost:8080/patient/doctors/appointment',data);
      console.log('Response:', response.data);
      if(response.status === 201){
        alert('Appointment booked successfully');
      }else{
        alert('Error booking appointment');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error; // Rethrow the error to handle it in the caller function
    }
  }
  useEffect(() => {
    fetchDoctorProfile();
    fetchAvailableTimes();
  }, [doctorId]);

  return (
    <div>
      <h3>Booking Section</h3>
      {profile && <Card
        hoverable
        style={{ width: 240, margin: 'auto' }}
        cover={<img src={'/doc_image.jpg'} alt="My Photo" /> }
      >
        <Meta title={profile.name} />
        {profile.specializations && profile.specializations.map((specialization: any) =>
          <p key={specialization.id}>{specialization.name}</p>)
        }
      </Card>}
      <Divider />
      <Card style={{ width: 800, margin: 'auto', marginBottom: 20 }}>
        <h3>Schedule Appointments</h3>
        {availableTimes &&
        <TimeDropDown availableTimes={availableTimes} setSelectedTimeId={setSelectedTimeId} />}
        <Button type="primary" onClick={postData} style={{ marginTop: 20 }}>Book Now</Button>
      </Card>
    </div>
  );
};

export default AvailableTimes;
