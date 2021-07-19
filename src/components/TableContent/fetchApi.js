export const fetchCars = () => {
    return fetch('https://city-mobil.ru/api/cars')
        .then(response => response.json())
}