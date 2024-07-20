import React from 'react';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header className="bg-primary text-white text-center p-4">
        <h1>Application de liste d'utilisateurs</h1>
      </header>
      <main className="container mt-4">
        <UserList />
      </main>
    </div>
  );
}

export default App;
