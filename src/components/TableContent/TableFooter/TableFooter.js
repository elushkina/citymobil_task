import React from 'react'
import "./TableFooter.css"

export const TableFooter = ({selectedCar, tariffs}) => {
    return (
        <div className='table-footer'>{selectedCar.title
            ? `Выбран автомобиль ${selectedCar.title} года выпуска, тариф - ${tariffs[selectedCar.index]}`
            : "Автомобиль не выбран"}
        </div>
    )
}