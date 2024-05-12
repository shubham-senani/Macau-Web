import "./Home.css";
import Footer from "./Footer";
import logo from '../assets/play_store_512.png';

function Home() {
  return (
    <div className="container">
      <div>
        <a href="">
          <img
            src={logo}
            className="logo"
            alt="macau logo"
          />
        </a>
      </div>
      <h1>Macau App</h1>
      <div className="subtitle">
        <p>
          Find and Rent Your Perfect Room, Hostel, or PG with Comprehensive
          Listings, Real-Time Availability, and Personalized Recommendations
        </p>
      </div>
      <div className="card">
        <a href= '/macau_app/app-release.apk' download>
          Download apk
        </a>
        <p className="read-the-docs">
          Click on the above link to download the apk file.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
