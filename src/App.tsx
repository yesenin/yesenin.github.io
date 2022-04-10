import React from 'react';
import './App.css';

import {User} from 'firebase/auth';

import {auth} from './firebase/firebase.util';
import {AdminPage} from './components/admin';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/home-page';
import {ArmenianRoutes} from './routes/armenian-routes';

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
                        <Link to='/'>Home</Link>
                        <Link to='/armenian'>Armenian</Link>
                        { currentUser && <Link to='/admin'>Admin</Link>}
                    </div>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/admin' element={<AdminPage currentUser={currentUser}/>} />
                        <Route path='/armenian' element={<ArmenianRoutes />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
