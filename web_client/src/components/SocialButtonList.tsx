import SocialButton from "./SocialButton";

type Props = {
  socials: {
    platform: string;
    url: string;
  }[];
  color: string;
}

function SocialButtonList({socials, color}: Props) {
  return (
    <div className="w-full my-6 px-4">
      {socials.map((social, index) => (
        <SocialButton key={index} platform={social.platform} url={social.url} color={color}/>
      ))}
    </div>
  )
}

export default SocialButtonList