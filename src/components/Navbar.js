import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
        <>
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="logo" className="nav-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                        products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>
                    my cart
                </ButtonContainer>
                </Link>
            </NavWrapper> 

            <ContentPlaceholder /> {/* pour éviter que le footer cache le contenu */}

            <FooterWrapper>
                Made by <span className="heart">AVA</span> ❤️
            </FooterWrapper>
        </>
        )
    }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  flex-wrap: wrap;

  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }

  .nav-brand {
    width: 50px;
    height: auto;
  }

  ul.navbar-nav {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    padding-left: 0;
  }

  /* Petit écran : navbar en colonne, centré */
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;

    .nav-brand {
      width: 40px;
      margin-bottom: 0.5rem;
    }

    ul.navbar-nav {
      margin-left: 0;
      margin-bottom: 0.5rem;
      width: 100%;
      justify-content: flex-start;
    }

    .nav-link {
      font-size: 1.1rem;
    }

    a.ml-auto {
      margin-left: 0;
      align-self: stretch;
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }

    button {
      width: 100%;
      justify-content: flex-start;
    }
  }
`;

const FooterWrapper = styled.footer`
  background: var(--mainBlue);
  color: var(--mainWhite);
  text-align: center;
  padding: 1rem 0;
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 100;

  .heart {
    color: var(--mainYellow);
    font-weight: bold;
  }
`;

// Pour que le contenu ne soit pas caché sous le footer fixe
const ContentPlaceholder = styled.div`
  height: 50px; /* même hauteur que footer */
`;
