import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, Label} from 'recharts';

class BillingPieSummary extends React.Component {

    COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    pieData1 = [
        {
            "name": "Chrome",
            "value": 68.85
        },
        {
            "name": "Firefox",
            "value": 7.91
        },
        {
            "name": "Edge",
            "value": 6.85
        },
        {
            "name": "Internet Explorer",
            "value": 6.14
        },
        {
            "name": "Others",
            "value": 10.25
        }
    ];
	
	pieData2 = [
        {
            "name": "Netscape",
            "value": 23
        },
        {
            "name": "Firefox",
            "value": 46
        },
        {
            "name": "Edge",
            "value": 12
        },
        {
            "name": "Internet Explorer",
            "value": 56
        },
        {
            "name": "Others",
            "value": 14.7
        }
    ];

    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };

    render() {
        return (
            <PieChart width={325} height={300}>
                <Pie data={this.pieData1} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={120} fill="#8884d8" >
				<Label 
				    value="% split of Doctor's Billing" position="centerBottom"   fontSize='10px'
				/>
                    {
                        this.pieData1.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                    }
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart>
        )
    };
}

export default BillingPieSummary;