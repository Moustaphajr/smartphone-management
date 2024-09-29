import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { SearchContext } from '../../context/searchcontext';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [search, setSearch] = useState('');
    const { setSearchValue } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearch(e.target.value);
        setSearchValue(e.target.value);
    };

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
        window.location.reload();
    };

    const isAuthenticated = localStorage.getItem('token');

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-center" to="/">
                    <img style={{ width: "20px" }} src="src/assets/eCommerce-logo.jpg" alt="" />
                    SM collection
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            {
                                isAuthenticated ? (
                                <Link className="nav-link" to="/add-smartphone/admin">Ajouter un smartphone</Link>
                                   
                                ) : (
                                    null
                                )
                            }
                            
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                        <input
                            onChange={(e) => handleChange(e)}
                            value={search}
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        
                    </form>

                    <ul className="navbar-nav">
                        {isAuthenticated ? (
                            <li className="nav-item">
                                <Link onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>Se déconnecter</Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Se connecter</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
