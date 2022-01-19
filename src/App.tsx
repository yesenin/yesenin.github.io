import React from 'react';
import './App.css';
import { signInWithGoogle } from './firebase/firebase.util';

import { User } from 'firebase/auth';

import { auth } from './firebase/firebase.util';

interface AppState {
  currentUser?: User | null;
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
    })
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        {
          currentUser
            ? <div>
                <p>{currentUser.displayName}</p>
                <button onClick={() => auth.signOut()}>Sign out</button>
              </div>
            : <button onClick={signInWithGoogle}>Sign in</button>
        }
      </div>
    );
  }
}

export default App;
