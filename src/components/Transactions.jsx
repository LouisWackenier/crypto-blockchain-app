import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  return 'transaction';
}

const Transactions = () => {

    return (
      <div className='flex w-full justify-center items-center 2xl1:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
      {dummyData ? (
           <h3 className='text-white tex-3xl text-center my-2'>Latest Transactions</h3>
         ) : (
           <h3 className='text-white tex-3xl text-center my-2'>Connect your account to see your latest transactions</h3>
         )}
      </div>
  </div>
    );
}

export default Transactions;