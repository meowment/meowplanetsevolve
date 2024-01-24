import React from "react";

const Events: React.FC = () => {
  return (
    <div className="my-20 flex flex-col items-center max-w-sm w-full">
      <h2
        className="font-bold text-3xl leading-none !bg-clip-text text-transparent"
        style={{
          background:
            "linear-gradient(73.59deg, #FFB6C1 42.64%, #FF69B4 54%, #FF1493 77.46%)",
        }}
      >
        MEOW SOLDIERS!!
        </h2>
      <div className="space-y-3 mt-6 w-full">
        <p>KEEP GOING FOR MEOW PLANETS SURVIVE!!</p>
      </div>
    </div>
  );
};

export default Events;
