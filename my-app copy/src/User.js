import React from "react";

const User = ({ user }) => {
    return (
    <div>
        <h2>Usuario aleatorio</h2>
        <p>Nombre: {user.name.first} {user.name.last}</p>
        <p>Email: {user.email}</p>
        <p>Imagen: <img src={user.picture.medium} alt="Imagen de usuario" /></p>
    </div>
    );
};

export default User;