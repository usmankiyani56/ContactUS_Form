import styles from './Form.module.css';

import Button from './Button';
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { useState } from 'react';
const Form = () => {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [text, SetText] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
      
        SetName(event.target[0].value);
        SetEmail(event.target[1].value);
        SetText(event.target[2].value);
      
        // Clear input fields
        event.target[0].value = '';
        event.target[1].value = '';
        event.target[2].value = '';
      };
      
  return (
    <section className={styles.container}>
       <div className={styles.contact_form}>
       <div className={styles.top_btn}>
     <Button text="VIA SUPPORT CHAT" fontSize="54px" icon={<MdOutlineMessage/>}/>
     <Button text="VIA CALL" fontSize="54px" icon={<IoCall/>}/>
     </div>
     <Button isOutLine={true} text="VIA EMAIL FORM"  icon={<CiMail />}/>
     <form onSubmit= {onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
         
          <div className={styles.submit_btn}>
          <Button text="Submit" />
          </div>
          
          </form>
          <div>{name + " " + email + " " + text}</div>
       </div>
      
       <div className={styles.contact_image}>
        <img src='./images/hero.png' alt='hero image'/>
       </div>
        
    </section>
  )
}

export default Form
