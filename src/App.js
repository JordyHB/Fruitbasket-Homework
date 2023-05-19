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
    const initialCounts = fruitProducts.map( (productName) => {
        return { [productName]: 10 }
    })
    // defines the state
    const [allCounts, setCount] = useState(initialCounts)



    function addToCount(index, product) {

        console.log('ran')
        console.log(index, product)
        // states aren't mutable so a new object is made with the changes to the relevant product
        setCount((prevState)  => {
            const newState = {...prevState}
            newState[index][product] = newState[index][product] + 1
            return newState
        })

    }

    function subtractOfCount(index, product) {
        console.log('ran')
        console.log(index, product)
        console.log(allCounts)
        // states aren't mutable so a new object is made with the changes to the relevant product
        setCount((prevState)  => {
            const newState = {...prevState}
            // subtracts 1 from the count of the relevant product by using the index and the product name
            if (newState[index][product] >= 0) {
                newState[index][product] = newState[index][product] - 1
                return newState
            }
            // returns the previous state if the count is already 0 to prevent negative numbers
            return newState
        })
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            {fruitProducts.map( (productName, index) =>
            <FruitProduct
                // key for React itself
                key={index}
                index={index}
                productName={productName}
                add={ addToCount }
                currentCount={allCounts[index][productName]}
                subtract={ subtractOfCount }
            />
            )}
        </>
    );
}

export default App;
