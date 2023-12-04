import './App.css'
import React, {useState} from 'react';
import strawberry from './assets/strawberry.png'

import banana from './assets/_bananaq.png'
import apple from './assets/apple.png'
import kiwi from './assets/kiwi.gif'



function App() {
    const [amountStrawB, setAmountStrawB] = useState(0);
    const [amountBana, setAmountBana] = useState(0);
    const [amountApple, setAmountApple] = useState(0);
    const [amountKiwi, setAmountKiwi] = useState(0);

    const resetAllAmounts = () => {
        setAmountStrawB(0);
        setAmountBana(0);
        setAmountApple(0);
        setAmountKiwi(0);
    };

    const [formInput, setFormInput] = useState({
        voornaam: '',
        achternaam: '',
        leeftijd: 0,
        bezorgfrequentie: 'Elke week',
        bezorgtijdstip: 'Overdag',
        opmerking: '',

    });

    function logAllInputData () {
        console.log(...formInput, amountApple, amountKiwi, amountBana, amountStrawB)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <h3>Welk fruit mag er in jóuw mandje?</h3>
            <main>
            {/*//*AARDBEI**/}
            <section className='productElement'>
                <span><img src={strawberry} alt='aardbeitje'/></span>
                <h3>Aardbeien</h3>
                <button type='button' disabled={amountStrawB === 0}
                        onClick={() => setAmountStrawB(amountStrawB - 1)}>-
                </button>
                <p> {amountStrawB} </p>
                <button type='button' onClick={() => setAmountStrawB(amountStrawB + 1)}>+</button>
            </section>

            {/*BANAAN*/}
            <section className='productElement'>
            <span><img src={banana} alt='banaan'/></span>
                <h3>Bananen</h3>
                <button type='button' disabled={amountBana === 0}
                        onClick={() => setAmountBana(amountBana - 1)}>-
                </button>
                <p> {amountBana} </p>
                <button type='button' onClick={() => setAmountBana(amountBana + 1)}>+</button>
            </section>

            {/*APPEL*/}
            <section className='productElement'>
                <span><img src={apple} alt='appel'/></span>
                <h3>Appels</h3>
                <button type='button' disabled={amountApple === 0}
                        onClick={() => setAmountApple(amountApple - 1)}>-
                </button>
                <p> {amountApple} </p>
                <button type='button' onClick={() => setAmountApple(amountApple + 1)}>+</button>
            </section>

            {/*KIWI*/}
            <section className='productElement'>
                <span><img src={kiwi} alt='kiwi'/></span>
                <h3>Kiwi's</h3>
                <button type='button' disabled={amountKiwi === 0}
                        onClick={() => setAmountKiwi(amountKiwi - 1)}>-
                </button>
                <p> {amountKiwi} </p>
                <button type='button' onClick={() => setAmountKiwi(amountKiwi + 1)}>+</button>
            </section>

                <button type='button' onClick={resetAllAmounts}>Reset</button>
            </main>

            <form>
                <label htmlFor='voornaam'>Voornaam:</label>
                 <input
                    type='text'
                    id='voornaam'
                    name='voornaam'
                    value={formInput.voornaam}
                    onChange={handleChange}
                    required
                />
                 <label htmlFor='achternaam'>Achternaam:</label>
                 <input
                    type='text'
                    id='achternaam'
                    name='achternaam'
                    value={formInput.achternaam}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='leeftijd'>Leeftijd:</label>
                   <input
                       type='number'
                       id='leeftijd'
                       name='leeftijd'
                       value={formInput.leeftijd}
                       onChange={handleChange}
                   />

                 <label htmlFor='bezorgfrequentie'>Bezorgfrequentie</label>
                 <select
                     id='bezorgfrequentie'
                     name='bezorgfrequentie'
                     value={formInput.bezorgfrequentie}
                    onChange={handleChange}
                 >
                     <option value='Elke week'>Elke week</option>
                     <option value='Om de week'>Om de week</option>
                    <option value='Maandelijks'>Maandelijks</option>
               </select>

                 <section className='radiofield'>
                     <div>
                         <label htmlFor='bezorgtijdstip1'>Overdag</label>
                         <input
                             type='radio'
                             id='bezorgtijdstip1'
                             name='bezorgtijdstip'
                             value='Overdag'
                             checked={formInput.bezorgtijdstip === 'Overdag'}
                             onChange={handleChange}
                     />
                     </div>
                     <div>
                         <label htmlFor='bezorgtijdstip2'>Savonds</label>
                         <input
                             type='radio'
                             id='bezorgtijdstip2'
                             name='bezorgtijdstip'
                             value='Savonds'
                             checked={formInput.bezorgtijdstip === 'Savonds'}
                             onChange={handleChange}
                         />
                     </div>
                </section>

                         <label htmlFor='opmerking'>Opmerking</label>
                        <input
                             type='text'
                             id='opmerking'
                             name='opmerking'
                             value={formInput.opmerking}
                             onChange={handleChange}
                        />

                    <label>
                    <input
                         type="checkbox"

                         />
                        Ik ga akkoord met de voorwaarden </label>

                 <button type='submit' onSubmit={()=> logAllInputData()}>Verzend</button>
            </form>

        </>
            )
}



export default App
