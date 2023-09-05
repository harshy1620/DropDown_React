// importing usestate hook
import { useState } from 'react';
import './index.css';


// functional component
function Dropdown(){
    const listitem = ["Yes","Probably Not"];
// useState hooks for storing and updating the state
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(null);

 // clickhandler to perform a task after click on list items
    const onClickHandler = (e) => {
        setValue(e.target.textContent);
        setIsOpen(false);
    }
// event for hovering over button
    const onMouseHover = () => {
        setIsOpen(true);
    }
    return (
        <div className="container">
            <h1 className="heading">Should you use a dropdown?</h1>
            <button className="drop-btn" onMouseEnter={onMouseHover}>{value?value:'Select'}</button>
            <div className="drop-content" style={{ display: `${isOpen ? 'block' : 'none'}`}}>
                {listitem.map((items,index)=>{
                    return ( <li key={index}  onClick={onClickHandler}>{items}</li>)
                })}
            </div>
        </div>
    );
  }
  
  export default Dropdown;
  