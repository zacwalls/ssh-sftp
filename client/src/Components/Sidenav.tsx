import React from 'react';

const Sidenav: React.FC = () => {
    return (
        <div id="offcanvas-nav" uk-offcanvas="overlay: true" className="uk-offcanvas uk-offcanvas-overlay uk-open" style={{display: "block", width: "0"}}>
            <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide" style={{width: "250px"}}>
                <ul className="uk-nav uk-nav-default">
                    <li className="uk-active"><a href="/">Active</a></li>
                    <li className="uk-parent">
                        <a href="/">Parent</a>
                        <ul className="uk-nav-sub">
                            <li><a href="/">Sub item</a></li>
                            <li><a href="/">Sub item</a></li>
                        </ul>
                    </li>
                    <li className="uk-nav-header">Header</li>
                    <li><a href="/"><span className="uk-margin-small-right uk-icon" uk-icon="icon: table"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"></rect><rect x="1" y="7" width="18" height="1"></rect><rect x="1" y="11" width="18" height="1"></rect><rect x="1" y="15" width="18" height="1"></rect></svg></span> Item</a></li>
                    <li><a href="/"><span className="uk-margin-small-right uk-icon" uk-icon="icon: thumbnails"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="/000" x="3.5" y="3.5" width="5" height="5"></rect><rect fill="none" stroke="/000" x="11.5" y="3.5" width="5" height="5"></rect><rect fill="none" stroke="/000" x="11.5" y="11.5" width="5" height="5"></rect><rect fill="none" stroke="/000" x="3.5" y="11.5" width="5" height="5"></rect></svg></span> Item</a></li>
                    <li className="uk-nav-divider"></li>
                    <li><a href="/"><span className="uk-margin-small-right uk-icon" uk-icon="icon: trash"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="/000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"></polyline><polyline fill="none" stroke="/000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"></polyline><rect x="8" y="7" width="1" height="9"></rect><rect x="11" y="7" width="1" height="9"></rect><rect x="2" y="3" width="16" height="1"></rect></svg></span> Item</a></li>
                </ul>
            </div>
        </div>  
    );
}

export default Sidenav;