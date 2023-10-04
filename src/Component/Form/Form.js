import React, {useState} from 'react'
import './Form.css'
const Form = () => {
  const [formData, setFormData] = useState({
    name: '', email: '',
    subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form data:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,  [name]: value,
    });
  };

  return (
    <div className="form">
        


      <form className='form'>
        <label>Your Name</label>
        <input type="text" name='name' required value={formData.name}    onChange={handleChange}></input>
        <label>Email</label>
        <input type="email" name='email' required value={formData.email}    onChange={handleChange}></input>
        <label>Subject</label>
        <input type="text" name='subject' value={formData.subject}    onChange={handleChange}></input>
        <label>Message</label>
        <textarea rows="6" name='message' value={formData.message} placeholder="Type your message here"    onChange={handleChange} />
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </form>

    
        
     
    </div>
  )
}

export default Form