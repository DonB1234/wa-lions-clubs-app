import './index.css';

interface Club {
  name: string;
  district: string;
  address: string;
  phone: string;
  est: string;
}

const clubs: Club[] = [
  { name: 'South Perth', district: 'D201', address: '123 Main St', phone: '0412 345 678', est: '1980' },
  { name: 'Fremantle', district: 'D202', address: '456 High St', phone: '0412 987 654', est: '1975' },
];

export default function App() {
  return (
    <div className="app-container">
      <h1 className="title">LIONS CLUBS WA</h1>
      <div className="clubs-list">
        {clubs.map((club, index) => (
          <div key={index} className="club-card">
            <h2>{club.name}</h2>
            <p>District: {club.district}</p>
            <p>Address: {club.address}</p>
            <p>Phone: {club.phone}</p>
            <div className="est-button">{club.est}</div>
          </div>
        ))}
      </div>
      <footer>© Don Barba 2025</footer>
    </div>
  );
}
