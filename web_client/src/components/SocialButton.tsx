import { PlatformDiscordColorNegative } from "../icons/PlatformDiscordColorNegative"
import { PlatformFacebookColorNegative } from "../icons/PlatformFacebookColorNegative"
import { PlatformTwitchColorNegative } from "../icons/PlatformTwitchColorNegative"
import { PlatformTiktokColorNegative } from "../icons/PlatformTiktokColorNegative"
import { PlatformGoogleColorNegative } from "../icons/PlatformGoogleColorNegative"
import { PlatformInstagramColorNegative } from "../icons/PlatformInstagramColorNegative"
import { PlatformYoutubeColorNegative } from "../icons/PlatformYoutubeColorNegative"
import { PlatformXColorNegative } from "../icons/PlatformXColorNegative"
import { PlatformGithubColorNegative } from "../icons/PlatformGithubColorNegative"
import { PlatformLinkedinColorNegative } from "../icons/PlatformLinkedinColorNegative"
import { PlatformTelegramColorNegative } from "../icons/PlatformTelegramColorNegative"
import { SocialComponentType } from "../shared/types"


type Props = {
  platform: string;
  url: string;
  color: string;
}

const socialComponentMap: SocialComponentType = {
  instagram: PlatformInstagramColorNegative,
  youtube: PlatformYoutubeColorNegative,
  facebook: PlatformFacebookColorNegative,
  discord: PlatformDiscordColorNegative,
  twitch: PlatformTwitchColorNegative,
  tiktok: PlatformTiktokColorNegative,
  google: PlatformGoogleColorNegative,
  x: PlatformXColorNegative,
  github: PlatformGithubColorNegative,
  linkedin: PlatformLinkedinColorNegative,
  telegram: PlatformTelegramColorNegative,
}


const SocialButton = ({platform, url, color}: Props) => {
  const PlatformIcon = socialComponentMap[platform]

  return (
    <button 
      className="w-full h-16 mb-3 flex items-center justify-start bg-white rounded-lg shadow-[0px_0px_3px_#00000080] px-6 hover:bg-gray-100"
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