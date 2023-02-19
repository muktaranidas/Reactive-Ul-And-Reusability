import React from "react";

const Stats = ({ count }) => {
  return (
    <div class="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div class="text-2xl font-semibold" id="counter">
        Total Count: {count}
      </div>
    </div>
  );
};

export default Stats;
