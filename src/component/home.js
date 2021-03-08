import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

export default function Home() {
    return (
        <div className="app__field">
            <div className='data__field'>
                <div className="home__text">
                    Home
                </div>
                <Divider />
                <div className="home__link">
                    <Link to='/profile'> My profile</Link>
                    <Link to='/chats'> Chats</Link>
                </div>
            </div>
        </div >
    );
}