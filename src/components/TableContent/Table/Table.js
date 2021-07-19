import React from 'react'
import './Table.css'


export const Table = ({cars, tariffs, sortByColumn, sortDirection, selectCar, selectedCar}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <td onClick={sortByColumn} className="table__sort-ceil">
                        Марка и модель
                        {
                            sortDirection !== '' &&
                            <img src="sortArrow.svg" alt="sort arrow"
                                 className={`table__arrow${sortDirection === 'up' ? ' table__arrow--rotated' : ''}`}/>
                        }
                    </td>
                    {
                        tariffs.map(t => (
                            <td key={t}>{t}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
            {
                cars.map(car => {
                    const fullCarName = `${car.mark} ${car.model}`
                    return (
                        <tr key={fullCarName}>
                            <td>{fullCarName}</td>
                            {
                                tariffs.map((t, index) => {
                                    const isActive = selectedCar.title === `${fullCarName} ${car.tariffs[t]?.year}` && selectedCar.index === index
                                    return (
                                        <td key={t}
                                            className={`${car.tariffs[t]?.year ? "table__item" : ""}${isActive ? " table__item--active" : ""}`}
                                            onClick={() => car.tariffs[t] && selectCar({title: `${fullCarName} ${car.tariffs[t].year}`, index})}>
                                            {car.tariffs[t] ? car.tariffs[t].year : '-'}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}