import { useEffect } from "react";
import { useState } from "react";

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return ( 
        <span className="back-to-top">
            {showButton && (
                <button onClick={scrollToTop} className="btn btn-primary" style={{right: "5%", position: "fixed"}}>
                    &#8679;
                </button>
            )}
        </span>
     );
}
 
export default BackToTopButton;