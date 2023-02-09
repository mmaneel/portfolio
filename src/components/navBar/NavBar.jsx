import { useEffect, useState } from 'react';
import data from '../../data.json'
import MenuIcon from '@mui/icons-material/Menu';
import './navBar_style.scss'
export const NavBar = () => {
    const [navsStyle, setNavsStyle] = useState([])
    const [Navs, setNavs] = useState(null)
    const [scroll, setScroll] = useState(0)
    const [hideMenu, setHideMenu] = useState(true)
    useEffect(() => {
      const handleScroll = event => {
  
        setScroll(window.scrollY)
        // console.log('window.scrollY', window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      setNavs(data.Navs)
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

    useEffect(()=> {
        
        if (Navs) {
            const tmp = []
            let x = 0
            let location = window.location.hash;
            Navs.forEach((nav, i) =>{ 
                if (nav.Link === location ) x = i
                tmp.push("notActiveNav")
            })
            console.log(x)
            tmp[x] = "ActiveNav"

        setNavsStyle(tmp)
        }
       
    },[Navs])
   

    const markActive = (index) => {
        const tmp = navsStyle
        
        tmp.forEach((s, i) => {
            tmp[i] = i !== index ? "notActiveNav" : "ActiveNav";
        })

        setNavsStyle([...tmp])

    }

    
    return ( 
        <div className="globalContainer navStick">
                <div className={`navBar ${scroll > 0? "navShadow" : ""}`}>
                <div className="name">
                    <p>{data.Pseudo.String}</p>
                </div>

                <div className="navs">
                    {
                        Navs && Navs.map((nav, i) => {
                            return ( <div key={i} className={`nav`} onClick={()=>{
                                markActive(i)
                            }}>
                                        <p className={navsStyle[i]}>
                                        <a href={nav.Link}>{nav.Name}</a>
                                        </p>
                                    </div> 
                                )
                        })
                    }
                </div>

                <div className="contactBtn">
                    <a href="#Contact"><button>Contact</button></a> 
                </div>

                <div className="mobileMenu">
                    <div className="icon" onClick={()=>{
                        setHideMenu(!hideMenu)
                    }}>
                        <MenuIcon/>
                    </div>

                    <div className={`menu ${hideMenu? "hideMenu" : ""} `}>
                        <div className={`menuItems ${hideMenu? "hideMenu" : ""} `} >
                            <div className="items">
                            {Navs && Navs.map((nav, i) => {
                                return (
                                    <div key={i} className="item">
                                        <p  >
                                        <a href={nav.Link} onClick={()=>{setHideMenu(true)}}>{nav.Name}</a>
                                        </p>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
