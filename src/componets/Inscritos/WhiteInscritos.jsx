import { Card, CardTitle, CardText } from 'reactstrap';

function WhiteInscritos() {
    return (
        <Card className='ms-5 me-3 col-lg-3 col-md-6 col-sm-12 shadow_color_white' body color="light">
            <CardTitle tag="h5">
                Total de Inscritos
            </CardTitle>
            <CardText>
                <h3 className='text-center display-6'>1255</h3>
            </CardText>
        </Card>
    )
}
export default WhiteInscritos;