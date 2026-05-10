import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { time: 'J-7', equipeA: 2.10, matchNul: 3.20, equipeB: 3.40 },
  { time: 'J-5', equipeA: 2.05, matchNul: 3.25, equipeB: 3.50 },
  { time: 'J-3', equipeA: 1.95, matchNul: 3.30, equipeB: 3.80 },
  { time: 'J-1', equipeA: 1.85, matchNul: 3.40, equipeB: 4.10 },
  { time: 'Jour-J', equipeA: 1.80, matchNul: 3.50, equipeB: 4.30 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#1f2937', color: '#f3f4f6', padding: '12px', border: '1px solid #374151', borderRadius: '6px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
        <p style={{ margin: '0 0 8px', fontWeight: 'bold', fontSize: '1.1rem', borderBottom: '1px solid #374151', paddingBottom: '4px' }}>{label}</p>
        <p style={{ margin: '4px 0', color: '#60a5fa', fontWeight: '500' }}>{`Victoire Équipe A: ${payload[0].value.toFixed(2)}`}</p>
        <p style={{ margin: '4px 0', color: '#9ca3af', fontWeight: '500' }}>{`Match Nul: ${payload[1].value.toFixed(2)}`}</p>
        <p style={{ margin: '4px 0', color: '#f87171', fontWeight: '500' }}>{`Victoire Équipe B: ${payload[2].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

const OddsChart = () => {
  return (
    <div style={{ width: '100%', height: 420, marginTop: '2rem', marginBottom: '2rem', backgroundColor: '#111827', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 10px 15px rgba(0,0,0,0.2)' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#f9fafb', fontSize: '1.3rem', fontWeight: '600' }}>Évolution des Cotes : Équipe A vs Équipe B</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
          <XAxis dataKey="time" stroke="#9ca3af" tick={{ fill: '#d1d5db', fontSize: 14 }} tickMargin={10} axisLine={{ stroke: '#4b5563' }} />
          <YAxis domain={['dataMin - 0.2', 'dataMax + 0.2']} stroke="#9ca3af" tick={{ fill: '#d1d5db', fontSize: 14 }} tickMargin={10} axisLine={{ stroke: '#4b5563' }} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#4b5563', strokeWidth: 1, strokeDasharray: '5 5' }} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="circle" iconSize={10} formatter={(value) => <span style={{ color: '#d1d5db', fontWeight: '500', marginLeft: '4px' }}>{value}</span>} />
          <Line type="monotone" dataKey="equipeA" name="Victoire Équipe A" stroke="#60a5fa" strokeWidth={3} dot={{ fill: '#111827', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, strokeWidth: 0 }} />
          <Line type="monotone" dataKey="matchNul" name="Match Nul" stroke="#9ca3af" strokeWidth={3} dot={{ fill: '#111827', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, strokeWidth: 0 }} />
          <Line type="monotone" dataKey="equipeB" name="Victoire Équipe B" stroke="#f87171" strokeWidth={3} dot={{ fill: '#111827', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, strokeWidth: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const rootElement = document.getElementById('odds-chart');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<OddsChart />);
}
