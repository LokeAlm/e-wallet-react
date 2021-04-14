import Card from '../Cards/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';  
import { deleteCard } from '../Cards/cardSlice';

const Home = () => {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.card.allCards);

    const handleClick = (payload) => {
        dispatch(deleteCard(payload));
    }

    return (
        <div className="home-wrapper">

            <div className="active-card">
            <p className="small-type">Active card</p>
                {cards.map((card, i) => {
                    if(card.isActive){
                        return (
                            <div className={card.vendor === "Gringotts Bank" ? "card card0" : card.vendor === "Iron Bank of Braavos" ? "card card1"
                            : card.vendor === "Intergalactic Banking Clan" ? "card card2" : null} key={i}>
                                <Card {...card} />  
                            </div>                   
                        )
                    } return null;
                })}
            </div>

            <Link to="/addcard" >
                <button className="btn add-btn">ADD CARD</button>
            </Link>

            <div className="inactive">
                {cards.map((card, i) => {
                    if(!card.isActive){
                        return ( 
                            <div className={card.vendor === "Gringotts Bank" ? "card card0" : card.vendor === "Iron Bank of Braavos" ? "card card1" : card.vendor === "Intergalactic Banking Clan" ? "card card2" : null} key={i}>
                                <button className="delete-btn" onClick={() => handleClick(card.cardNr)}>Delete</button>
                                <Card {...card} />
                            </div> 
                        )
                    } return null;
                })}  
            </div>
        </div>
    )
}

export default Home;