import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function PayoutAreaChart() {
	var titleMonth = new Date().toLocaleString("en-US", { month: "long" });
	var titleYear = new Date().getFullYear();
    const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]
	const chartTitle={
		marginLeft:'20px', 
		marginTop:'20px', 
		textAlign:'center',
	}
    return (
        <div>
			<h5 style={chartTitle}>Request Traffic - {titleMonth} {titleYear}</h5>
			<ResponsiveContainer width="100%" height="90%">
				<AreaChart width="100%" height="87.5%" data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
					<defs>
						<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#6259ca" stopOpacity={0.8}/>
							<stop offset="95%" stopColor="#6259ca" stopOpacity={0}/>
						</linearGradient>
						<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
							<stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
						</linearGradient>
					</defs>
					<XAxis dataKey="name" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip itemStyle={{height:'25px',margin:'0px', fontWeight:'bold'}} contentStyle={{borderRadius: '5px', margin:'0px', border:'2px solid #858585'}} labelStyle={{paddingBottom:'0px', fontSize:'15px', color:'black', textDecoration:'underline'}}/>
					<Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
					<Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
				</AreaChart>
			</ResponsiveContainer>
        </div>
    )
}

export default PayoutAreaChart;
