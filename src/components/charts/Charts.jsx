import "./charts.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts({title,udata,dataKey,grid}) {
    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
        },
        {
            name: 'Feb',
            "Active User": 7000,
          },
          {
            name: 'March',
            "Active User": 4300,
          },
          {
            name: 'April',
            "Active User": 5200,
          },
          {
            name: 'May',
            "Active User": 4800,
          },
          {
            name: 'June',
            "Active User": 2000,
          },
          {
            name: 'July',
            "Active User": 5970,
          },
          {
            name: 'Aug',
            "Active User": 2700,
          },
          {
            name: 'Sept',
            "Active User": 1500,
          },
          {
            name: 'Oct',
            "Active User": 3500,
          },
          {
            name: 'Nov',
            "Active User": 3000,
          },
    
      ];
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip/>
                   {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
