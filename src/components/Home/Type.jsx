import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <Typewriter
        options={{
          strings: [
            "Headstones: Timeless tributes crafted with care.",
            "Monuments: Grand designs that honor legacies.",
            "Accessories: Vases, plaques, and more to complete the look."
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 10,
        }}
      />
      
      {/* Additional Paragraph */}
      {/* <p style={{ marginTop: "35px", fontSize: "1.2rem", color: "#623e2a" }}>
      We take pride in crafting timeless tributes that stand as a testament to love and remembrance.  
        Each piece is meticulously designed to honor cherished memories,  
        ensuring that your loved ones' legacies live on with elegance and dignity.  
      </p> */}
    </div>
  );
};

export default Type;
