import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

function PayoutBarChart() {
  const [row, setRow] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/billings/")
      .then((res) => res.data)
      .then((rows) => {
        setRow(rows);
        console.log(rows, "payoutData");
      });
  }, []);

  const data = [
    { name: "June", Billing: row.data1, Payout: 10 },
    { name: "July", Billing: row.data2, Payout: 18.36 },
    { name: "August", Billing: row.data3, Payout: 22.18 },
  ];
  const chartTitle = {
    marginLeft: "20px",
    marginTop: "20px",
    textAlign: "center",
  };
  const chartSubtitle = {
    marginLeft: "20px",
    marginTop: "20px",
    textAlign: "center",
  };
  return (
    <div>
      <h5 style={chartTitle}>Comparision for Last 3 Months</h5>
      <p style={chartSubtitle}>
        values are in <b>Cr. (&#x20B9;)</b>
      </p>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          style={{ marginLeft: "-25px", marginTop: "10px" }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            itemStyle={{ height: "25px", margin: "0px", fontWeight: "bold" }}
            contentStyle={{
              borderRadius: "5px",
              margin: "0px",
              border: "2px solid #858585",
            }}
            labelStyle={{
              paddingBottom: "0px",
              fontSize: "15px",
              color: "black",
              textDecoration: "underline",
            }}
          />
          <Legend />
          <Bar dataKey="Billing" fill="rgb(98, 89, 202, 0.8)" />
          <Bar dataKey="Payout" fill="rgba(186, 8, 66, 0.8)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PayoutBarChart;
