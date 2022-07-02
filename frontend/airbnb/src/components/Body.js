import React from 'react';
import Card from './Card';
function Body() {

    
    return ( 
        <div className='cards'>
            <Card title='lebanon' rate='3.5' desc='95 Kilometers away' date='AUG 22-25' price='250'/>
            <Card title='Brazil' rate='3' desc='195 Kilometers away' date='AUG 22-25' price='250'/>
            <Card title='Germany' rate='4.5' desc='275 Kilometers away' date='AUG 22-25' price='250'/>
            <Card title='Spain' rate='5' desc='97 Kilometers away' date='AUG 2-5' price='250'/>
            <Card title='UAE' rate='2.5' desc='100 Kilometers away' date='AUG 25-28' price='250'/>
            <Card title='Jordan' rate='4.5' desc='175 Kilometers away' date='AUG 20-23' price='250'/>
        </div>
     );
}

export default Body;