import './ListLocations.css';

const ListLocations = ({ locations }) => {
    return (
        <ul>
            {locations.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
    );
};

export default ListLocations;
