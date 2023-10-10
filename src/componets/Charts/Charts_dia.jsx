import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import Calendario from '../Calendario/Calendario'

const data = [
    {
        Geografia: 40,
        Letras: 24,
        Matematica: 45,
    },
    {
        Geografia: 30,
        Letras: 13,
        Matematica: 35,
    },
    {
        Geografia: 20,
        Letras: 38,
        Matematica: 22,
    },
    {
        Geografia: 27,
        Letras: 39,
        Matematica: 20,
    },
    {
        Geografia: 18,
        Letras: 48,
        Matematica: 21,
    },
    {
        Geografia: 23,
        Letras: 38,
        Matematica: 25,
    },
    {
        Geografia: 34,
        Letras: 43,
        Matematica: 30,
    },
];

export default function Charts_dia() {
    return (
        <div id='shadow' className="mt-5 box_width d-flex align-items-center">
            <div className='d-flex flex-column ms-5'>
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
            <div className="d-flex align-items-center" >
                <AreaChart width={550} height={220} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0, }}>
                    <CartesianGrid strokeDasharray="4 4"/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip/>
                    <Area type="monotone" dataKey="Matematica" stackId="1" stroke="#143A5E" fill="#143A5E" />
                    <Area type="monotone" dataKey="Letras" stackId="2" stroke="#FE9C15" fill="#FE9C15" />
                    <Area type="monotone" dataKey="Geografia" stackId="3" stroke="#9CA818" fill="#9CA818" />
                </AreaChart>
            </div>
            <Calendario/>
        </div>
    )
}
