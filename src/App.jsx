// import React, { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState("");

//   function handlClick(e) {
//     setValue(e.target.value);
//   }

//   return (
//     <div>
//       <h3>{value}</h3>
//       <input
//         onChange={handlClick}
//         value={value}
//         type="text"
//         placeholder="type..."
//       />
//       <br />
//       <button onClick={() => setValue("")}>Click</button>
//     </div>
//   );
// };

// export default App;

// ===================================================

// ===================== settimeout===================
// ===================== settimeout===================

// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   function handler() {
//     setTimeout(() => setCount((cv) => cv + 1), 3000);
//   }
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={handler}>increment</button>
//     </div>
//   );
// };

// export default App;
// ========================= end======================
// ========================= end======================

// ======================  user Remove ======================
import UserLists from "./Components/UserLists";
const App = () => {
  return <UserLists />;
};

export default App;

// =======================   Toogle alert============================

// import React, { useState } from "react";

// const App = () => {
//   const [aler, setAlert] = useState(true);

//   return (
//     <div>
//       {aler ? <Message /> : null}
//       <button onClick={() => setAlert(!aler)}>Message</button>
//     </div>
//   );
// };

// function Message() {
//   return <h2>Message...</h2>;
// }

// export default App;

// ================================== useEffect =====================================
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const [vale, setVale] = useState("");

//   function handl() {
//     setCount(count + 1);
//   }
//   useEffect(() => {
//     document.title = vale;
//     console.log(useEffect);
//   }, [vale]);

//   return (
//     <div>
//       <h2>{vale}</h2>
//       <h2>{count}</h2>
//       <input
//         value={vale}
//         type="text"
//         placeholder="type..."
//         onChange={(e) => setVale(e.target.value)}
//       />
//       <br />
//       <button onClick={handl}>Click</button>
//     </div>
//   );
// };

// export default App;
