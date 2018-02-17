import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/shelflogo.png'

export default function Header({ page, id, name }) {
    return (
        <div>
            {
                page === "home" 
                ?
                <div className="shelves-header-container dark-red">
                    <div className="shelves-header-content">
                        <a>
                            <img src={mainLogo} alt="logo" />
                        </a>
                        <h1>SHELFIE</h1>
                    </div>
                </div>

                :

                <div className="bins-header-container light-red">
                    {
                        name === "edit" || name === "add" 
                        ?
                        <div className="bins-header-info-container">
                            <div className="bins-header-logo-container dark-red">
                                <Link to="/">
                                    <img src={mainLogo} alt="logo" />
                                </Link>
                            </div>
                            <div className="bins-header-text-container-2">
                                <Link to={`/bins/${id[0]}`}>
                                <h1>
                                    {`Shelf ${id[0]}`}
                                </h1>
                                </Link>
                            </div>
                            {
                                name === "edit"
                                 ? 
                                 <div className="bins-header-details-container">
                                     <h1>{`Bin ${id[1]}`}</h1>
                                 </div>
                                 : 
                                 <div className="bins-header-details-container">
                                    <h1>{`Add to Bin ${id[1]}`}</h1>
                                </div>
                            }
                        </div >
                        :
                        <div className="bins-header-info-container">
                            <div className="bins-header-logo-container dark-red">
                            <Link to="/">
                                <img src={mainLogo} alt="logo" />
                            </Link>
                            </div>
                            <div className="bins-header-text-container-1">
                                <h1>{`Shelf ${id}`}</h1>
                            </div>
                        </div>
                    }
                </div>
        }



        </div>
    )
}