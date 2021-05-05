import React from "react";
import './landing-page.styles.css';

import CustomButton from '../../components/custom-button/custom-button.component';

const LandingPage = () => (
  <div>
    <header>
      <h1>Welcome to PenPal!</h1>
    </header>
    <main>
      <p>
        PenPal! is your hub for connecting to penpals. Whether you prefer a
        Traditional penpal experience or completely Online, we're the place for
        you! Register now to begin matching with penpals and get writing, or
        Sign In if you're an existing user.
      </p>
      <p>Letters await!</p>
      <form action="/signin">
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </main>
  </div>
);

export default LandingPage;
