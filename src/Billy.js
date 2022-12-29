import { useState, useRef } from "react";
import Box from '@mui/material/Box';

function Billy() {
   const input = useRef();
   const [newListItem, setNewListItem] = useState([]);
 
   var addToList = e => {
     e.preventDefault();
     setNewListItem([...newListItem, input.current.value]);
   };

  return (
    <>
     <div className="left">
         <input ref={input} type="text" minlength="7" maxlength="15" size="15" pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" placeholder="eg. 192.168.1.1/32"/>
         <button type="button" onClick={addToList}>Submit</button>
         </div>
         <Box 
            className="centre"
            border={1}
            borderColor="grey"      
            width={220}
            height={100}
         >
            <ul>
               {newListItem.map((item, b) => (
                  <li key={b}>{item}</li>
               ))}
            </ul>
         </Box>
    </>
   );
}
export default Billy;   