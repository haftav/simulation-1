import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/shelflogo.png'

export default function Header({ page, id, name }) {
    return (
        <div>
            {
                page === "home" 
                ?
                <div>
                    <h1>Shelfie</h1>
                    <img src={mainLogo} alt="logo" />
                </div>

                :

                <div>
                    {
                        name === "edit" || name === "add" 
                        ?
                        <div>
                            <Link to="/">
                                <img src={mainLogo} alt="logo" />
                            </Link>
                            <Link to={`/bins/${id[0]}`}>
                            <h1>{`Shelf ${id}`}</h1>
                            </Link>
                            {
                                name === "edit"
                                 ? 
                                <h1>{`Bin ${id[1]}`}</h1>
                                 : 
                                <h1>{`Add to Bin ${id[1]}`}</h1>
                            }
                        </div>
                        :
                        <div>
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