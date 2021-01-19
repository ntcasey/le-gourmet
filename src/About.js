import React from "react";

export default function About() {
  return (
    <div className="about-layout">
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Le Casey's Gourmet!</strong>
          <br />
          <br />
          We started operations in 2020. Our store has served some of most
          famous restaurant like <em>Gusteau's and la ratatouille</em>. We
          guarantee fresh produce. Come shop using app and we'll deliver the
          products right to your home. <br />
          <em>We use Stripe to process your payment.</em>
        </p>
      </div>
      <img
        src="cloudinary - restaurant - image"
        height="350"
        width="431"
        className="rounded"
        alt=""
      />
    </div>
  );
}
