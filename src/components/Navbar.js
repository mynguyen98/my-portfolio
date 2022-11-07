import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiFillGithub, AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import { links } from "../utils/constants.js";
import logo from "../assets/logo-name.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <div className="nav-logo">
              <h1>M|</h1>
              <h2>MYNGUYEN</h2>
            </div>
          </Link>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="nav-links" ref={linksRef}>
            {links.map((link) => {
              const { id, text, icon, url } = link;
              return (
                <li key={id}>
                  <Link to={url} onClick={() => setShowLinks(false)}>
                    {icon}
                    <span> {text}</span>
                  </Link>
                </li>
              );
            })}
            <div className="button">
              <AiFillGithub />
              <AiFillStar />
            </div>
          </ul>
        </div>
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setShowLinks(!showLinks)}
        >
          <FaBars styled={{ color: "#c770f0" }} />
        </button>
      </div>
    </NavContainer>
  );
};
const NavContainer = styled.nav`
  height: 7rem;
  display: flex;

  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: #181a27;
  .nav-center {
    width: 90vw;
    position: fixed;
    margin: 0 auto;
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-header {
    display: flex;
    align-items: center;
  }
  .nav-toggle {
    display: none;
  }
  .nav-logo {
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--imp-text-color);
    h1 {
      margin: 0;
      font-size: 3.2rem;
    }
    h2 {
      display: block;
      margin: 0;
      font-size: 1.8rem;
      letter-spacing: 0.4rem;
    }
  }
  .links-container {
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
  }
  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 4rem;
    margin-bottom: 0;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--bs-white);
      font-size: 1.8rem;
      font-weight: 400;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 0.5rem;
      /* &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        } */
      span {
        padding-left: 4px;
      }
    }
  }
  .button {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    position: relative;
    transition: all 0.3s ease-out 0s;
    z-index: 1;
    padding: 0.4rem 1.8rem;
    background-color: #452b65;
    border: 1px solid #623686;
    svg {
      font-size: 1.8rem;
      &:nth-child(1) {
        margin-right: 8px;
      }
    }
    &:hover {
      background-color: #603381;
      transform: translateY(-2px);
    }
  }
  @media (max-width: 992px) {
    .nav-toggle {
      display: block;
      background: transparent;
      border: transparent;
      color: var(--imp-text-color);
      cursor: pointer;
      svg {
        font-size: 2.6rem;
        color: var(--imp-text-color);
      }
    }
    .links-container {
      height: 0px;
      left: 0;
      right: 0;
      width: 100vw;
      position: fixed;
      top: 7rem;
      overflow: hidden;
      background-color: #181a27;
    }
    .nav-links {
      flex-direction: column;
      justify-content: start;
      width: 100%;
      li {
        width: 100%;
        &:hover {
          background-color: #2f313d;
          a {
            transition: var(--transition);
            transform: translateX(8px);
          }
        }
        padding: 0.4rem 0;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        /* &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        } */
        span {
          padding-left: 4px;
        }
      }
    }
    .button {
      margin: 4px 0 1.8rem 0;
    }
  }
  @media (min-width: 992px) {
    .nav-links {
      li {
        &:after {
          background: #c95bf5;
          border-radius: 16px;
          bottom: 1px;
          content: "";
          display: block;
          height: 5px;
          left: 0;
          position: relative;
          transition: all 0.3s ease-out 0s;
          width: 0%;
          z-index: -1;
        }
        &:hover {
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
`;
export default Navbar;
// const NavContainer = styled.nav`
//   height: 7rem;
//   background-color: #181a27;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   .nav-center {
//     width: 90vw;
//     position: fixed;
//     margin: 0 auto;
//     max-width: var(--max-width);
//   }
//   .nav-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     /* img {
//       width: 240px;
//       margin-left: -15px;
//     } */
//     h1 {
//       margin: 0;
//       color: var(--imp-text-color);
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       font-size: 3.2rem;
//       h2 {
//         display: block;
//         margin: 0;
//         font-size: 1.8rem;
//         letter-spacing: 0.4rem;
//       }
//     }
//   }
// .nav-toggle {
//   background: transparent;
//   border: transparent;
//   color: var(--imp-text-color);
//   cursor: pointer;
//   svg {
//     font-size: 2.6rem;
//     color: var(--imp-text-color);
//   }
// }
//   /* .links-container {
//     position: fixed;
//     top: 7rem;
//     height: 0;
//     overflow: hidden;
//     transition: var(--transition);
//     background-color: #181a27;
//     width: 100vw;
//   } */
// .nav-links {
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   li {
//     margin: 0 2.2rem;
//   }
//   a {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     color: var(--bs-white);
//     font-size: 1.8rem;
//     font-weight: 400;
//     text-transform: capitalize;
//     letter-spacing: var(--spacing);
//     padding: 0.5rem;
//     /* &:hover {
//         border-bottom: 2px solid var(--clr-primary-7);
//       } */
//     span {
//       padding-left: 4px;
//     }
//   }
// }
//   .btn {
//     display: none;
//   }
//   @media (min-width: 992px) {
//     .links-container {
//       height: 100%;
//     }
//     .nav-links {
//       flex-direction: row;

// li {
//   &:after {
//     background: #c95bf5;
//     border-radius: 16px;
//     bottom: 1px;
//     content: "";
//     display: block;
//     height: 5px;
//     left: 0;
//     position: relative;
//     transition: all 0.3s ease-out 0s;
//     width: 0%;
//     z-index: -1;
//   }
//   &:hover {
//     &:after {
//       width: 100%;
//     }
//   }
// }
//     }
//     .nav-center {
//       display: grid;
//       grid-template-columns: auto 1fr auto;
//       align-items: center;
//     }
//     .nav-toggle {
//       display: none;
//     }
// .btn {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-weight: 400;
//   position: relative;
//   transition: all 0.3s ease-out 0s;
//   z-index: 1;
//   padding: 0.4rem 1.4rem;
//   background-color: #452b65;
//   border: 1px solid #623686;
//   svg {
//     font-size: 1.8rem;
//     &:nth-child(1) {
//       margin-right: 8px;
//     }
//   }
//   &:hover {
//     background-color: #603381;
//     transform: translateY(-2px);
//   }
// }
//   }
// `;
