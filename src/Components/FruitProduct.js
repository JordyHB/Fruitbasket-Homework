import ChangeCountButton from "./ChangeCountButton";


function FruitProduct({ productName, add, subtract, currentCount, index}) {

    return (
        <div>
            <img src="" alt=""/>
            <span>{ productName }</span>
            <ChangeCountButton
                variant="-"
                update={ () => subtract(index, productName) }


            />
            <span> { currentCount }</span>
            <ChangeCountButton
                variant="+"
                update={ () => add(index, productName)}
            />

        </div>
    );
}

export default FruitProduct;