import React from 'react';
import {Card, Typography} from "antd";
import Title from "antd/es/skeleton/Title";

const WidgetSummary = ({ title, total}) => {
  return (
    <div className={'col-6 col-md-4 col-lg-3 mt-3'} >
      <Card style={{backgroundColor: 'rgb(40, 178, 247, 0.3)', color: 'rgb(40, 178, 247)'}}>
        <Typography.Title level={1}>{total}</Typography.Title>
        <Typography.Title level={3}>{title}</Typography.Title>
      </Card>
    </div>
  );
};

export default WidgetSummary;