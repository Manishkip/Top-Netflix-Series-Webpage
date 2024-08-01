import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';

const App=() =>(
    <>
    <h1 className="heading_style"> List Of Top Ten Netflix Series In 2024</h1>
   
    {Sdata.map( (val, index) => {
        console.log(index);
       return(
    <Card 
    key={val.id}
    imgsrc={val.imgsrc}
    sname={val.sname}
    title={val.title}
    link={val.link}
    />
       )
    })};
     </>
    
);

export default App;

    