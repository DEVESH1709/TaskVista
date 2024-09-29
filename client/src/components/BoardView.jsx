// import React from "react";
// import TaskCard from "./TaskCard";

// const BoardView = ({ tasks }) => {
//   return (
//     <div className='w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10'>
//       {tasks.map((task, index) => (
//         <TaskCard task={task} key={index} />
//       ))}
//     </div>
//   );
// };

// export default BoardView;

import React from "react";
import TaskCard from "./TaskCard";

const BoardView = ({ tasks }) => {
  console.log("Tasks:", tasks); // Debugging line

  if (!Array.isArray(tasks)) {
    return <div>No tasks available</div>; // Handle case when tasks is not an array
  }

  return (
    <div className='w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10'>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} /> // Use a unique id if possible
      ))}
    </div>
  );
};

export default BoardView;


