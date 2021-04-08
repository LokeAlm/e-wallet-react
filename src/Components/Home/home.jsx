import Card from '../Cards/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Card />
            <Link to="/addcard">
                <button>Add Card</button>
            </Link>
        </>
    )
}

export default Home;