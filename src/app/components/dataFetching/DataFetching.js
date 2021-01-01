import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import image from "../../imgs/blackpearls.PNG";

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
        <div>
             {items.map((item, i) => (
                <Fragment key={i}>
                    <article>
                        <img src={image} />
                        <h2>
                            {item.name}
                        </h2>
                        <h2>
                            {item.price}
                        </h2>
                        <a href={item.buttonlink}>Find den her</a>
                    </article>
                </Fragment>
             ))}
        </div>
    );
}

export default DataFetching;