import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }
    getData(e) {
        this.setState({ search: e.target.value })
    }
    postData(e) {
        e.preventDefault()
        this.props.chageSearch(this.state.search)
        this.setState({ search: "" })
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg background sticky-top ">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="/">NewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" aria-current="page" to="/">All</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/Politics">Politics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" aria-current="page" to="/Crime">Crime</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" aria-current="page" to="/Education">Education</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-light" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Others
                                    </Link>
                                    <ul className="dropdown-menu text-center ">
                                        <li><Link className="dropdown-item" to="/Science"></Link>Science</li>
                                        <li><Link className="dropdown-item" to="/Technology"></Link>Technology</li>
                                        <li><Link className="dropdown-item" to="Games"></Link>Games</li>
                                        <li><Link className="dropdown-item" to="/Cricket"></Link>Cricket</li>
                                        <li><Link className="dropdown-item" to="/Fifa"></Link>Fifa</li>
                                        <li><Link className="dropdown-item" to="/World"></Link>World</li>
                                        <li><Link className="dropdown-item" to="/India"></Link>India</li>
                                        <li><Link className="dropdown-item" to="Jokes"></Link>Jokes</li>
                                        <li><Link className="dropdown-item" to="/Covid"></Link>Covid</li>
                                    </ul>
                                </li>
                            </ul>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-light" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </Link>
                                <ul className="dropdown-menu text-center ">
                                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage('hi')}></button>Hindi</li>
                                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage('en')} ></button>English</li>
                                </ul>
                            </li>

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search' onChange={(e) => this.getData(e)} />
                                <button className="btn btn-outline-background" type="submit">Search</button>
                            </form>
                             
                     



                        </div>
                    </div>



                </nav>

            </>
        )
    }
}
