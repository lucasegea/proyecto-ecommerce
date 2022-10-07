import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'
import {Link} from 'react-router-dom';


function Navbar() {
        const menuPrincipal = [
            {
                id: 1,
                content: 'Inicio',
                important: true,
                link: '/home'
            },
            {
                id: 2,
                content: 'Productos',
                important: true,
                link: '/items'
            },
            {
                id: 3,
                content: 'Foro',
                important: true,
                link: '/'
            },
            {
                id: 4,
                content: CartWidget(),
                important: true,
                link: '/'
            }
            


        ]

      return(  
        <div>
            {menuPrincipal.map(({link, content, id}) => {
            return <> <Link key={id} to={`${link}`} >{content}</Link></>
                    
            }
            
            )}
        </div>
        
    )
}
export default Navbar;
