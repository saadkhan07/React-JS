import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Logos = () => {
  const styles = {
    tag: "a",
    color: "none",
    className: "m-1",
    size: "sm",
  };
  const icons=['facebook-f','twitter','google','github']
  return (
    <div
      className="d-flex justify-content-between mx-auto"
      style={{ width: "40%" }}
    >
        {icons.map((icon)=>{
           return( <MDBBtn
            tag={styles.tag}
            color={styles.color}
            className={styles.className}
            style={{ color: "#1266f1" }}
            key={Math.random()}
          >
            <MDBIcon fab icon={icon} size={styles.size} />
          </MDBBtn>
           )

        })} 
    </div>
  );
};

export default Logos;
