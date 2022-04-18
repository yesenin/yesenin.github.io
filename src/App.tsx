import React from 'react';

import {User} from 'firebase/auth';
import {auth} from './firebase/firebase.util';
import {SignIn} from './components/sign-in';

import './App.scss';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {MainPage} from './pages/main-page';
import {KeyboardPage} from './pages/keyboard-page';
import {LettersPage} from './pages/letters-page';
import {NumeralsPage} from './pages/numerals-page';
import {NotFoundPage} from './pages/not-found-page';
import {AdminPage} from './pages/admin-page';

interface AppState {
  currentUser: User | null;
}

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
            <BrowserRouter>
                <header>
                    <div>
                        { currentUser ? <Link to='/admin'>{currentUser.displayName}</Link> : <SignIn />}
                    </div>
                </header>
                <main>
                    <Link to='/'>Тут когда-то будут крошки</Link>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/armenian/keyboard' element={<KeyboardPage />} />
                        <Route path='/armenian/letters' element={<LettersPage />} />
                        <Route path='/armenian/numerals' element={<NumeralsPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                        { currentUser && <Route path='/admin' element={<AdminPage />}/>}
                    </Routes>
                </main>
                <footer>
                    anton.yesenin@gmail.com
                </footer>
            </BrowserRouter>
        );
    }
}

export default App;
