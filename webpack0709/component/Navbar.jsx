import React, { Component } from 'react'
import '../css/Navbar.css'
import { FaFacebook, FaInstagram, FaTwitter,FaBars ,FaBuffer} from 'react-icons/fa'
import '../css/index.css'
import NavToggle from './NavToggle'
import { Link } from 'react-router-dom'
// Link를 a태그 대체?로 쓸거다
class Navbar extends Component {

    state = {
        social: [
            {
                id: 1,
                url: 'https://www.twitter.com',
                icon: <FaTwitter />
            },
            {
                id: 2,
                url: 'https://www.facebook.com',
                icon: <FaFacebook />
            },
            {
                id: 3,
                url: 'https://www.instagram.com',
                icon: <FaInstagram />
            }
        ],
        menu :[
            {
                id:1,
                url:'/',
                text:'home'
            },
            {
                id:2,
                url:'/about',
                text:'about'
            },
            {
                id:3,
                url:'/projects',
                text:'projects'
            },
            {
                id:4,
                url:'/community',
                text:'community'
            },
        ],
        showLinks:false,
        
    }
    showContainer =()=>{
        let className = this.state.showLinks ? 'links-container on' : 'links-container'
        return className
    }
    handleToggle = ()=>{
        this.setState({showLinks:!this.state.showLinks})
    }
    render() {
      
        return (
            <nav>
                <div className="nav-center">
                    {/* logo */}
                    <div className="nav-header">
                        <h1 className="nav-logo">Logo</h1>
                        <NavToggle toggle={this.handleToggle}/>
                        {/*  */}
                    </div>
                    {/* Navigation */}
                    <div className={this.showContainer()}>
                        <ul className="links">
                            {
                                this.state.menu.map(item=>{
                                    let {id,url,text}= item
                                    return(
                                        <li key={id}><Link to={url}>{text}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    
                    <ul className="social-icons">
                        {/* 리액트에선 for 안된다. */}
                        {
                            this.state.social.map(item => {
                                const { id, url, icon } = item
                                return (
                                    <li key={id}>
                                        <a href={url}>{icon}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar