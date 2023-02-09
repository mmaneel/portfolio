import { useEffect, useState } from 'react';

import './footer_style.scss'
import conf from '../../data.json'


//TODO: change Manel's email to km_mohandouali@esi.dz
//TODO: make footer smaller (half)

export const Footer = () => {
    const [navs, setNavs] = useState(null)
    const [designers, setDesigners] = useState(null)
    const [contacts, setContacts] = useState(null)
    useEffect(()=>{
        setNavs(conf.Navs)
        setDesigners(conf.Designers)
        setContacts(conf.Contacts)
    }, [])
    console.log(contacts)
    return ( 
        <div className="globalContainer">
            <div className="Footer">

<div className="contributors">
    <p>Designed By <br/></p>
    <div className="designers">
    {
        designers && designers.map((designer, i) =>{
            return (
                <div key={i} className="designer">
                    <a  href={`mailto:${designer.Email}`} > &copy; {designer.Name} </a>
                </div>
            )
        })
    }
    </div>
</div>
    <div className="navs">
    {
        navs && navs.map((nav, i) => {
            return ( <div key={i} className={`nav`} >
                        <p >
                        <a href={nav.Link}>{nav.Name}</a>
                        </p>
                    </div> 
                )
        })
    }
    </div>

    <div className="socials">
        {contacts &&
            contacts.map((contact,i ) =>{
                console.log(contact.Link)
                return (
                    <div key={i} className="contact_Logo">
                        <a href={`${contact.Link}`} target="_blank">
                            <img  src={` data:image/svg+xml;base64,${contact.Logo}`} />
                        </a>
                    </div>
                )
            })
        }
    </div>
</div>
        </div>
     );
}
 
