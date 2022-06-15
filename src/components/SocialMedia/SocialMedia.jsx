import React from 'react'

//import { SocialIcon } from 'react-social-icons'

import './SocialMedia.scss'

const SocialMedia = () => {

    const socialMediaLinks = {
        gitHub: 'https://github.com/phanimurari',
        instagram: 'https://www.instagram.com/im_phani_murari/?hl=en',
        linkedin: 'https://www.linkedin.com/in/phanimurari/',
        twitter: 'https://twitter.com/ImPhaniMurari'
      }


  return (
    <div class="socialMenu">
        <ul class="socialList">
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
            {/*<SocialIcon url={socialMediaLinks.twitter} />*/}
          </li>
        </ul>
      </div>
  )
}

export default SocialMedia
