import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import './Charts.css'

const data = [
    {
        name: 'Jan',
        Geografia: 24,
        Letras: 40,
        Matematica: 24,

    },
    {
        name: 'fev',
        Geografia: 24,
        Letras: 30,
        Matematica: 13,

    },
    {
        name: 'Mar',
        Geografia: 24,
        Letras: 20,
        Matematica: 25,

    },
    {
        name: 'Abr',
        Geografia: 24,
        Letras: 27,
        Matematica: 39,

    },
    {
        name: 'Mai',
        Geografia: 24,
        Letras: 19,
        Matematica: 48,

    },
    {
        name: 'Jun',
        Geografia: 24,
        Letras: 23,
        Matematica: 38,

    },
    {
        name: 'Jul',
        Geografia: 24,
        Letras: 34,
        Matematica: 43,

    },
    {
        name: 'Ago',
        Geografia: 26,
        Letras: 30,
        Matematica: 36,

    },
    {
        name: 'Set',
        Geografia: 24,
        Letras: 34,
        Matematica: 30,

    },
];

function Charts() {
    return (
        <div id='shadow' className="mt-5 box_width">
            <h4 className="m-3">Inscretos</h4>
            <div className="d-flex align-items-center" >
                <BarChart width={650} height={200} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Matematica" fill="#143A5E" />
                    <Bar dataKey="Letras" fill="#FE9C15" />
                    <Bar dataKey="Geografia" fill="#9CA818" />
                </BarChart>
                
                <div className='d-flex flex-column overflow-x-hidden'>
                    <div className="d-flex align-items-center">
                        <div className="legend_box_mat me-1"></div>
                        <h4>Matemática</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="legend_box_let me-1"></div>
                        <h4>Letras</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="legend_box_geo me-1"></div>
                        <h4>Geografia</h4>
                    </div>
                </div>
            </div>
        </div>
    );
} export default Charts;
