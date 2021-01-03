import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import styled from "styled-components";
import GlobalFonts from '../../fonts/fonts';

const StyledDisplay = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 40px;
    img {
        width: 100%;
        height: 70%;
    }
    .content {
        display: flex;
        flex-direction: column;
    }
    h2 {
        font-family: 'Oswald Regular';
        text-align: left;
        margin: 1rem 0rem 1rem;
    }
    h3 {
        font-family: 'Montserrat Regular';
        text-align: right;
        margin: 0rem 0rem 1rem;
    }
    a {
        background-color: #f77225;
        padding: 1rem 3rem;
        text-decoration: none;
        font-family: 'Montserrat Regular';
        font-weight: 400;
        color: #ffffff;
    }
    a:hover {
        background-color: #ffc760;
        transition: 0.5s;        
    }
    @media (max-width: 768px) {
    max-width: none;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    .content {
        display: flex;
        a {
            width: 150px;
        }
    }
    }

`;

function DataFetching() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "13Dyq8_Ehke2hiVZXub4PbzDFMO9Qbj_smVXwKYwXRZ8",
            simpleSheet: true
          })
            .then((items) => setItems(items))
            .catch((err) => console.warn(err));
        }, []);

    return(
        <StyledDisplay>
             {items.map((item, i) => (
                    <Fragment key={i}>
                    <article>
                        <img  src={`../imgs/${item.product_img}.PNG`} />
                        <div className="content">
                            <h2>
                                {item.name}
                            </h2>
                            <h3>
                                {item.price}
                            </h3>
                            <a href={item.buttonlink}>Find den her</a>
                        </div>
                    </article>
                </Fragment>
             ))}
            <GlobalFonts />
        </StyledDisplay>
    );
}

export default DataFetching;