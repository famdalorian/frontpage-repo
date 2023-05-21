import React, { useState } from 'react';


const ProfileForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      bio: '',
      profilePicture: null,
    });
  
    const handleInputChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleFileChange = (event) => {
      setFormData({
        ...formData,
        profilePicture: event.target.files[0],
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // TODO: Implement form submission logic
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
  
        <label>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleInputChange} />
        </label>
  
        <label>
          Profile Picture:
          <input type="file" name="profilePicture" onChange={handleFileChange} />
        </label>
  
        <button type="submit">Submit</button>
      </form>
    );
  };
  export default ProfileForm;
