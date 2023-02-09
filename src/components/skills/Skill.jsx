import data from '../../data.json'
import './skills_style.scss'

export const Skills = () => {
    const skills = data.Skills
    return ( 
       <div className="globalContainer">
         <div id="Skills" className="skills">
            <div className="title">
                <label htmlFor="skillsTitle">My skills</label>
                <h2 id='skillsTitle' >
                    My Expertise
                </h2>
            </div>

            <div className="skillsContainer">
                {skills.map((s, i) => {
                    return (
                        <Skill key={i} s={s}  index={i} />
                    )
                })}
            </div>
        </div>
       </div>
     );
}
 


const Skill = ({s, index}) => {
    const bgColor = ["var(--main_Color)", "var(--white)"]
    const txtColor = ["var(--white)", "var(--black)"]
    return (
        <div style={{backgroundColor: `${bgColor[index%2]}`, color: `${txtColor[index%2]}`}} className="skill">
            <img src={` data:image/svg+xml;base64,${s.Logo}`} />
            <p className="title">
                {s.Title}
            </p>
        </div>
    )
}