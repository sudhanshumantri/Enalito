import React from 'react';
import './style.css';
import PaginationTable from '../paginationTable'
import CustomGrid from '../grid';



let purchaseBehaviourData = {
    title: 'Purchase Behavior',
    width: 8,
    data: [{
        label: 'Orders and Revenue',
        subLabel: "",
        dataRows: [{
            title: 'Total orders in last 12 months: 243',
            size: 'S'
        },
        {
            title: 'Total revenue in last 12 months: $88653',
            size: 'S'
        }
        ]
    },
    {
        label: 'Customer Lifetime Value (CLV) Score Distribution',
        subLabel: "",
        dataRows: [{
            title: 'Total orders in last 12 months: 243',
            size: 'S'
        }]
    },
    {
        label: 'Grade',
        subLabel: "",
        dataRows: [{
            title: 'Total orders in last 12 months: 243',
            size: 'S'
        }]
    },
    {
        label: 'Average Order Value',
        subLabel: "",
        dataRows: [{
            title: 'Total orders in last 12 months: 243',
            size: 'S'
        }]
    },
    {
        label: 'Average Time Between Purchases',
        subLabel: "",
        dataRows: [{
            title: 'Total orders in last 12 months: 243',
            size: 'S'
        }]
    },
    {
        label: 'Seasonality',
        subLabel: "",
        dataRows: [{
            title: 'Total orders in last 12 months: 243',
            size: 'S'
        }]
    },
    {
        label: 'Discount',
        subLabel: "",
        dataRows: [{
            title: 'Total orders in last 12 months: 243',
            size: 'S'
        }]
    },
    {
        label: 'Recency and Length',
        subLabel: "",
        dataRows: [{
            title: 'Total orders in last 12 months: 243',
            size: 'S'
        }]
    }

    ]
}
let browserBehaviourData = {
    title: 'Browsing Behavior',
    width: 4,
    data: [{
        label: 'Recency',
        subLabel: "How recently your customers abandon items in their cart",
        dataRows: [{
            title: 'Average of all customers: 8 days',
            size: 'S'
        }]
    },
    {
        label: 'Frequency',
        subLabel: "How frequently your customers abandon items in their cart",
        dataRows: [{
            title: 'Average frequency of all customers: 8 days',
            size: 'S'
        }]
    },
    {
        label: 'Monetary',
        subLabel: "Value of items your customers abandon in their cart",
        dataRows: [{
            title: 'Average value of all items: $452',
            size: 'S'
        }]
    }

    ]
}
let cartAbadonData = {
    title: 'Cart Abandonment Behavior',
    width: 5,
    data: [{
        label: 'Recency',
        subLabel: "How recently your customers abandon items in their cart",
        dataRows: [{
            title: 'Average of all customers: 8 days',
            size: 'S'
        }]
    },
    {
        label: 'Frequency',
        subLabel: "How frequently your customers abandon items in their cart",
        dataRows: [{
            title: 'Average frequency of all customers: 8 days',
            size: 'S'
        }]
    },
    {
        label: 'Monetary',
        subLabel: "Value of items your customers abandon in their cart",
        dataRows: [{
            title: 'Average value of all items: $452',
            size: 'S'
        }]
    }

    ]
}
let emailBehaviourData = {
    title: 'Email Behavior',
    width: 5,
    data: [{
        label: 'Emails Sent',
        subLabel: "",
        dataRows: [{
            title: '25678',
            size: 'L'
        }]
    },
    {
        label: 'Emails Opened',
        subLabel: "",
        dataRows: [{
            title: '578',
            size: 'L'
        }]
    },
    {
        label: 'Emails Clicked',
        subLabel: "",
        dataRows: [{
            title: '510',
            size: 'L'
        }]
    }
    ]
}

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        let gridoneData = [purchaseBehaviourData, browserBehaviourData]
        let gridTwoData = [cartAbadonData, emailBehaviourData]
        return (
            <div className='container'>
                <h1>All Customers: 24385</h1>
                <div>
                    <CustomGrid count={2} gridInfo={gridoneData} />
                    <CustomGrid count={2} gridInfo={gridTwoData} />
                </div>
                <div className='dashboard-table-holder'>
                    <p className='paraghraph-heading'>View each user’s behavior across our  Key Performance Indicators (KPIs)</p>
                    <PaginationTable />
                </div>
            </div>
        )
    }

}