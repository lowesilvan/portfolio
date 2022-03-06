import md_preview from "../../Assets/md_preview.webp"
import my_site from "../../Assets/my_site.webp"
import focus_mode from "../../Assets/focus_mode.webp"
import ScrollToTop from "react-scroll-to-top"

const Projects = () => {
    return (
        <div className="resume-body">
            <div className="project-text">
                <h2 className="navbar-brand headline" href="/"><span className="dot align-top mr-3">do</span>Projects</h2>
                <p className>Check out some of my projects down below!</p>
                <div className="experience d-flex mt-5">
                    <div className="role desc-proj">
                        <div className="button4-flex">
                            <p className="role1">My Portfolio</p>
                            <a href="https://github.com/lowesilvan/Portfolio" className="btn button4" target="_blank" rel="noreferrer">Check it out!</a>
                        </div>
                        <p className="role2 underline">Description</p>
                        <p className="role3">I was going for a simple but pleasant design. For this, So
                        I recreated a WIX design that caught my eye, manipulated the DOM to get 
                        specific details like colors, font size, etc and built the responsive design 
                        from scratch using JSX in Reactjs, For the call to email functionality, 
                        I followed the instructions from Emailjs documentation to implement 
                        emailjs SDK.</p>
                        <p className="role2 underline">Technologies</p>
                        <p className="role3">Javascript, HTML, CSS, SCSS, Emailjs, Bootstrap, Reactjs</p>
                    </div>
                    <div className="description img-place">
                        <img src={my_site} alt="" className="md-preview" />
                    </div>
                </div>
                <div className="experience d-flex mt-5">
                    <div className="role desc-proj">
                        <div className="button4-flex">
                            <p className="role1">Chrome Extension That Blocks Certain Distracting websites</p>
                            <a href="https://github.com/lowesilvan/Focus-Mode-Chrome-Extension" className="btn button4" target="_blank" rel="noreferrer">Check it out!</a>
                        </div>
                        <p className="role2 underline">Description</p>
                        <p className="role3">I programmed a chrome extension called Focus Mode. It’s easy to get 
                        distracted when working on the same device which also provides you entertainment so focus mode 
                        extension serves as a subtle “Focus” mode for browsers given the selected hostnames, It blocks 
                        these websites and instead displays a custom webpage.</p>
                        <p className="role2 underline">Technologies</p>
                        <p className="role3">Javascript, HTML</p>
                    </div>
                    <div className="description img-place">
                        <img src={focus_mode} alt="" className="md-preview" />
                    </div>
                </div>
                <div className="experience d-flex mt-5">
                    <div className="role desc-proj">
                        <div className="button4-flex">
                            <p className="role1">Live Markdown Previewer</p>
                            <a href="https://lowesilvan.github.io/Markdown-Previewer-FCC/" className="btn button4" target="_blank" rel="noreferrer">Check it out!</a>
                        </div>
                        <p className="role2 underline">Description</p>
                        <p className="role3">A simple Reactjs application that takes in markdown input, converts,
                            and previews the corresponding HTML output live. Markdown is a lightweight markup language
                            that you can use to add formatting elements to plaintext text documents. You can use this
                            app to preview your Github readme file before pushing to your repository.</p>
                        <p className="role2 underline">Technologies</p>
                        <p className="role3">Javascript, HTML, CSS, Marked library, Bootstrap, JSX</p>
                    </div>
                    <div className="description img-place">
                        <img src={md_preview} alt="" className="md-preview" />
                    </div>
                </div>
            </div>
            <ScrollToTop smooth color="#007bff" />
        </div>
    );
}

export default Projects;