import React from 'react';

function ChangeCountButton({ variant, update }) {
    return (
        <button
            onClick={ update }
        >{variant}
        </button>
    );

}

export default ChangeCountButton;