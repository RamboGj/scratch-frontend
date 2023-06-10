import { montserrat } from '@/utils/fonts'
import { iphones } from '@/utils/images'
import Image from 'next/image'

export function Features() {
  return (
    <section className="max-w-[1580px] w-full mx-auto pt-[195px] pb-[268px]">
      <div className="w-full flex flex-col mx-auto">
        <h1 className="text-[5rem] font-medium mx-auto">
          How <span className="text-blue500">Scratch</span> Works
        </h1>
        <div className="w-full mx-auto">
          <div className="w-full h-[4200px] flex relative mx-auto">
            <div className="h-[4468px] w-3 bg-[#E3E7D9] mx-auto relative">
              <div className="absolute top-0 h-[500px] w-3 z-20 bg-gradient-to-t from-blue500 to-[#F4F8E8]">
                <div className="rounded-full border-2 border-white w-12 h-12 bg-blue500 absolute -bottom-2 -left-[18px] shadow-xl"></div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-[242px] absolute z-20 top-[265px]">
              <div className="w-full flex items-center justify-start gap-[358px]">
                <div className="w-[657px] flex flex-col gap-6">
                  <header>
                    <span
                      className={`${montserrat.className} text-xl text-blue500 tracking-[0.6rem] uppercase`}
                    >
                      Feature 1
                    </span>
                  </header>
                  <h2 className="font-medium text-black text-[4rem] leading-none">
                    Streamlined score tracking to keep you in the game.
                  </h2>
                  <p
                    className={`${montserrat.className} w-[582px] text-2xl text-blue500`}
                  >
                    We’ve improved score keeping because you shouldn’t spend
                    more time on your phone when out on the course.
                  </p>
                </div>
                <Image src={iphones.mobileLg1} alt="" />
              </div>
              <div className="w-full flex flex-row-reverse items-center justify-start gap-[358px]">
                <div className="w-[657px] flex flex-col gap-6">
                  <header>
                    <span
                      className={`${montserrat.className} text-xl text-blue500 tracking-[0.6rem] uppercase`}
                    >
                      Feature 2
                    </span>
                  </header>
                  <h2 className="font-medium text-black text-[4rem] leading-none">
                    Front-row seat to your friends’ games with live streaming.
                  </h2>
                  <p
                    className={`${montserrat.className} w-[582px] text-2xl text-blue500`}
                  >
                    Trash-talk beyond your foursome with live streaming right in
                    the app.
                  </p>
                </div>
                <Image src={iphones.mobileLg2} alt="" />
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-[328px]">
                <div className="w-[657px] flex flex-col gap-6">
                  <header>
                    <span
                      className={`${montserrat.className} text-xl text-blue500 tracking-[0.6rem] uppercase`}
                    >
                      Feature 3
                    </span>
                  </header>
                  <h2 className="font-medium text-black text-[4rem] leading-none">
                    Host and join contests to win against your friends.
                  </h2>
                  <p
                    className={`${montserrat.className} w-[582px] text-2xl text-blue500`}
                  >
                    Play in contests with participation costs to spice things up
                    on the course.
                  </p>
                </div>
                <Image src={iphones.mobileLg3} alt="" />
              </div>
              <div className="w-full flex flex-row-reverse items-center justify-start gap-[328px]">
                <div className="w-[657px] flex flex-col gap-6">
                  <header>
                    <span
                      className={`${montserrat.className} text-xl text-blue500 tracking-[0.6rem] uppercase`}
                    >
                      Feature 4
                    </span>
                  </header>
                  <h2 className="font-medium text-black text-[4rem] leading-none">
                    Track your game with more features than you can imagine.
                  </h2>
                  <p
                    className={`${montserrat.className} w-[582px] text-2xl text-blue500`}
                  >
                    We’re talking live course updates, streamlined scorecards,
                    chatting, contests, livestreaming, and more.
                  </p>
                </div>
                <Image src={iphones.mobileLg4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
