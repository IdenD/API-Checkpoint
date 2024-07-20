// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Liste des utilisateurs</h2>
      <ul className="list-group">
        {listOfUsers.map(user => (
          <li key={user.id} className="list-group-item">
            <h5>{user.name}</h5>
            <p>Email: {user.email}</p>
            <p>Adresse: {user.address.street}, {user.address.city}</p>
            <p>Téléphone: {user.phone}</p>
            <p>Entreprise: {user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
