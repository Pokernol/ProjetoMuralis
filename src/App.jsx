import {Card} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import SideBar from './componets/SideBar/SideBar';
import Header from './componets/Header/Header';
import BlueInscritos from './componets/Inscritos/BlueInscritos';
import WhiteInscritos from './componets/Inscritos/WhiteInscritos';
import Charts from './componets/Charts/Charts'
import Charts_dia from './componets/Charts/Charts_dia';
import 'react-calendar/dist/Calendar.css';
import Porcentagem from './componets/Porcentagem/Porcentagem';


function App() {
  return (
    <div className='d-flex'>
      <SideBar />
      <div className='b_example_divider b_example_vr'></div>
      <div className='size_100'>
        <Header />
        <div className='me-5 ms-5'>
          <div className='row'>
            <BlueInscritos />
            <BlueInscritos />
            <BlueInscritos />
            <WhiteInscritos />
          </div>
          <div className='row'>
            <table className="table border-light me-2 col-lg-8 col-md-6 col-sm-12">
                <tr>
                  <th ><Charts /></th>
                </tr>
                <tr>
                  <th ><Charts_dia /></th>
                </tr>
            </table>
            <Card className='ms-5 mt-5 me-3 col-3 shadow_color_white' body color="light">
              <Porcentagem/>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
