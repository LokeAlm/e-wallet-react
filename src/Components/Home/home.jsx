import Card from '../Cards/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-wrapper">
            <Card />
            <Link to="/addcard" >
                <button className="btn add-btn">ADD CARD</button>
            </Link>
        </div>
    )
}

export default Home;