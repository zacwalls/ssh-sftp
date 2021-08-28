import React from 'react';

type Props = {
    titleText: string;
}

const Navheader: React.FC<Props> = (title) => {
    return (
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
            <nav className="uk-navbar-container" uk-navbar="true" style={{position: "relative", zIndex: 980}}>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href="/">{title.titleText}</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navheader;