import React from "react";
import { Table } from "antd";

const ViewLabReports: React.FC = () => {
  return <div>
    <h2>View Lab Reports</h2>
    <Table
      columns={[
        {
          title: "Collected Date",
          dataIndex: "collectedDate",
          key: "collectedDate",
        },
        {
          title: "Report Name",
          dataIndex: "reportName",
          key: "reportName",
        },
        {
          title: "Doctor",
          dataIndex: "doctor",
          key: "doctor",
        },
        {
          title: "Comment",
          dataIndex: "comment",
          key: "comment",
        },
        {
          title: "Report",
          dataIndex: "report",
          key: "report",
        },
      ]}
      dataSource={[
        {
          key: "1",
          collectedDate: "2021-01-01",
          reportName: "Report 1",
          doctor: "Dr. John Doe",
          comment: "Some comment",
          report: "View",
        },
        {
          key: "2",
          collectedDate: "2021-01-02",
          reportName: "Report 2",
          doctor: "Dr. Jane Doe",
          comment: "Some comment",
          report: "View",
        },
      ]} />
  </div>;
  
};

export default ViewLabReports;
