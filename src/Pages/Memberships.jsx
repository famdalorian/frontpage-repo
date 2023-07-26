import React from 'react';
import "../styles/memberships.css";

const MembershipTier = ({ title, imageUrl, description, price, onClick }) => {
  const handleBuyNowClick = () => {
    window.location.href = onClick; // Redirect the user to the specified URL
  };

  return (
    <div className="membership-tier">
      <img src={imageUrl} alt={title} className="membership-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="price">{price}/month</p>
      <button className="buy-button" onClick={handleBuyNowClick}>
        Buy Now
      </button>
    </div>
  );
};

const Memberships = () => {
  return (
    <div className="memberships-container">
      <MembershipTier
        title="Gold Membership"
        imageUrl="https://media.discordapp.net/attachments/1100705646573265008/1133057524279550003/xxisp_letter_X_xXlogo_for_boxing_class_gold_membership_diecut_s_d3fae689-b3f0-4e09-8f45-31e895708879-removebg-preview.png"
        description="Access to all gym facilities. Unlimited classes and training sessions. Personalized training plans. Complimentary nutritional guidance."
        price="99"
        onClick="https://buy.stripe.com/bIY7tU0DWadl7M46oo" 
      />
      <MembershipTier
        title="Silver Membership"
        imageUrl="https://media.discordapp.net/attachments/1100705646573265008/1133058162145108080/WhatsApp_Image_2023-07-24_at_16.26.46-removebg-preview.png"
        description="Access to all gym facilities. Up to 5 classes and training sessions per week. Standard training plans."
        price="79"
        onClick="https://buy.stripe.com/5kA29A5Yg7194zS289" 
      />
      <MembershipTier
        title="Bronze Membership"
        imageUrl="https://media.discordapp.net/attachments/1100705646573265008/1133058002937712732/xxisp_letter_X_xXlogo_for_boxing_class_bronze_membership_diecut_929b6928-64c9-4d71-a4a4-f661663c62f4-removebg-preview.png"
        description="Access to basic gym facilities. Up to 3 classes and training sessions per week."
        price="49"
        onClick="https://buy.stripe.com/bIY8xYfyQ85daYg002" 

      />
      <MembershipTier
        title="Kids Membership"
        imageUrl="https://media.discordapp.net/attachments/1100705646573265008/1133734072779292702/65.png"
        description="Access to kids' gym and facilities. Supervised training sessions."
        price="59"
        onClick='https://buy.stripe.com/00g9C2euMclt4zS7sv'
      />
      <MembershipTier
        title="Online Membership"
        imageUrl="https://media.discordapp.net/attachments/1100705646573265008/1133733652308709376/27.png"
        description="Access to online training platform. Virtual classes, blogs, nutrition and workouts."
        price="29"
        onClick='https://buy.stripe.com/7sI9C272k5X50jC148'
      />
    </div>
  );
};

export default Memberships;
