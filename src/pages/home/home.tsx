import React from 'react';
import { Card, Descriptions, Layout, Space, Table, Tag } from 'antd';
import type { DescriptionsProps, TableProps } from 'antd';
import { Image } from 'antd';

const items: DescriptionsProps['items'] = [

    {
        key: '1',
        label: 'Name',
        children: 'John Brown',
    },
    {
        key: '2',
        label: 'Age',
        children: '30',
    },
    {
        key: '3',
        label: 'Gender',
        children: 'Male',
    },
    {
        key: '4',
        label: 'Address',
        children: '123 Main Street, Colombo',
    },
    {
        key: '5',
        label: 'Contact number',
        children: '0769935729',
    },
    {
      key: '6',
      label: 'Blood Group',
      children: 'A+',
    },
    {
      key: '7',
      label: 'Weight',
      children: '70',
    },
    {
      key: '8',
      label: 'Height',
      children: '175 cm',
    },
    {
      key: '9',
      label: 'Date of Birth',
      children: '1992-05-15',
    },
    {
      key: '10',
      label: 'Allergies',
      children: 'None',
    },
    {
      key: '11',
      label: 'Family History',
      children: 'None',
    },

];



//TABLE
interface DataType {
    id: number;
    name: string;
    dateAndTime: Date;
    diagnosis: string[];
}

const currentDate = new Date();

const columns: TableProps<DataType>['columns'] = [

    {
        title: 'Visit Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Doctor Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => (
            <a>{text}</a>
        ),
    },
    {
        title: 'Date and Time',
        dataIndex: 'dateAndTime',
        key: 'dateAndTime',
        render: (createdDate: Date) => <span>{createdDate.toLocaleString()}</span>,
    },
    {
        title: 'Diagnosis',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { diagnosis }) => (
            <>
                {diagnosis.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'dengue') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },

    {
        title: 'Prescription',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a>View</a>
            </Space>
        ),
    },

    {
        title: 'LAB Reference',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a>View</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        id: 1,
        name: 'Jim White',
        dateAndTime: currentDate,
        diagnosis: ['fever', 'chickenpox'],
    },
    {
        id: 2,
        name: 'Jim White',
        dateAndTime: currentDate,
        diagnosis: ['dengue'],
    }


];

const Home: React.FC = () => {

    return (
        <Layout style={{ backgroundColor: 'white' }}>
            <h2>Profile</h2>

            <Card style={{ width: 800, margin: "auto",marginBottom: 20}}>
                <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <Descriptions layout="vertical" items={items} />
            </Card>

            <Space direction="vertical" size="middle" style={{ display: 'flex' }}></Space>

            <Card title="Visits">
                <Table columns={columns} dataSource={data} />
            </Card>
        </Layout>
    );
};

export default Home;