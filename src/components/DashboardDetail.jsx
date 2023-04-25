import React, {useState} from 'react';
import WidgetSummary from "~/components/WidgetSummary";
import {useQuery} from "@tanstack/react-query";
import {getCustomers} from "~/api/customer.api";
import {getTransactions} from "~/api/transaction.api";
import {getProducts} from "~/api/product.api";
import filter from 'lodash/filter';
import sumBy from 'lodash/sumBy';
import moment from 'moment';

const DashboardDetail = () => {
  const year = moment().year();
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [products, setProducts] = useState([]);

  const { isLoadingCustomer } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomers,
    onSuccess: data => setCustomers(data.data['$values'].map(e => ({
      ...e,
      key: e.id
    })))
  });

  const { isLoadingTransactions } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
    onSuccess: data => setTransactions(data.data['$values'].map(e => ({
      ...e,
      key: e.id,
      customer: e.customerName,
      employee: e.employeeName,
      status: e.statusName
    })))
  });

  const { isLoadingProducts } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    onSuccess: data => setProducts(data.data['$values'].map(e => ({
      ...e,
      key: e.id,
      thumbnail: e.srcImg
    })))
  });

  const getTransactionByYear = (year) => {

  } ;

  const getNumberProduct = (type) => {
    const manga = filter(products, {'type': type});
    const number = sumBy(manga, 'amount');
    return number;
  };

  console.log('year', year);

  return (
    <div className={'container'}>
      <div className="row">
        <WidgetSummary title={'Số khách hàng'} total={customers.length} />
        <WidgetSummary title={'Số đơn hàng ' + year} total={transactions.length} />
        <WidgetSummary title={'Số lượng manga'} total={getNumberProduct(true).valueOf()} />
        <WidgetSummary title={'Số lượng figure'} total={getNumberProduct(false).valueOf()} />
      </div>
    </div>
  );
};

export default DashboardDetail;