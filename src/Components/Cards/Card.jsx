import { useDispatch } from 'react-redux';             
import { toggleActive } from './cardSlice';         

const Card = (props) => {
    const dispatch = useDispatch();

    const handleChange = (payload) => {
        dispatch(toggleActive(payload));
    }

    return (
        <>
            <div className="card-content" onClick={() => handleChange(props.cardNr)} >

                <h3>{props.cardHolder ? props.cardHolder : "FirstName Lastname"}</h3>
                
                <p>{props.cardNr ? props.cardNr : "XXXX XXXX XXXX XXXX"}</p>

                <p>{props.vendor ? props.vendor : "ExampleVendor"}</p>

                <p>{props.expMonth ? props.expMonth : "MM"} /{props.expYear ? props.expYear : "YY"}</p>           

            </div>
        </>
    )
};

export default Card;