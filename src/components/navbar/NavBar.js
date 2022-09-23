import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'

function Navbar() {
        const menuPrincipal = [
            {
                    id: 1,
                    content: 'Inicio',
                    important: true,
                    link: '#'
            },
            {
                id: 2,
                content: 'Productos',
                important: true,
                link: '#'
            },
            {
                id: 3,
                content: 'Foro',
                important: true,
                link: '#'
            },
            {
                id: 4,
                content: CartWidget(),
                important: true,
                link: '#'
            }
            


        ]

      return(  
        <div>
            {menuPrincipal.map(({link, content}) => {
                return <a href ={link}>{content}</a>        
            }
            
            )}
        </div>
    )
}
export default Navbar;
