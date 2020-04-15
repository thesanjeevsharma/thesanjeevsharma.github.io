import { SocialMediaIconsReact } from 'social-media-icons-react'

const Footer = () => {
   return (
      <footer className="bg-gray py-8 px-4 text-white text-center">
         <p className="mb-4">
            Made with lots of <span className="text-red-600"> &hearts;</span> and lil bit of skills.
         </p>
         <div className="flex justify-evenly">
            <SocialMediaIconsReact
               borderColor="rgba(0,0,0,0.25)"
               borderWidth="0"
               borderStyle="solid"
               icon="github"
               iconColor="rgba(255,255,255,1)"
               backgroundColor="rgba(16,17,19,1)"
               iconSize="1"
               roundness="50%"
               url="https://github.com/thesanjeevsharma"
               size="50"
            />
            <SocialMediaIconsReact
               borderColor="rgba(0,0,0,0.25)"
               borderWidth="0"
               borderStyle="solid"
               icon="linkedin"
               iconColor="rgba(255,255,255,1)"
               backgroundColor="rgba(16,17,19,1)"
               iconSize="1"
               roundness="50%"
               url="https://linkedin.com/in/thesanjeevsharma"
               size="50"
            />
            <SocialMediaIconsReact
               borderColor="rgba(0,0,0,0.25)"
               borderWidth="0"
               borderStyle="solid"
               icon="instagram"
               iconColor="rgba(255,255,255,1)"
               backgroundColor="rgba(16,17,19,1)"
               iconSize="1"
               roundness="50%"
               url="https://instagram.com/thesanjeevsharma"
               size="50"
            />
            <SocialMediaIconsReact
               borderColor="rgba(0,0,0,0.25)"
               borderWidth="0"
               borderStyle="solid"
               icon="twitter"
               iconColor="rgba(255,255,255,1)"
               backgroundColor="rgba(16,17,19,1)"
               iconSize="1"
               roundness="50%"
               url="https://twitter.com/thesnjvsharma"
               size="50"
            />
         </div>
      </footer>
   )
}

export default Footer
