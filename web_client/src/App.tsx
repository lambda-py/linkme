import { PlatformInstagramColorNegative } from "./icons/PlatformInstagramColorNegative";
import { PlatformYoutubeColorNegative } from "./icons/PlatformYoutubeColorNegative";

function App() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[1080px]">
        <div className="relative w-[1381px] h-[943px] top-[14px] left-[31px]">
          <div className="absolute w-[1381px] h-[581px] top-0 left-0">
            <div className="relative w-[962px] h-[583px] top-[-2px] left-[209px]">
              <img className="absolute w-[962px] h-[581px] top-[2px] left-0" alt="Vector" src="vector.svg" />
              <div className="absolute w-[126px] h-[63px] top-0 left-[183px] [text-shadow:0px_0px_2px_#000000] [-webkit-text-stroke:1px_#000000] [font-family:'Outfit-ExtraBold',Helvetica] font-extrabold text-white text-[30px] text-center tracking-[0] leading-[normal]">
                LinkMe
              </div>
              <div className="absolute w-[124px] h-[63px] top-0 left-[652px] [text-shadow:0px_0px_2px_#00000040] [-webkit-text-stroke:1px_#000000] font-regular font-[number:var(--regular-font-weight)] text-white text-[length:var(--regular-font-size)] text-center tracking-[var(--regular-letter-spacing)] leading-[var(--regular-line-height)] [font-style:var(--regular-font-style)]">
                login
              </div>
            </div>
          </div>
          <div className="absolute w-[369px] h-[491px] top-[452px] left-[505px]">
            <div className="w-[368px] h-[70px] top-[-2px] -left-px [text-shadow:0px_0px_2px_#000000] [-webkit-text-stroke:1px_#000000] font-logo font-[number:var(--logo-font-weight)] text-white text-[length:var(--logo-font-size)] text-center tracking-[var(--logo-letter-spacing)] leading-[var(--logo-line-height)] [font-style:var(--logo-font-style)]">
              Dvi Kuli Mad
            </div>
            <div className="w-full mt-6 px-4">
              <button className="w-full h-16 mb-3 flex items-center justify-start bg-white rounded-lg shadow-[0px_0px_8px_#00000080] px-6">
                <PlatformInstagramColorNegative color="black" className="w-12 h-12" />
                <span className="ml-4 text-black">
                  Instagram
                </span>
              </button>
              <button className="w-full h-16 mb-3 flex items-center justify-start bg-white rounded-lg shadow-[0px_0px_8px_#00000080] px-6">
                <PlatformYoutubeColorNegative color="black" className="w-12 h-12" />
                <span className="ml-4 text-black">
                  Youtube
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
