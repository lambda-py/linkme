import defaultProfileImage from "../assets/default-profile.png";
import SocialButtonList from "../components/SocialButtonList";
import artistData from "../constants/testData";

const Profile = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[1080px]">
        <div className="relative w-[1381px] h-[943px] top-0 left-[31px]">
          <div className="absolute w-[1381px] h-[581px] top-0 left-0">
            <div className="relative w-[962px] h-[583px] top-0 left-[209px]">
              <div className="flex justify-center items-start h-screen">
                  <img 
                    className="max-w-full h-auto max-h-[581px]" 
                    alt="Profile" 
                    src={artistData.img ? artistData.img : defaultProfileImage} 
                  />
              </div>
              <div className="absolute w-[126px] h-[63px] top-3 left-[183px] [text-shadow:0px_0px_5px_#000000]  [font-family:'Outfit-ExtraBold',Helvetica] font-extrabold text-white text-[30px] text-center tracking-[0] leading-[normal]">
                LinkMe
              </div>
              <a className="absolute w-[124px] h-[63px] top-3 left-[652px] [text-shadow:0px_0px_2px_#000000]  font-regular font-[number:var(--regular-font-weight)] text-white text-[length:var(--regular-font-size)] text-center tracking-[var(--regular-letter-spacing)] leading-[var(--regular-line-height)] [font-style:var(--regular-font-style)]">
                login
              </a>
            </div>
          </div>
          <div className="absolute w-[369px] h-[491px] top-[452px] left-[505px]">
            <div className="w-[368px] h-[70px] pt-7 [text-shadow:0px_0px_5px_#000000] font-logo font-[number:var(--logo-font-weight)] text-white text-[length:var(--logo-font-size)] text-center tracking-[var(--logo-letter-spacing)] leading-[var(--logo-line-height)] [font-style:var(--logo-font-style)]">
              {artistData.name}
            </div>
            <SocialButtonList socials={artistData.socials} color={artistData.color} />
            <div className="flex justify-center">
              Powered by&nbsp;
              <a href="https://linkme.dev" target="_blank" rel="noreferrer" className="text-[#000000]">LinkMe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile