import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
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
      )
}

export default Type