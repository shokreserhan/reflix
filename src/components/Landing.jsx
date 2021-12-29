import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/landing.css'

class Landing extends Component {
    render() {
        let users = this.props.users
        return (
            <div className='Landing-page'>
                <h1 id="Landing-title">Who's watching</h1>
                <div className='line'></div>
                <div id="Landing-container">{
                    users.map(user => {
                        return (
                            <div key={user.id}>
                                <Link to={"/Catalog"} className='user-link'><div key={user.id} className='landing' style={{backgroundColor: user.color,}}>{user.name}</div></Link>
                            </div>
                        )
                    })
                }</div>
            </div>
        );
    }
}
export default Landing;