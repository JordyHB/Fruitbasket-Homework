import ChangeCountButton from "./ChangeCountButton";

function FruitProduct({ productName, setState, count }) {

    function handleUpdate() {
        console.log(count)
        return setState(5)
    }

    return (
        <div>
            <img src="" alt=""/>
            <span>{ productName }</span>
            <ChangeCountButton
                variant="-"
                update={ () => { return setState( count + 1) }}


            />
            <span> { count }</span>
            <ChangeCountButton
                variant="+"

            />

        </div>
    );
}

export default FruitProduct;