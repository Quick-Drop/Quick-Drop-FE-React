import React from 'react';
import ReactDOM from 'react-dom/client';

function Home() {
  return (
    <div className="onboarding">
      <div className="splash-screen">
        <h1>Quick Drop</h1>
        {/* You can add a logo or image here */}
      </div>
      <div className="onboarding-content">
        <p>
          Intro & onboarding part for a guide of this application "quick drop"
        </p>
        {/* Additional onboarding content */}
      </div>
      <div className="onboarding-actions">
        <button>Sign Up</button>
        <button>Sign In</button>
        {/* You can replace these buttons with React Router Links or other navigation if needed */}
      </div>
    </div>
  );
}

export default Home;
