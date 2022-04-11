import React from 'react';
import './App.css';
import './App.scss';

import {User} from 'firebase/auth';

import {auth} from './firebase/firebase.util';
import {AdminPage} from './components/admin';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/home-page';
import {SignIn} from './components/sign-in';
import {ArmenianPage} from './pages/armenian-page';

interface AppState {
  currentUser: User | null;
}

/**
 * App root page
 */
class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentUser: null,
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged((user: any) => {
            this.setState({
                currentUser: user,
            });
        });
    }

    render() {
        const {currentUser} = this.state;

        return (
            <div>
                <BrowserRouter>
                    <div>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/armenian'>Armenian</Link></li>
                            <li>{ currentUser ? <Link to='/admin'>Admin</Link> : <SignIn />}</li>
                        </ul>
                    </div>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/admin' element={<AdminPage currentUser={currentUser}/>} />
                        <Route path='/armenian/*' element={<ArmenianPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
