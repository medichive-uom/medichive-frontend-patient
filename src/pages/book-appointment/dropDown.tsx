import React, { useState, useEffect } from 'react';
import { Select, Space } from 'antd';
import type { ConfigProviderProps } from 'antd';
import axios from 'axios';

type SizeType = ConfigProviderProps['componentSize'];

const DropDown: React.FC = () => {
  const [size] = useState<SizeType>('middle');
  const [doctors, setDoctors] = useState<any[]>([]);
  const [institutes, setInstitutes] = useState<any[]>([]);
  const [specializations, setSpecializations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);           
  const [error, setError] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedInstitute, setSelectedInstitute] = useState<string>('');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('');

  useEffect(() => {
    const fetchData = async (url: string, setData: Function) => {
      try {
        const response = await axios.get(url);
        const { data } = response;
        console.log(data);
        if (Array.isArray(data)) {
          setData(data);
        }
      } catch (error) {
        setError(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData('http://localhost:8080/patient/doctors', setDoctors);
    fetchData('http://localhost:8080/patient/institutes', setInstitutes);
    fetchData('http://localhost:8080/patient/specializations', setSpecializations);
  }, []);

  const handleDoctorChange = (value: string) => {
    setSelectedDoctor(value);
    console.log(selectedDoctor);
  };

  const handleInstituteChange = (value: string) => {
    setSelectedInstitute(value);
    console.log(selectedInstitute);
  };

  const handleSpecializationChange = (value: string) => {
    setSelectedSpecialization(value);
    console.log(selectedSpecialization);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Select
          size={size}
          defaultValue="Doctor"
          style={{ width: 200 }}
          loading={loading}
          options={doctors.map((doctor) => ({ value: doctor.id, label: doctor.name }))}
          onChange={handleDoctorChange}
        />
        <Select
          size={size}
          defaultValue="Institute"
          style={{ width: 200 }}
          loading={loading}
          options={institutes.map((institute) => ({ value: institute.id, label: institute.instituteName }))}
          onChange={handleInstituteChange}
        />
        <Select
          size={size}
          defaultValue="Specialization"
          style={{ width: 200 }}
          loading={loading}
          options={specializations.map((specialization) => ({ value: specialization.id, label: specialization.name }))}
          onChange={handleSpecializationChange}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </Space>
    </>
  );
};

export default DropDown;
