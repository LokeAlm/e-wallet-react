import { useDispatch } from 'react-redux';             
import { toggleActive } from './cardSlice';    
import gwbLogo from '../../icons/GWBLogo.webp';
import ibbLogo from '../../icons/IBBLogo.webp';
import ibcLogo from '../../icons/IBCLogo.png';

const Card = (props) => {
    const dispatch = useDispatch();

    const handleChange = (payload) => {
        dispatch(toggleActive(payload));
    }

    return (
        <>
            <div className="card-content" onClick={() => handleChange(props.cardNr)} >

                <i className="fas fa-wifi"></i>   

                <p className="vendor-text">{props.vendor ? props.vendor : "Exemple Vendor"}</p>

                {props.vendor === "Gringotts Bank" ?
                <img className="vendor-icon" width="65px" src={gwbLogo} alt="logo"/> :
                props.vendor === "Intergalactic Banking Clan" ?
                <img className="vendor-icon" width="65px" src={ibcLogo} alt="logo"/> :
                props.vendor === "Iron Bank of Braavos" ?
                <img className="vendor-icon" width="65px" src={ibbLogo} alt="logo"/> :
                <i className="far fa-circle vendor-icon"></i>}

                <div className="card-info">
                    <p className="card-number">{props.cardNr ? props.cardNr : "XXXX XXXX XXXX XXXX"}</p>

                    <div className="card-bottom">
                        <div>
                            <p className="label">CARDHOLDER NAME</p>
                            <p className="card-holder">{props.cardHolder ? props.cardHolder : "FirstName Lastname"}</p>
                        </div>
                        <div>
                            <p className="label">VALID THRU</p>
                            <p>{props.expMonth ? props.expMonth : "MM"} / {props.expYear ? props.expYear : "YY"}</p>
                        </div>

                    </div>        
                </div>   
            </div>
        </>
    )
};

export default Card;