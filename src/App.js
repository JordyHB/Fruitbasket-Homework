import React, {useState} from 'react';
import './App.css';
import FruitProduct from "./Components/FruitProduct";


function App() {

    const [allCounts, setCount] = useState({
        product1: 3,
        product2: 0,
        product3: 0,
        product4: 0,
    })

    function updateCount(productCount, product) {
        console.log(productCount)
        allCounts[product].setState(1)


    }


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitProduct
                productName="Aardbeien"
                setState={ setCount }
                count={ allCounts.product1}

            />
            <FruitProduct
                productName="Bananen"
            />
        {/*    <button*/}
        {/*        onClick={}>Reset</button>*/}
        </>
    );
}

export default App;
