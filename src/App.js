import { useState } from "react"
const App =() => {
  const [count, setCount] = useState(0);

  const addNumber = () => {
    setCount(count + 1);
  };

    return (
    <>
   <div className="title">counter</div>
   <div className="number">{count}</div>
   <br />
   <div className="add">
    <button onClick={addNumber}>Add</button>
   </div>
   {count > 4 && <>good job </> }
    </>
    );
};
export default App;