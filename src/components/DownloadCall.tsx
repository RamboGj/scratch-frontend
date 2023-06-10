import { socials } from '@/utils/images'
import Image from 'next/image'

export function DownloadCall() {
  return (
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
  )
}
