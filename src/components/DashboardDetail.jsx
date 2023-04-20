import React from 'react';
import WidgetSummary from "~/components/WidgetSummary";

const DashboardDetail = () => {
  return (
    <div className={'container'}>
      <div className="row">
        <WidgetSummary title={'Số khách hàng'} total={3} />
        <WidgetSummary title={'Số đơn hàng'} total={8} />
        <WidgetSummary title={'Số manga tồn kho'} total={1110} />
        <WidgetSummary title={'Số figure tồn kho'} total={1560} />
      </div>
    </div>
  );
};

export default DashboardDetail;