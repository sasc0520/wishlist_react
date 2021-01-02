import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import styled from "styled-components";
import image from "../../imgs/blackpearls.PNG";
import GlobalFonts from '../../fonts/fonts';

const StyledDisplay = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 40px;
    img {
        width: 100%;
    }
    h2 {
        font-family: 'Oswald Regular';
    }
    h3 {
        font-family: 'Montserrat Regular';
    }
    @media (max-width: 768px) {
    max-width: none;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
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
                        <img src={image} />
                        <h2>
                            {item.name}
                        </h2>
                        <h3>
                            {item.price} ,-
                        </h3>
                        <a href={item.buttonlink}>Find den her</a>
                    </article>
                </Fragment>
             ))}
            <GlobalFonts />
        </StyledDisplay>
    );
}

export default DataFetching;