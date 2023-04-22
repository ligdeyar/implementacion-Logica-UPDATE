import React from 'react';

import {
      useState
      , useEffect
   }from "react";



import {
   ColorType 
   ,getColors
   ,addColor
   ,deleteColor
   ,updateColor
   
   } from '../services/ColorServices';


function Color(){
   const [colors, setColors] = useState<ColorType[]>([]);
   const [color, setColor] = useState<string>("");
   const [editgColor, setEditColor] = useState<ColorType | null>(null);


   const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
   }
   
   const addColorEvent = async () => {
      const newColor = await addColor(color);
      setColors([...colors, newColor]);
      setColor("");
   }

   const deleteColorEvent = async (id: number) => {
      await deleteColor(id);
      setColors(colors.filter((color) => color.id !== id));
  }

  const editColor = (color: ColorType) => {
   setEditColor(color);
   setColor(color.descripcion);
 };

 const updateColorEvent = async (id: number, updatedColor: string) => {
   await updateColor(id, updatedColor);
   const updatedColors = colors.map(color => {
      if (color.id == id) {
         return { ...color, descripcion: updatedColor };
      }
      return color;
   });
   setColors(updatedColors);
   setEditColor(null);
}



   useEffect(() =>{
      async function fecthData(){
         const x = await getColors();
         setColors(x);
      };
      fecthData();
   }, []);
      



 return (
    <div>
      <h1>Color Management</h1> 

         <span>Color: </span>
         <input
            type="text"
            placeholder= "Type your new color"
            value={color}
            onChange={changeInput}
         />
         <button
            disabled={color.length == 0 }
            onClick={addColorEvent}
         > 
         ADD 
         </button>

         <ul>
            { colors.map((color) =>(
               <li key={color.id}>
                  { color.descripcion}
                  <button
                     onClick={() => deleteColorEvent(color.id)}
                  > REMOVE 
                  </button>
                  <button 
                     onClick={() => editColor(color)}
                  >
                     EDIT
                  </button>
                  <button 
                     onClick={() => updateColorEvent(color.id, color.descripcion)}
                  >
                     UPDATE
                  </button>

               </li>
            ))}
         </ul>
       

 
    </div>
 )
}

export default Color;
