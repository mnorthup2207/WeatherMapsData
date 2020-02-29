import API from '../../utils/RandomAPI';

const Coordinates = () => {

    const num = 34;
    const latitude_longitude = [];
    const finalCoordinates = [];
    const searchRandomLatLong = () => {
        API.search(num)
        .then(res => {
            const coordinates = res.data.data;
            const getRandomInt = () => Math.floor(Math.random() * 2);
            const minusPlus = ['-', ''];
            coordinates.map(num => latitude_longitude.push(`${minusPlus[getRandomInt()]}${num}` / 1000));
            const randomIndex = () => Math.floor(Math.random() * 200)
            const randMultiplyer = () => Math.floor(Math.random() * randomIndex())
            latitude_longitude.sort((a, b) => finalCoordinates.push({
                [randomIndex()]: {
                    latitude: a,
                    longitude: b + randMultiplyer()
                }
            })); 
        })
        .catch(err => console.log(err));
    };
    searchRandomLatLong();
    console.log(finalCoordinates);
};

export default Coordinates;