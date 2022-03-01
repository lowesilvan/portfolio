const Footer = () => {
    return ( 
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 footer-contact">
                        <p className="post"><strong>Email</strong></p>
                        <p>lowesilvan@gmail.com</p>
                    </div>
                    <div className="col-md-6 footer-follow ">
                        <p>Follow</p>
                        <div className="footer-links">
                            <a href="https://github.com/lowesilvan" title="Github" className="" target="_blank" rel="noreferrer">
                                <i className="fa fa-github effect"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/lowesilvan/" title="Linkedin" target="_blank" rel="noreferrer">
                                <i className="fa fa-linkedin effect"></i>
                            </a>
                            <a href="https://www.instagram.com/lowesilvan/" title="Instagram" target="_blank" rel="noreferrer">
                                <i className="fa fa-instagram effect"></i>
                            </a>
                            <a href="https://twitter.com/dt_lowe" title="Twitter" target="_blank" rel="noreferrer">
                                <i className="fa fa-twitter effect"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-center">
                        &copy;{new Date().getFullYear()} Lowe Silvan
                    </p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;