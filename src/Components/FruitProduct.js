import ChangeCountButton from "./ChangeCountButton";


function FruitProduct({ productName, add, subtract, currentCount}) {

    return (
        <article>
            <img src="" alt=""/>
            <span>{ productName }</span>
            <ChangeCountButton
                variant="-"
                update={ () => subtract(productName) }


            />
            <span> { currentCount }</span>
            <ChangeCountButton
                variant="+"
                update={ () => add(productName)}
            />

        </article>
    );
}

export default FruitProduct;