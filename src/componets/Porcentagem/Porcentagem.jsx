import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
];
const COLORS = ["#143A5E", "#FE9C15", "#9CA818"];

function Porcentagem() {
    return (
        <div className="d-flex flex-column align-items-center">
        <PieChart width={250} height={290}>
            <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
        <div className='ms-5'>
                <div className="d-flex align-items-center">
                    <div className="legend_box_mat me-1"></div>
                    <h6>Matemática</h6>
                </div>
                <div className="d-flex align-items-center">
                    <div className="legend_box_let me-1"></div>
                    <h6>Letras</h6>
                </div>
                <div className="d-flex align-items-center">
                    <div className="legend_box_geo me-1"></div>
                    <h6>Geografia</h6>
                </div>
            </div>
        </div>
    );
}
export default Porcentagem;
