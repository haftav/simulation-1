import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/shelflogo.png'

export default function Header({ page, id, name }) {
    return (
        <div className="header">
            {
                page === "home" 
                ?
                <div className="header-info">
                    <img src={mainLogo} alt="logo" />
                    <h1>Shelfie</h1>
                </div>

                :

                <div>
                    {
                        name === "edit" || name === "add" 
                        ?
                        <div className="header-info">
                            <Link to="/">
                                <img src={mainLogo} alt="logo" />
                            </Link>
                            <Link to={`/bins/${id[0]}`}>
                            <h1>
                                {`Shelf ${id[0]}`}
                            </h1>
                            </Link>
                            {
                                name === "edit"
                                 ? 
                                <h1>{`Bin ${id[1]}`}</h1>
                                 : 
                                <h1>{`Add to Bin ${id[1]}`}</h1>
                            }
                        </div >
                        :
                        <div className="header-info">
                            <Link to="/">
                                <img src={mainLogo} alt="logo" />
                            </Link>
                            <h1>{`Shelf ${id}`}</h1>
                        </div>
                    }
                </div>
        }



        </div>
    )
}