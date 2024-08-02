import { useState, useEffect } from 'react';

const Footer = () => {
    const [bgImg, setBgImg] = useState("img/tic-tac-toe-7737546_1280.webp");

    const handleMap = (src) => {
        setBgImg(src);
    }
    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImg})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';

        return () => {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundPosition = '';
        };
    }, [bgImg]);

    return (
        <footer id="footer-id" className="footer">
            <div className='center-maps'>
                <div className="gallery">
                    <h3 className="footer-heading">Maps</h3>
                    <div className="gallery-images">
                        <div className="image-wrapper">
                            <img src="img/tic-tac-toe-7737546_1280.webp" className="footer-image" alt="Map 1" onClick={() => handleMap("img/tic-tac-toe-7737546_1280.webp")} />
                        </div>
                        <div className="image-wrapper">
                            <img src="img/imgboard.jpg" className="footer-image" alt="Map 2" onClick={() => handleMap("img/imgboard.jpg")} />
                        </div>
                        <div className="image-wrapper">
                            <img src="img/imgneon.avif" className="footer-image" alt="Map 3" onClick={() => handleMap("img/imgneon.avif")} />
                        </div>
                        <div className="image-wrapper">
                            <img src="img/imgrepeat.jpg" className="footer-image" alt="Map 4" onClick={() => handleMap("img/imgrepeat.jpg")} />
                        </div>
                        <div className="image-wrapper">
                            <img src="img/imgsoccer.jpg" className="footer-image" alt="Map 5" onClick={() => handleMap("img/imgsoccer.jpg")} />
                        </div>
                        <div className="image-wrapper">
                            <img src="img/imgbasic.jpg" className="footer-image" alt="Map 6" onClick={() => handleMap("img/imgbasic.jpg")} />
                        </div>
                    </div>
                </div>
                </div>
            <div className="main-part">
                <div className="footer-list-wrapper">
                    <h3 className="footer-heading">TicTacToeReact</h3>
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <a href="https://www.linkedin.com/in/tristan-girardi" className="footer-list-link">
                            t.girardi13@gmail.com
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Montreal, Main Street 123
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Tel: 514 123 4567
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-list-wrapper">
                    <h3 className="footer-heading">Explore</h3>
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Home
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                About Us
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Maps
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                New Content
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Customers
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-list-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="contact">
                    <h3 className="footer-heading">Contact</h3>
                    <p>Sign Up for News</p>
                    <form className="footer-form">
                        <input type="text" className="footer-input" placeholder="Your email..." />
                        <button className="footer-btn">Sign Up</button>
                    </form>
                </div>

               
            </div>

            <div className="creator-part">
                <div className="copyright-text">
                    <p>Copyright &copy; 2024. TicTacToe. All Rights Reserved</p>
                </div>

                <div className="text-right">
                    <p>Tristan Girardi</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
