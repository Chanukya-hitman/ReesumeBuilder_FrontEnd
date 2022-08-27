import React from 'react'
import '../../resources/templates.css'

function Template5() {
    const user = JSON.parse(localStorage.getItem('resume-user'))
    return (

        <div className='template5-parent'>
            <div className="head d-flex justify-content-between">
                <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
                <div>
                    <p>{user.email}</p>
                    <p>{user.address}</p>
                    <p>{user.mobileNumber}</p>
                </div>
            </div>
            <div class="container5">

                <div class="left-side1">


                    <div className="projects mt-3">
                        <h3 >Skills</h3>

                        {user.skills.map((skill) => {
                            return <p>
                                {skill.technology}
                            </p>
                        })}
                        <hr style={{opacity:'1'}} />
                    </div>

                    <div className="education mt-3">
                        <h3 >Education</h3>

                        {user.education.map((education) => {
                            return <div className='d-flex align-items-center'>
                                {/* <h6 ><b>{education.range} : &nbsp;</b></h6>
                                <p> <b>{education.qualification}</b> with  <b>{education.percentage}%</b> in {education.institution}</p> */}
                                <h6><p>{education.institution}  {education.range} <br />{education.qualification}<br />cgpa - {education.cgpa}</p></h6><br />
                            </div>
                        })}
                         <hr style={{opacity:'1'}} />
                    </div>
                    {
                        user.intrests.length !== 0 && <>

                            <div className="intrests mt-3">
                                <h3 >Areas of Intrest</h3>

                                {user.intrests.map((a) => {
                                    return <p>
                                        {a.area}
                                    </p>
                                })}
        
                            </div></>
                    }
                </div>



                <div class="right-side1">


                    <div className="objective mt-3">
                        <h3 >Objective</h3>

                        <p>{user.objective}</p>
                         <hr style={{opacity:'1'}} />
                    </div>


                    {
                        user.experience.length !== 0 && <>



                            <div className="experience mt-3">
                                <h3 >Experience</h3>

                                {user.experience.map((exp) => {
                                    return <div className='d-flex align-items-center'>
                                        <h6 ><b>{exp.range} : &nbsp;</b></h6>
                                        <p> <b>{exp.company}</b> in{" "}  <b>{exp.place}</b></p>
                                    </div>
                                })}
                                 <hr style={{opacity:'1'}} />
                            </div>

                        </>
                    }



                    {
                        user.projects.length !== 0 && <>
                            <div className="projects mt-3">
                                <h3 >Projects</h3>

                                {user.projects.map((project) => {
                                    return <div className='d-flex flex-column'>
                                        <h6 ><b>{project.title} [{project.range}] {" "}</b></h6>
                                        <p> {project.description}</p>
                                    </div>
                                })}
                                 <hr style={{opacity:'1'}} />
                            </div>
                        </>
                    }
                    {
                        user.achievements.length !== 0 && <>

                            <div className="achievements mt-3">
                                <h3 >Achievements | Awards | Certifications</h3>

                                {user.achievements.map((a) => {
                                    return <p>
                                        {a.list}
                                    </p>
                                })}
                                 <hr style={{opacity:'1'}} />
                            </div></>
                    }




                    <div className="declaration mt-3">
                        <h3 >Declaration</h3>
                         <hr style={{opacity:'1'}} />
                        <div>
                            <p>{user.declaration} </p>
                        </div>

                    </div>




                </div>
            </div>
        </div>
    )
}

export default Template5