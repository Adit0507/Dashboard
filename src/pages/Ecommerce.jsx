import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import {IoIosMore} from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import {Stacked, Pie, Button, LineChart, SparkLine} from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparkLineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const DropDown = ({ currentMode }) =>{
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{ text: 'Time', value: 'id' }} style={{ border:'none', color: (currentMode === 'Dark') && 'white'}} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
}

const Ecommerce = () => {
  return (
    <div>Ecommerce</div>
  )
}

export default Ecommerce