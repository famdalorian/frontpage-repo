import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import TimeTable from '../components/TimeTable';
import '../styles/combatSports.css';

const CombatSports = () => {
  return (
    <div className="combat-sports-container">
      <h1 className="combat-sports-title">Combat Sports</h1>

      <div className="combat-sports-options">
        <div className="combat-sports-option">
          <h2 className="combat-sports-option-title">Classes</h2>
          <p className="combat-sports-option-description">
            Discover our range of combat classes and train with expert instructors.
          </p>
          <Link className="combat-sports-option-link" to="/classes">
            Learn More
          </Link>
        </div>

        <div className="combat-sports-option">
          <h2 className="combat-sports-option-title">Timetable</h2>
          <p className="combat-sports-option-description">
            Check out our weekly timetable to find the perfect training schedule for you.
          </p>
          <Link className="combat-sports-option-link" to="/timetable">
            View Timetable
          </Link>
        </div>

        <div className="combat-sports-option">
          <h2 className="combat-sports-option-title">Coaches & Location</h2>
          <p className="combat-sports-option-description">
            Meet our experienced coaches and find out more about our gym's location.
          </p>
          <Link className="combat-sports-option-link" to="/coaches-location">
            Discover More
          </Link>
        </div>
        <div className="combat-sports-option">
          <h2 className="combat-sports-option-title">Memberships</h2>
          <p className="combat-sports-option-description">
explore our membership packages, for IRL and URL          </p>
          <Link className="combat-sports-option-link" to="/memberships">
            Discover More
          </Link>
        </div>
      </div>

      <div className="combat-sports-media">
        <h2 className="combat-sports-media-title">More Media</h2>
        <p className="combat-sports-media-description">
          Explore our gym and teams through photos and videos.
        </p>
        <Link className="combat-sports-media-link" to="/media">
          See More
        </Link>
      </div>

      <Routes>
        <Route path="/timetable" element={<TimeTable />} />
      </Routes>
    </div>
  );
};

export default CombatSports;
