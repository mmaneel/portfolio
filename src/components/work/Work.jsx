import data from '../../data.json'
import './work_style.scss'

//TODO: center the title and make it a bit bigger

export const Work = () => {
    const projects = data.Work

    return ( 
       <div className="globalContainer">
         <div id="Work" className="work">
            <div className="workTitle">
            <h2>
                My Work
            </h2>

            </div>

            <div className="projectsWrapper">
                <div className="projectsContainer">
                    {projects.map((project, i) => {
                        return <Project key={i} project={project} />
                    })}
                </div>
            </div>
        </div>
       </div>
     );
}
 
const Project = ({project}) => {

    return (
        <div className="project">
            <div className="infos">
                <div className="title">
                    <h3>
                        {project.Title} { project.ShortName !== "" && `(aka ${project.ShortName})` }
                    </h3>

                </div>
                    
                <div className="description">
                    <p dangerouslySetInnerHTML={ { __html: project.Description } } >
                      
                      </p>
                </div>
            </div>

            <div className="logo">
            <img src={` data:image/svg+xml;base64,${project.Logo}`} />
            </div>
        </div>
    )
}