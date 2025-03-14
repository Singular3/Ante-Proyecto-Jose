import React from 'react'
import { useBeforeUnload } from 'react-router-dom'

function Card() {
  return (
    <div>
      <ul>
        {usuarios.map((usuario) => (
            <li key={index}>
               <strong>Nombre</strong> {usuario.nombre} <br />
               <strong>Email</strong> {usuario.email} <br />
               <strong>Password</strong> {usuario.password} <br />
            </li>

        )}
      </ul>
    </div>
  )
}

export default Card
