import React from 'react'
import './Table.css'


export const Table = ({cars, tariffs, sortByColumn, sortDirection, selectCar}) => {

    return (
        <table className="table">
            <thead>
            <tr>
                <td onClick={sortByColumn}>
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
                                tariffs.map(t => (
                                    <td key={t}
                                        onClick={() => car.tariffs[t] && selectCar(`${fullCarName} ${car.tariffs[t].year}`)}>{car.tariffs[t] ? car.tariffs[t].year : '-'}</td>
                                ))
                            }
                        </tr>
                    )
                })
            }
                </tbody>
                </table>
                )
                }