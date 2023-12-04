import React from 'react';
import './FruitElement.css'



function FruitElement ({nameFruit}){
const [amountStrawB, setAmountStrawB] = React.useState(0);



return(
        <>
            <section className='productElement'>
                <img src={strawberry} alt='aardbeitje'/>
            <h3>{nameFruit}</h3>

            <button type='button' disabled={amountStrawB === 0} onClick={()=>  setAmountStrawB(amountStrawB - 1)}>-</button>
                {amountStrawB}

            <button type='button' onClick={()=> setAmountStrawB(amountStrawB + 1)}>+</button>

            </section>
        </>    )
}

export default FruitElement