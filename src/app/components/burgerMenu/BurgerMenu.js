import React, {useState} from "react";
import NavItems from "../navItems/NavItems";
import styled from "styled-components";

const StyledBurger = styled.div`
@media (max-width: 768px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    overflow-x: hidden;
    flex-direction: column;
    width: 35px;
    height: 35px;
    padding: 0.5rem 0rem 0rem 1rem;
    z-index: 10;
        div {
            width: 30px;
            height: 4px;
            background-color: ${({open}) => open ? '#ffffff' : '#f77225'};
            border-radius: 50px;
            transform-origin: -1px;
            transition: all 0.3s linear;
        
        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
          }
    
          &:nth-child(2) {
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 1};
          }
    
          &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
          }
        }
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <NavItems open={open}/>
        </>
    )
}

export default Burger;
