import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function ChartComponent1({datalist}) { 
	var titleMonth = new Date().toLocaleString("en-US", { month: "long" });
	var titleYear = new Date().getFullYear();
    const data=[
        {name:"Onboarding", Requests: datalist, },
		{name:"Payout", Requests: 0},
		{name:"Positions", Requests: 0},
    ]
	const chartTitle={
		marginLeft:'20px', 
		marginTop:'20px', 
		textAlign:'center',
	}
    return (
        <div className="ht-xs-90p">
			<h5 style={chartTitle}>Request Traffic - {titleMonth} {titleYear}</h5>
			<ResponsiveContainer width="100%" height="89%">
				<BarChart data={data} style={{marginLeft:'-25px', marginTop:'10px'}}>
					<XAxis dataKey="name" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip  />
					<Legend />
				
					<Bar dataKey="Requests" fill="#6259ca" />
				</BarChart>
			</ResponsiveContainer>
        </div>
    )
}

export default ChartComponent1
