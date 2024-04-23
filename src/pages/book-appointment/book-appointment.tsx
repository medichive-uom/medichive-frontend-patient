import React, { useState } from "react";
import Filter from "./filter";
import { Button,  Layout, Table } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookAppointment: React.FC = () => {
    // State variables
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedInstitute, setSelectedInstitute] = useState<string>('');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [availableDoctors, setAvailableDoctors] = useState<any[]>([]);
  const navigate = useNavigate();

  // Function to fetch available doctors based on selected date
  const fetchData = async () => {
    try{
      console.log('data',selectedDoctor,selectedInstitute,selectedSpecialization,selectedDate)
      const arr = [];
      if(selectedDoctor){
        arr.push(`doctorId=${selectedDoctor}`);
      }
      if(selectedInstitute){
        arr.push(`instituteId=${selectedInstitute}`);
      }
      if(selectedSpecialization){
        arr.push(`specializationId=${selectedSpecialization}`);
      }
      if(selectedDate){
        arr.push(`date=${selectedDate}`);
      }
      const query = arr.join('&');
      console.log('query',query);
      const response = await axios.get(`http://localhost:8080/patient/available-doctors?${query}`);
      console.log(response.data);
      return response.data;
    }catch(error){
      console.log(`Error fetching data: ${error}`);
    }
  };

  // Function to handle search action
  const handleSearch = async () => {
    const doctors = await fetchData();
    setAvailableDoctors(doctors); // Set the available doctors in the state
    setSearchPerformed(true); // Set the state to indicate that the search has been performed

  };

  // Function to handle booking appointment
  const handleBookAppointment = (instituteId:number,doctorId:number) => {
    console.log(instituteId,doctorId);
    navigate(`/bookappointment/doctor?instituteId=${instituteId}&doctorId=${doctorId}&date=${selectedDate}`);
  };



  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <h2>Book Appointments</h2>
      <Filter handleSearch={handleSearch} 
      setSelectedDoctor={setSelectedDoctor} 
      setSelectedInstitute={setSelectedInstitute}
      setSelectedSpecialization={setSelectedSpecialization}
      setSelectedDate={setSelectedDate}
      />

      {searchPerformed && (
        <Layout style={{ backgroundColor: 'white' }}>
          <h3>Available Doctors</h3>
          {availableDoctors.map((institute) => (
          <Table
          key={institute.instituteDetails.id}
          dataSource={institute.availableDoctors}
          bordered
          title={() => `${institute.instituteDetails.instituteName}`}
          columns={[
            {title: 'Date', dataIndex: 'date', width: 500}, 
            { title: 'Name', dataIndex: 'name', width: 500 },
            { title: 'Specialization',width: 500, dataIndex: 'specializations', render: (specializations: string[]) => specializations.join(', ') },
            {
              render: (_,record) => (
                <Button type="primary"  onClick={()=> handleBookAppointment(institute.instituteDetails.id,record.doctorId)}>Book</Button>
              ),
            },
          ]}
        />
          ))}
        </Layout>
      )}
    </Layout>
  );
};

export default BookAppointment;
