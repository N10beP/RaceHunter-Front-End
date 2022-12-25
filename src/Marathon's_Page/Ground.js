import React, { useState } from 'react';


export default function Distance(){


 //States for each marathon
 const[asphalt,setasphalt]=useState(0)
 const[mountain,setmountain]=useState(0)
 const[grass,setgrass]=useState(0)
 const[sand,setsand]=useState(0)
 const[multiter,setmultiter]=useState(0)


//Marathon's ground type [Είδος ασφάλτου Μαραθωνίων]
const [GroundTypeData,setGroundTypeData] = useState({asphalt:false,mountain:false,
    grass:false,sand:false,multiter:false})

//Marathon's distance Event Handling
function HandlingGround(event){
    const {name,type,value,checked} = event.target
    setGroundTypeData(GroundData => {
            return{
                ...GroundData ,[name] : type === "checkbox" ? checked : value
            }
    })

}


    return (

        <div>
            <br/> 
            <p>Έδαφος Διαδρομής</p>
            <br/> 
            <input
            type = "checkbox"
            id="Asphalt"
            checked = {GroundTypeData.asphalt}
            onChange={HandlingGround}
            name = "asphalt"
          />
          <label>Άσφαλτος ({asphalt})</label>
          <br/> 
          <input
            type = "checkbox"
            id="Mountain"
            checked = {GroundTypeData.mountain}
            onChange={HandlingGround}
            name = "mountain"
          />
          <label>Βουνό ({mountain})</label> 
           <br/>  
          <input
            type = "checkbox"
            id="Grass"
            checked = {GroundTypeData.grass}
            onChange={HandlingGround}
            name = "grass"
          />
          <label>Γρασίδι ({grass})</label> 
           <br/>  
          <input
            type = "checkbox"
            id="Sand"
            checked = {GroundTypeData.sand}
            onChange={HandlingGround}
            name = "sand"
          />
          <label>Άμμος ({sand})</label> 
           <br/> 
          <input
            type = "checkbox"
            id="Multiterrain"
            checked = {GroundTypeData.multiter}
            onChange={HandlingGround}
            name = "multiter"
          />
          <label>Multi-terrain ({multiter})</label>
        </div>
        
    )
}