import React from "react";
import styled from "styled-components";

const ItemList = styled.div`
display: flex;
align-items: center;

button {
    background: transparent;
    border: none;
    margin: 0.5rem;

    color: #f77225;
    font-size: 1rem;
}

button:hover {
    color: #ffc760;
    transition: 0.5s;
}

@media (max-width: 768px) {
    justify-content: flex-end;
    position: fixed; 
    width: 100%;
    align-items: initial;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
        nav {
            display: flex;
            position: absolute;
            right: 0v;
            height: 100vh;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            background-color: #f77225;
        }

        button {
            color: #ffffff;
            margin: 1rem 3rem 1rem 2rem;
        }
}
`;


const NavItems = ({open}) => {
  return (
      <ItemList open={open}>
        <nav>
            <button>Kjoler</button>
            <button>Toppe</button>
            <button>Underdele</button>
            <button>Sko</button>
            <button>Accessories</button>
            <button>Selvpleje</button>
        </nav>
      </ItemList>
  )
}

export default NavItems;
