import { useSelector, useDispatch } from 'react-redux';
import { consoleLog } from './cardSlice';
                             

const Card = () => {
    const dispatch = useDispatch();
    const card = useSelector((state) => state.card);
    
    dispatch(consoleLog());

    return (
        <>
            <div className="card">
                <h3>{card.cardHolder}</h3>
                <p>{card.cardNr}</p>
                <p>{card.vendor}</p>
                <p>{card.expMonth}/{card.expYear}</p>
            </div>
        </>
    )
};

export default Card;