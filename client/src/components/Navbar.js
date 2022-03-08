import React from 'react';

// importing Link
import { NavLink } from "react-router-dom";

// importing alex_logo
import alex_logo from "../images/alex_logo.png";

// profile pic
import alex_pic from "../images/alex_pic.jpeg";

// icons
import home from "../images/home.svg";
import code from "../images/code.svg";
import user from "../images/user.svg";
import archive from "../images/archive.svg";
import git_pull_request from "../images/git-pull-request.svg";
import send from "../images/send.svg";

// social media icons
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import github from "../images/github.svg";

// importing scss
import "../styles/Navbar.scss";

// styled components 
import styled from 'styled-components';

const Button = styled.button`
    background-color: var(--btn);
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: var(--app-color-custom);
    margin: 0.5rem 0 0 0.5rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    &::before, &::after {
        content: "";
        background-color: var(--app-color-custom);
        height: 2px;
        width: 1rem;
        position: absolute;
        transition: all 0.3s ease;
    }

    &::before {
        top: ${props => props.clicked ? "1.5" : "1rem"};
        transform: ${props => props.clicked ? "rotate(135deg)" : "rotate(0)"};
    }

    &::after {
        top: ${props => props.clicked ? "1.2" : "1.5rem"};
        transform: ${props => props.clicked ? "rotate(-135deg)" : "rotate(0)"};
    }
`;

const LinksContainer = styled.ul`
    width: ${props => (props.clicked ? "12rem" : "3.5rem")};
`;

const Item = styled(NavLink)`
    text-direction: none;
    width: 100%;
`;

const LinkText = styled.span`
    width: ${props => (props.clicked ? "100%" : "0")};
    margin-left: ${props => (props.clicked ? "1.5rem" : "0")};
    overflow: hidden;
    transition: all .3s ease;
`;

const Profile = styled.div`
    width: ${props => (props.clicked ? "14rem" : "3rem")};
    margin-left: ${props => (props.clicked ? "9rem" : "0")};
`;

const Social = styled.div`
    display: ${props => (props.clicked ? "flex" : "none")};
`;

export default function NavBar() {

    // useState, useClick
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setProfileClick] = React.useState(false);
    const handleProfileClick = () => setProfileClick(!profileClick);

    return (
        <React.Fragment>
            <nav className='nav'>
                <Button className="menu_btn" clicked={click} onClick={() => handleClick()}></Button>
                <div className="navi_container">
                    <div className="logo_container">
                        <img src={alex_logo} alt="alex_logo" />
                    </div>
                    <LinksContainer className="links_container" clicked={click}>
                        <Item className='links' exact activeClassName="selected" to="/" onClick={() => setClick(false)}>
                            <img src={home} alt="home" />
                            <LinkText clicked={click} className="home">home</LinkText>
                        </Item>
                        <Item className='links' exact activeClassName="selected" to="/about" onClick={() => setClick(false)}>
                            <img src={user} alt="user" />
                            <LinkText clicked={click} className="about">about</LinkText>
                        </Item>
                        <Item className='links' exact activeClassName="selected" to="/skills" onClick={() => setClick(false)}>
                            <img src={code} alt="code" />
                            <LinkText clicked={click} className="skills">skills</LinkText>
                        </Item>
                        <Item className='links' exact activeClassName="selected" to="/qualifications" onClick={() =>setClick(false)}>
                            <img src={git_pull_request} alt="git_pull_request" />
                            <LinkText clicked={click} className="qualifications">qualifications</LinkText>
                        </Item>
                        <Item className='links' exact activeClassName="selected" to="/projects" onClick={() => setClick(false)}>
                            <img src={archive} alt="archive" />
                            <LinkText clicked={click} className="projects">projects</LinkText>
                        </Item>
                        <Item className='links' exact activeClassName="selected" to="/contact" onClick={() => setClick(false)}>
                            <img src={send} alt="send" />
                            <LinkText clicked={click} className="contact">contact</LinkText>
                        </Item>
                    </LinksContainer>

                    <Profile className="profile_container" clicked={profileClick}>
                        <img src={alex_pic} alt="alex_pic" onClick={() => handleProfileClick()} />
                        <Social className="social_container" clicked={profileClick}>
                            <a href="www.facebook.com/Alex_Ksairi"><img src={facebook} alt="facebook" /></a>
                            <a href="www.github.com/Alex_Ksairi"><img src={github} alt="github" /></a>
                            <a href="www.linkedin.com/Alex_Ksairi"><img src={linkedin} alt="linkedin" /></a>
                            <a href="www.instagram.com/Alex_Ksairi"><img src={instagram} alt="instagram" /></a>
                        </Social>
                    </Profile>
                </div>
            </nav>
        </React.Fragment>
    )
}
