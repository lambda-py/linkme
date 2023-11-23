import { PlatformInstagramColorNegative } from "../icons/PlatformInstagramColorNegative"
import { PlatformYoutubeColorNegative } from "../icons/PlatformYoutubeColorNegative"
import { PlatformFacebookColorNegative } from "../icons/PlatformFacebookColorNegative"


type Props = {
  platform: string;
  url: string;
  color: string;
}

const socialComponentMap = {
  instagram: PlatformInstagramColorNegative,
  youtube: PlatformYoutubeColorNegative,
  facebook: PlatformFacebookColorNegative,
}


const SocialButton = ({platform, url, color}: Props) => {
  const PlatformIcon = socialComponentMap[platform]

  return (
    <button 
      className="w-full h-16 mb-3 flex items-center justify-start bg-white rounded-lg shadow-[0px_0px_8px_#00000080] px-6"
      onClick={() => window.open(url, '_blank')}
    >
      {PlatformIcon && <PlatformIcon color={color} className="w-12 h-12" />}
      <span className="ml-4 text-black">
        {platform}
      </span>
    </button>
  )
}

export default SocialButton