import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Porcentagem() {
    return (
        <div className="featured">
            <div className="bottom">
                <div className="featuredCharts">
                    <CircularProgressbar value={70} text="70%" strokeWidth={2} />
                </div>
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
            </div>
        </div>
    )
}
export default Porcentagem