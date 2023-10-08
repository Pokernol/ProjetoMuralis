import React from "react";
import { PieChart, Pie, Sector, Cell, Tooltip, LabelList } from "recharts";

const data = [
    { name: "Matematica", value: 400, porcento: '40%' },
    { name: "Letras", value: 300, porcento: '30%' },
    { name: "Geografia", value: 300, porcento: '30%' },
];
const COLORS = ["#143A5E", "#FE9C15", "#9CA818"];


function Porcentagem() {
    return (
        <div className="d-flex flex-column align-items-center">
            <PieChart width={250} height={250}>
                <Pie
                    data={data}
                    cx={120}
                    cy={120}
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                >
                    <LabelList dataKey="porcento"/>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
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
