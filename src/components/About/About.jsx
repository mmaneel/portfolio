
import { useState, useEffect } from 'react';
import data from '../../data.json'
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';

import './about_style.scss'

//TODO: make animations faster
//TODO: make text smaller


export const About = () => {
    const [lettersClasses, setLettersClasses] = useState(["hidden","hidden","hidden","hidden","hidden","hidden","hidden","hidden","hidden","hidden"])
    const [i, setI] = useState(-1)
    // const [showGlitch, setShowGlitch] = useState(false)
    const [pseudoArr, setPseudoArr] = useState(data.Pseudo.Array)
    const [typePseudo, setTypePseudo] = useState(false)
    const [showOccupation, setShowOccupation] = useState(false)
    const [showBio, setShowBio] = useState(false)
    const [showScrollHand, setShowScrollHand] = useState(false)
    const [showPic, setShowPic] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setTypePseudo(true)
        }, 500)

        setTimeout(()=>{
            setShowPic(true)
        }, 2000)    
        
        setTimeout(()=>{
            setShowOccupation(true)
        }, 2800)


        setTimeout(()=>{
            setShowBio(true)
        }, 3900)

        setTimeout(()=>{
            setShowScrollHand(true)
        }, 4500)

    },[])
    useEffect(()=> {

        if( i >= 0){
            const tmp = lettersClasses;
            tmp[i] = "visual"
            setLettersClasses(tmp)
        }
    }, [i])


    const increment = (i) => {
        setI(i+1)
    }

    if(typePseudo){
        setTimeout(() => {
            if (i < 10 )
                increment(i)
        },i === -1 ? 100 : i === 2  ? 1000 : 100)
    }   

    

    return ( 
        <div className="globalContainer">
            <div id="About" className="About">
            <div className="text">

                <h1>
                    <span className="fade_1">Hey, I'm </span>


                    { typePseudo && <span className="nickName" >
                        {/* { showGlitch && <span className="glitch1" aria-hidden={true}>C0deNameO</span>} */}
                        <span className={lettersClasses[0]} id="c">{pseudoArr[0]}</span>
                        <span className={lettersClasses[1]} id="o1">{pseudoArr[1]}</span>
                        <span className={lettersClasses[2]} id="_0">{pseudoArr[2]}</span>
                        <span className={lettersClasses[3]} id="d">{pseudoArr[3]}</span>
                        <span className={lettersClasses[4]} id="e1">{pseudoArr[4]}</span>
                        <span className={lettersClasses[5]} id="n">{pseudoArr[5]}</span>
                        <span className={lettersClasses[6]} id="a">{pseudoArr[6]}</span>
                        <span className={lettersClasses[7]} id="m">{pseudoArr[7]}</span>
                        <span className={lettersClasses[8]} id="e2">{pseudoArr[8]}</span>
                        <span className={lettersClasses[9]} id="o2">{pseudoArr[9]}</span>
                        {/* { showGlitch && <span className="glitch2" aria-hidden={true}>C0deNameO</span>} */}
                    </span> }   
                   {showOccupation && <span className="fade_2">
                        <br/>
                        I’m a {data.Occupation} 
                        </span>
                    }
                </h1>

                {showBio && 
                <p className="bio">
                I enjoy building everything from small business sites to rich interactive web apps  and I love what I do 
                </p>}


                {showScrollHand && 
                <div className="scroll fade_3">
                <a href="#Skills">
        
                  <PanToolAltIcon id="hand" />
                  <p className="scroll_text">Find out more</p>
                </a>
              </div>}
            </div>
            
            <div className="picture">
                {showPic && 
                <div className="whiteCircle">
                    <div className="waveCircle">
                        <div className="innerCircle">
                        </div>
                    </div>
                    
                    <img src={`data:image/*;base64,${data.My_Picture}`} />
                </div>}
            </div>
        </div>
        </div>
        
     );
}