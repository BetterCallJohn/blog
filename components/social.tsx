import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter, faLinkedinIn, faInstagram, faSoundcloud} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
    return (
        <section className="mt-16">

            <div className="">

                <a href="https://github.com/BetterCallJohn" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2x" color="#AFAFAF" className="mr-8 ml-8"/>
                </a>
                <a href="https://twitter.com/BetterCallJohn_" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="2x" color="#AFAFAF" className="mr-8"/>
                </a>
                <a href="https://www.linkedin.com/in/jonathan-martin-51854b18/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#AFAFAF" className="mr-8"/>
                </a>
                <a href="https://www.instagram.com/ibettercalljohn/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="#AFAFAF" className="mr-8"/>
                </a>
                <a href="https://soundcloud.com/bettercalljohn" target="_blank">
                    <FontAwesomeIcon icon={faSoundcloud} size="2x" color="#AFAFAF" className="mr-8"/>
                </a>
            </div>

        </section>
    )
}

export default Social
