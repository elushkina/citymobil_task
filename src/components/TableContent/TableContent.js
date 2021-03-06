import React, { useEffect, useState } from 'react'
import './TableContent.css'
import { SearchForm } from './SearchForm/SearchForm'
import { TableFooter } from './TableFooter/TableFooter'
import { Table } from './Table/Table'
import { fetchCars } from './fetchApi'
import { Preloader } from "../Preloader/Preloader";

export const TableContent = () => {
    let [defaultCars, setDefaultCars] = useState([])
    let [cars, setCars] = useState([])
    let [tariffs, setTariffs] = useState([])
    let [sortDirection, setSortDirection] = useState('')
    let [searchText, setSearchText] = useState('')
    let [selectedCar, setSelectedCar] = useState({title: '', index: 0})
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchCars()
            .then(data => {
                const { cars, tariffs_list } = data;

                setDefaultCars(cars)
                setCars(cars)
                setTariffs(tariffs_list)
            })
            .finally(() => setIsLoading(false))
    }, [])

    function sortByColumn() {
        setSortDirection(prev => prev === 'down' ? 'up' : 'down')

        cars.sort((a,b) => {
            if (`${a.mark.toLowerCase()} ${a.model.toLowerCase()}` > `${b.mark.toLowerCase()} ${b.model.toLowerCase()}`) {
                return sortDirection === 'down' ? -1 : 1;
            }
            if (`${b.mark.toLowerCase()} ${b.model.toLowerCase()}` > `${a.mark.toLowerCase()} ${a.model.toLowerCase()}`) {
                return sortDirection === 'down' ? 1 : -1;
            }

            return 0;
        })

        setCars([...cars])
    }

    function filterBySearchText(e) {
        e.preventDefault()
        const filteredCars = defaultCars.filter(car => `${car.mark} ${car.model}`.toLowerCase().indexOf(searchText.trim()) !== -1)

        setSortDirection('')
        setCars([...filteredCars])
    }

    function selectCar(car) {
        setSelectedCar(car)
    }

    if (isLoading) return <Preloader />

    if (cars.length === 0 && tariffs.length === 0) return <div className="content__error">???? ?????????????? ???????????????? ???????????? ??????????!</div>

    return (
        <main className="content">
            <SearchForm searchText={searchText} setSearchText={setSearchText} filterBySearchText={filterBySearchText} />
            <Table cars={cars} tariffs={tariffs} sortByColumn={sortByColumn}
                   sortDirection={sortDirection} selectCar={selectCar}
                   selectedCar={selectedCar}/>
            <TableFooter selectedCar={selectedCar} tariffs={tariffs}/>
        </main>
    )
}