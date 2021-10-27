import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import './searchMap.scss';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
};
const mapstyle = { width: '800px', height: '500px' };

const SearchMap = () => (
  <div className="search">
    <h2 className="search-title">Trouve ton SkatePark</h2>

    <form className="search-form">
      <label className="search-label">
        Ville :
        <input className="search-input" type="text" name="town" required />
      </label>
      <label className="search-label">
        Catégorie :
        <select className="search-selected">
          <option selected value="all">Tout</option>
          <option value="skatepark">SkatePark</option>
          <option value="pumptrack">PumpTrack</option>
          <option value="street">Street</option>
        </select>
      </label>
      <label className="search-label">
        Rayon :
        <select className="search-selected">
          <option selected value="all">10 km</option>
          <option value="skatepark">30 km</option>
          <option value="pumptrack">50 km</option>
          <option value="street">+ de 50km</option>
        </select>
      </label>
      <button className="search-button" type="submit"> Rechercher </button>
    </form>

    <div className="search-result">

      <div className="search-list">
        <article className="search-list-item">
          <img className="search-list-image" src=" " alt="" />
          <p className="search-list-description">description du skatepark</p>
          <button className="search-list-button" type="submit">Voir</button>
        </article>
        <article className="search-list-item">
          <img className="search-list-image" src=" " alt="" />
          <p className="search-list-description">description du skatepark</p>
          <button className="search-list-button" type="submit">Voir</button>
        </article>
        <article className="search-list-item">
          <img className="search-list-image" src=" " alt="" />
          <p className="search-list-description">description du skatepark</p>
          <button className="search-list-button" type="submit">Voir</button>
        </article>
      </div>
      <div className="search-map">

      </div>
    </div>

  </div>
);

// TODO affichage de la map a faire
{/* <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAglZjyBm532ApJYhxUDEVnmIo0Zd_JsjY' }}
        defaultCenter={location}
        defaultZoom={8}
        style={mapstyle}
      >
        {/* <LocationPin lat={37.42216} lng={-122.08427} text={"test ici"} /> */}
// </GoogleMapReact> */}
export default SearchMap;
