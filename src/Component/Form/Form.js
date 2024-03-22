import React, {useState} from 'react'
import emailjs from '@emailjs/browser'


import './Form.css'
const Form = () => {

 const [error, seterror] = useState("")

  const initialFormData = {
    from_name: '',
    from_email: '',
    from_subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  


  const handleSubmit = (e) => {
    e.preventDefault();
   if(formData.from_email == "" || formData.message == ""){
      seterror(true)
   }
   else{
    seterror(false)
   
    console.log('Form data:', formData);

    emailjs.sendForm("service_mjf1frb","template_6aa2x2f", "form", process.env.REACT_APP_EMAILJS_API_KEY)
    setFormData(initialFormData)
   }    
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
        <input type="text" name='from_name' required value={formData.name}    onChange={handleChange}></input>
        <label>Email</label>
        <input type="email" name='from_email' required value={formData.email}    onChange={handleChange}></input>
        <label>Subject</label>
        <input type="text" name='from_subject' value={formData.subject}    onChange={handleChange}></input>
        <label>Message</label>
        <textarea rows="6" name='message' value={formData.message} placeholder="Type your message here"    onChange={handleChange} />
       
       
        {error && <p className="error-message">Email or message cannot be empty</p>}
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </form>

    
        
     
    </div>
  )
}

export default Form