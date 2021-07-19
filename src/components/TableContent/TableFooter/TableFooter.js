import React from 'react'
import "./TableFooter.css"

export const TableFooter = ({selectedCar}) => {
    return (
        <div className='table-footer'>{selectedCar
            ? `Выбран автомобиль ${selectedCar} года выпуска`
            : "Автомобиль не выбран"}
        </div>
    )
}