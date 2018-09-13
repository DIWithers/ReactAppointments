import React from 'react';
import Calendar from './Calendar';
import Appointments from './appointments/Appointments';

const Dashboard = () => {
    return (
        <div>
            <Calendar />
            <Appointments />
        </div>
    );
};
export default Dashboard;

//show calendar
//show appointments