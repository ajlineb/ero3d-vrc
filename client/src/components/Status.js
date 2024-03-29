import React, { useState, useEffect } from "react";

export default function Status() {
  const precent = 10; //was going to be used for the status
  //when updating the completion info use "0 of 20 complete" or "Commission complete!"
  return (
    <div className="m-auto pt-2">
      <p className="pb-2 text-center font-black">Current Commission Progress</p>
      <div className="progress-bar text-center text-xs pt-1">
        20 of 20 complete
        {/* Bug/Error Fix Stage || 0 of 20 complete || Taking Break! (*day* starting back 00/00 || COMPLETE!  */}
      </div>
    </div>
  );
}
