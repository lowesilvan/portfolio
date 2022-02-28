const Resume = () => {
    return (
        <div className="resume-body">
            <div className="">
                <h2 className="navbar-brand headline" href="/"><span className="dot align-top mr-3">do</span>Resume</h2>
                <div className="d-flex resume-content">
                    <p className="experience-style">Experience</p>
                    <a href="Lowe-Resume.pdf" download='Lowe-Resume' className="">
                        <button className="btn button3">DOWNLOAD CV</button>
                    </a>
                </div>
                <div className="experience d-flex">
                    <div className="role">
                        <p className="role1">Nov 2020 - Feb 2021</p>
                        <p className="role2">Web Developer (intern)</p>
                        <p className="role3">United Nations ESCWA Technology Center</p>
                        <p className="role4">Fully Remote</p>
                    </div>
                    <div className="description">
                        <ul className="desc-list">
                            <li>In a long-term effort to support youths and small start-ups in the middle eastern regions, the UN had the development team contribute to some web applications which would serve to provide free tools to youths and a community for small enterprises to share and request resources.</li>
                            <li>My role in this was to convert UI from the design team into working responsive web applications using HTML, CSS, and Drupal.</li>
                            <li>Debugging web applications built by previous interns, and updating design content</li>
                            <li>Meetings with technical and non-technical teams to discuss the web application status, project deadlines, and iterations.</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex resume-content">
                    <p className="experience-style">Education</p>
                </div>
                <div className="experience d-flex">
                    <div className="role">
                        <p className="role1">2017 - 2021</p>
                        <p className="role2">University of Buea</p>
                        <p className="role3">Bachelor of Science, Computer Engineering</p>
                        <p className="role4">Buea, Cameroon</p>
                    </div>
                    <div className="description">
                        <ul className="desc-list">
                            <p className="course-work underline">Relevant Coursework:</p>
                            <li>Introduction to Programming</li>
                            <li>Data structures and Algorithms</li>
                            <li>Object-Oriented Programming</li>
                            <li >Cloud Service Oriented Architectures</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex resume-content">
                    <p className="experience-style">Relevant Technical Skills</p>
                </div>
                <div className="experience dis-skill">
                    <div className="description">
                        <ul className="desc-list list-style">
                            <li><span className="dot align-top mr-3 dot-size">do</span>HTML</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>Git</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>Javascript</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>Problem Solving</li>
                        </ul>
                    </div>
                    <div className="description">
                        <ul className="desc-list list-style">
                            <li><span className="dot align-top mr-3 dot-size">do</span>CSS</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>Github</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>Reactjs</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>Excellent Communication</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Resume;