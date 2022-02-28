import Typical from "react-typical"
import me from "../../Assets/me.jpg"

const Profile = () => {
    return (
        <div className="welcome-section">
            
            <div className="card">
                <img className="card-img-top card-img" src={me} alt="Lowe's potrait"/>
                <h2 className="card-title text-center my-0">Lowe</h2>
                <h2 className="card-title text-center my-0">Mbonda</h2>
                <hr/>
                <span className="profile-role py-0 mb-0 text-center">
                    <Typical
                        loop={Infinity}
                        steps={[
                            'Software Developer', 8000,
                            'Front-End Engineer', 9000
                        ]}
                    />
                </span>
                <div className="mobile-buttons">
                    <a href="https://lowesilvan.github.io/resume" className="">
                        <button className="btn button1 btn-primary mobile-btn-touch1">RESUME</button>
                    </a>
                    <a href="https://lowesilvan.github.io/projects" className="btn btn-outline-primary button2 mobile-btn-touch">PROJECTS</a>
                </div>
                <div className="pad">
                    <div className="card-footer">
                        <p>Get in Touch</p>
                        <div className="card-link">
                            <a href="https://www.linkedin.com/in/lowesilvan/" title="Linkedin">
                                <i className="fa fa-linkedin effect"></i>
                            </a>
                            <a href="https://www.instagram.com/lowesilvan/" title="Instagram">
                                <i className="fa fa-instagram effect"></i>
                            </a>
                            <a href="https://twitter.com/dt_lowe" title="Twitter">
                                <i className="fa fa-twitter effect"></i>
                            </a>
                            <a href="https://github.com/lowesilvan" title="Github" className="">
                                <i className="fa fa-github effect"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm"></div>
                <div className="col-md-4 profile">
                    <h1 className="">Hello</h1>
                    <p className="profile-tagline">
                        I'm Lowe, a Software Developer and Content Creator based in Cameroon.
                        <br />
                        <br className="hide-space"/>
                        <br />
                        I enjoy programming Javascript applications and creating videos on Youtube.
                    </p>
                    <a href="/resume">
                        <button className="btn button1 btn-primary mobile-button-display">RESUME</button>
                    </a>
                    <a href="/projects" className="btn btn-outline-primary button2 mobile-button-display">PROJECTS</a>
                </div>
            </div>
    );
}

export default Profile;