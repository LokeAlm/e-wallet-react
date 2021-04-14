import Card from '../Cards/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';  

const Home = () => {
    const cards = useSelector((state) => state.card.allCards);

    return (
        <div className="home-wrapper">

            <div className="active-card">
            <p className="small-type">Active card</p>
                {cards.map((card, i) => {
                    if(card.isActive){
                        let className = "card card" + i; // for css style
                        return (
                            <div key={i} className={className} >
                                <Card {...card} />  
                            </div>                   
                        ) 
                    }
                    return null;
                })}
            </div>

            <Link to="/addcard" >
                <button className="btn add-btn">ADD CARD</button>
            </Link>

            <div className="inactive">
                {cards.map((card, i) => {
                    if(!card.isActive){
                        let className = "card card" + i; // for css style
                        return (
                            <div className={className} key={i}>
                                <Card {...card} />
                            </div>
                        )
                    }
                    return null;
                })}  
            </div>

        </div>
    )
}

export default Home;