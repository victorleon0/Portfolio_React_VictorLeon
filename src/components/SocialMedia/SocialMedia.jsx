import React from 'react'

//import { SocialIcon } from 'react-social-icons'

import './SocialMedia.scss'

const SocialMedia = () => {

    const socialMediaLinks = {
        gitHub: 'https://github.com/victorleon0',
        instagram: 'https://www.instagram.com/VictorLeon_',
        linkedin: 'https://www.linkedin.com/in/victorleon0/',
        facebook: 'https://facebook.com/victorleon0'
      }


  return (
    <div className="socialMenu">
        <ul className="socialList">
          <li className="socialitem">
            {/*<SocialIcon url={socialMediaLinks.gitHub} />*/}
          </li>

          <li className="socialitem">
            {/*<SocialIcon url={socialMediaLinks.linkedin} />*/}
          </li>

          <li className="socialitem">
            {/*<SocialIcon url={socialMediaLinks.instagram} />*/}
          </li>

          <li className="socialitem">
            {/*<SocialIcon url={socialMediaLinks.facebook} />*/}
          </li>
        </ul>
      </div>
  )
}

export default SocialMedia
