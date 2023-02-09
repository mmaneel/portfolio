import conf from '../../data.json'
import { useRef } from 'react'
import './contact_style.scss'
import emailjs from '@emailjs/browser'
import { useState } from 'react'


// TODO: !Important! display a message after sending email


export const Contact = () => {
    const form = useRef()
    const [showMessage200, setShowMessage200] = useState(false)
    const [removeDisplay, setRemoveDisplay] = useState("removeDisplay")
    const [showErrMessage, setShowErrMessage] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")


    const resetInputFields = () => {
        setEmail("")
        setFirstName("")
        setLastName("")
        setMessage("")
        setPhone("")
    }

    const showMessageSent = () => {
        setShowMessage200(true);
        setRemoveDisplay("")
        setTimeout(()=> {
            setShowMessage200(false)
        }, 5000)
        setTimeout(()=> {
            setRemoveDisplay("removeDisplay")
        }, 5600)
    }


    const showErrorMessage = () => {
        setShowErrMessage(true);
        setRemoveDisplay("")
        setTimeout(()=> {
            setShowErrMessage(false)
        }, 5000)
        setTimeout(()=> {
            setRemoveDisplay("removeDisplay")
        }, 5600)
    }

    const sendEmail = (e) => {
        e.preventDefault()

  
            
                    emailjs.sendForm("service_rm46jmj","template_ic10cmn", form.current ,"U6jJ7o7hjDaDG4r4y").then(res => {
                        if(res.status === 200){
                            showMessageSent()
                            resetInputFields()
                        }
                        else{
                            showErrMessage()
                        }
                       
                    }
                    ).catch((err) => {
                        console.log(err)
                        showErrorMessage()
                    })


    }
    return ( 
      <div className="globalContainer">
          <div id='Contact' className="contact">
            <div className="title">
                <label htmlFor="contactTitle">Get in Touch</label>
                <h2>Contact me</h2>
            </div>

            <form ref={form} onSubmit={sendEmail} className="contactInputs">

                <div className="input">
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} name='firstName' id='firstName' type="text" required />
                </div>
                <div className="input">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={(e)=>{setLastName(e.target.value)}} value={lastName} name='lastName' id='lastName' type="text" required />
                </div>
                <div className="input">
                    <label htmlFor="senderEmail">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} name='senderEmail' id='senderEmail' type="text" required />
                </div>

                <div className="input">
                    <label htmlFor="phone">Phone Number</label>
                    <input onChange={(e)=>{setPhone(e.target.value)}} value={phone} name='phone' id='phone' type="tel" />
                </div>
                    
                    
                    
                <div className="textArea">
                    <label htmlFor="message">Message</label>
                    <textarea onChange={(e)=>{setMessage(e.target.value)}} value={message} name="message" id="message"  required></textarea>
                </div>    

                <div className={`message messageSent ${showMessage200? "": "hideMessage"} ${showErrMessage?"removeDisplay":showMessage200?"":removeDisplay}`}>
                    <p>
                        your message is sent
                    </p> 
                    <p>
                        I will gladly read it and respond as soon as possible
                    </p>

                    <p>
                        Thank you
                    </p>
                    
                </div>


                <div className={`message messageSentErr ${showErrMessage? "": "hideMessage"} ${showMessage200?"removeDisplay": showErrMessage? "": removeDisplay }`}>
                    <p>
                        It looks like something is not working 
                    </p> 
                    <p>
                        contact me at <b> <a href={`mailto:${conf.Email}`}>{conf.Email}</a> </b>
                        
                    </p>

                    <p>
                        Sorry about the inconvenient
                    </p>
                    
                </div>
                    

                    <div className="input message">
                      
                            <input type="submit" />
                       
                    </div>

            </form>
        </div>
      </div>
     );
}

