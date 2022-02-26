import md_preview from "../../Assets/md_preview.png"

const Projects = () => {
    return ( 
        <div className="resume-body">
            <div>
                <h2 className="navbar-brand headline" href="/"><span className="dot align-top mr-3">do</span>Projects</h2>
                <p>Check out some of my projects down below!</p>
                <div className="experience d-flex">
                    <div className="role desc-proj">
                        <div className="button4-flex">
                            <p className="role1">Live Markdown Previewer</p>
                            <a href="https://lowesilvan.github.io/Markdown-Previewer-FCC/" className="btn button4" target="_blank" rel="noreferrer">Check it out!</a>
                        </div>
                        <p className="role2 underline">Description</p>
                        <p className="role3">A simple Reactjs application that takes in markdown input, converts, and previews the corresponding HTML output live. Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. You can use this app to preview your Github readme file before pushing to your repository.</p>
                        <p className="role2 underline">Technologies</p>
                        <p className="role3">Javascript, HTML, CSS, Marked library, Bootstrap, JSX</p>
                    </div>
                    <div className="description img-place">
                        <img src={md_preview} alt="" className="md-preview"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;