'use client'

import Image from 'next/image'
// import Link from 'next/link'

import { grids, iphones, logos, socials } from '@/utils/images'

import { Montserrat } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { FAQ } from '@/components/FAQ'

const montserrat = Montserrat({
  style: 'normal',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export default function Home() {
  return (
    <div className="max-w-screen w-full min-h-screen bg-bgColor font-clash">
      <header className="mx-auto pt-16">
        <Image
          className="mx-auto"
          width={203}
          height={52}
          src={logos.logo}
          alt="Scratch Logo"
        />
      </header>
      <section className="max-w-[1266px] w-full mx-auto mt-[208px] pb-[550px]">
        <div className="flex flex-col w-full mx-auto text-center">
          <h1 className="text-[8rem] leading-none font-medium">
            Experience <span className="text-blue500">Beyond</span> Your
            Foursome.
          </h1>
          <p
            className={`${montserrat.className} mt-8 text-[2rem] w-[910px] leading-tight mx-auto`}
          >
            Immerse yourself in the golfing experience without stepping foot on
            the green.
          </p>
          <div className="mt-10 flex items-center justify-center gap-7">
            <button className="font-medium bg-blue500 text-2xl px-16 py-4 text-white rounded-[10px]">
              Download iOS
            </button>
            <button className="font-medium bg-blue500 text-2xl px-16 py-4 text-white rounded-[10px]">
              Download Android
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-screen w-full bg-[#010E09] py-[307px] pb-[256px]">
        <div className="max-w-[1402px] w-full mx-auto px-10">
          <div className="w-full flex flex-col items-center">
            <Image
              width={45}
              height={62}
              src={logos.logoSm}
              alt="Scratch Logo"
            />
            <h1 className="font-medium text-white mt-5 leading-none text-[6rem] w-[600px] text-center">
              One app for all needs
            </h1>
            <div className="w-[1326px] mt-24 flex flex-col gap-10 flex-wrap">
              <div className="flex justify-between flex-wrap items-stretch">
                <div className="relative w-[780px]">
                  <Image width={780} height={400} src={grids.grid1} alt="" />
                  <h2 className="font-medium absolute z-20 text-white text-[2.25rem] bottom-8 left-8">
                    Streamlined Score Tracking
                  </h2>
                </div>
                <div className="relative w-[505px]">
                  <Image width={505} height={400} src={grids.grid2} alt="" />
                  <h2 className="font-medium absolute z-20 text-white text-[2.25rem] bottom-8 left-8">
                    Live-Stream Matches
                  </h2>
                </div>
              </div>
              <div className="flex justify-between items-stretch">
                <div className="relative">
                  <Image width={415} height={400} src={grids.grid3} alt="" />
                  <h2 className="font-medium absolute z-20 text-white text-[2.25rem] bottom-8 left-8">
                    Set Entry Fees
                  </h2>
                </div>
                <div className="relative col-span-1">
                  <Image width={415} height={400} src={grids.grid4} alt="" />
                  <h2 className="font-medium absolute z-20 text-white text-[2.25rem] bottom-8 left-8">
                    Play Against Friends
                  </h2>
                </div>
                <div className="relative col-span-1">
                  <Image width={415} height={400} src={grids.grid5} alt="" />
                  <h2 className="font-medium absolute z-20 text-white text-[2.25rem] bottom-8 left-8">
                    Win Contests
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      Trash-talk beyond your foursome with live streaming right
                      in the app.
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
                      Play in contests with participation costs to spice things
                      up on the course.
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
      <section className="max-w-screen w-full bg-golfBg bg-cover h-[867px]">
        <div className="max-w-[998px] w-full mx-auto pt-[185px] pb-[130px]">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[5rem] leading-none text-white font-medium">
              Download <span className="text-blue500">Scratch</span> for Free-no
              swings attached.
            </h1>
            <div className="font-medium mt-10 flex items-center justify-center gap-7">
              <button className="bg-blue500 text-2xl px-16 py-4 text-white rounded-[10px]">
                Download iOS
              </button>
              <button className="bg-blue500 text-2xl px-16 py-4 text-white rounded-[10px]">
                Download Android
              </button>
            </div>
            <div className="bg-white p-1.5 mt-12 rounded-[25px]">
              <Image src={socials.qrcode} alt="QR Code" />
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  )
}
