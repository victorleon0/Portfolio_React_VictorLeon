import React from 'react'
import { TiSocialFacebookCircular } from 'react-icons/ti/index';
import { TiSocialGithubCircular } from 'react-icons/ti/index';
import { TiSocialInstagramCircular } from 'react-icons/ti/index';
import { TiSocialLinkedinCircular } from 'react-icons/ti/index';


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
          <div className="socialitem">
            <TiSocialGithubCircular url={'https://github.com/victorleon0'} />
          </div>

          <div className="socialitem">
            <TiSocialLinkedinCircular url={socialMediaLinks.linkedin} />
          </div>

          <div className="socialitem">
            <TiSocialInstagramCircular url={socialMediaLinks.instagram} />
          </div>

          <div className="socialitem">
            <TiSocialFacebookCircular url={socialMediaLinks.facebook} />
          </div>
      </div>
  )
}

export default SocialMedia
