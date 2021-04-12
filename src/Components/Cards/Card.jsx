import { useSelector } from 'react-redux';                             
import GWBLogo from '../../resources/GWBLogo.webp';
import IBBLogo from '../../resources/IBBLogo.webp';
import IBCLogo from '../../resources/IBCLogo.webp';

const Card = () => {
    const cards = useSelector((state) => state.card.allCards);

    const handleClick = (event) => {
        console.log(event.target);
    }

    return (
        <>
            {cards.map((card, i) => {
                let className = "card" + i; // for css style
                return (
                    <div key={i} className={className}>
                        {card.isActive ? 
                        <div className="active-card">
                            <p className="small-type">Active card</p>
                            <div className="card">
                                <h3>{cards[i].cardHolder}</h3>
                                <p>{cards[i].cardNr}</p>
                                {cards[i].vendor === "Gringotts Bank" ?
                                <img src={GWBLogo}/> 
                                : cards[i].vendor === "Intergalactic Banking Clan" ? 
                                <img src={IBCLogo}/> 
                                : <img src={IBBLogo}/> }
                                <p>{cards[i].expMonth}/{cards[i].expYear}</p>
                            </div>
                        </div> : null}

                        {!card.isActive ? 
                        <div className="card" onClick={handleClick}>
                            <h3>{cards[i].cardHolder}</h3>
                            <p>{cards[i].cardNr}</p>
                            <p>{cards[i].vendor}</p>
                            <p>{cards[i].expMonth}/{cards[i].expYear}</p>
                        </div> : null}
                    </div>
                )
            })}
        </>
    )
};

export default Card;