import React, {useState} from 'react';
import './App.css';
import FruitProduct from "./Components/FruitProduct";


function App() {

    // an array to allow mapping over all products.
    const fruitProducts = [
        "Aardbeien",
        "Bananen",
        "Appels",
        "Kiwi's"
    ]
    // creates an array of state objects with the initial count of 0 and the product name as key
    const initialCounts = fruitProducts.reduce((previousEntries, fruit) => ({...previousEntries, [fruit]: 0}), {})
    // defines the state
    const [allCounts, setCount] = useState(initialCounts)


    function addToCount(product) {
        // states aren't mutable so a new object is made with the changes to the relevant product
        setCount({...allCounts, [product]: allCounts[product] + 1 })
    }

    function subtractOfCount(product) {
        // states aren't mutable so a new object is made with the changes to the relevant product if state larger than 0
        allCounts[product] <= 0 || setCount( {...allCounts, [product]: allCounts[product] - 1 })
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            {/*maps through the product array creating an element for each array entry*/}
            {fruitProducts.map( (productName, index) =>
            <FruitProduct
                // key for React itself
                key={index}
                productName={productName}
                add={ addToCount }
                currentCount={allCounts[productName]}
                subtract={ subtractOfCount }
            />
            )}

            <button onClick={ () =>  setCount(initialCounts) }>Reset</button>


        </>
    );
}

export default App;
