import { Button, Card, CardTitle, CardText} from 'reactstrap'; 
import './Inscricoes.css'

function BlueInscritos(){
    return (
        <Card className='m-1 me-3 col-lg-2 col-md-6 col-sm-12 shadow_color_blue' body inverse>
            <CardTitle tag="h5">
                Total de Inscritos
            </CardTitle>
            <CardText>
            <h3 className='text-center display-6'>1255</h3>
            </CardText>
        </Card>
    )
}
export default BlueInscritos;