import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <h1 id="Nav_Brand"><span id="Give_Logo">Give</span><span id="Bulk_Logo">Bulk</span></h1>
                <div id="Nav_Element">
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/">How It Works</Link>
                        <Link to="/">Services</Link>
                        <Link to="/">LOGIN</Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav