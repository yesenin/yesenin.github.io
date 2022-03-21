import React from 'react';
import './App.css';

import {User} from 'firebase/auth';

import {auth} from './firebase/firebase.util';
import {AdminPage} from './components/admin';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {Game} from './components/game';
import {WordList} from './components/word-list';

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
                        <Link to='/'>Main</Link>
                        { currentUser && <>
                            <Link to='/admin'>Admin</Link>
                            <Link to='/words'>Words</Link>
                        </> }
                    </div>
                    <Routes>
                        <Route path='/' element={<Game />} />
                        <Route path='/admin' element={<AdminPage currentUser={currentUser}/>} />
                        <Route path='/words' element={<WordList />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
