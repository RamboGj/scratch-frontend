import { socials } from '@/utils/images'
import Image from 'next/image'
import Link from 'next/link'

export function DownloadCall() {
  return (
    <section className="max-w-screen w-full bg-golfBg bg-cover bg-center h-[497px] lg:h-[867px]">
      <div className="max-w-[393px] lg:max-w-[998px] px-5 lg:px-0 w-full mx-auto py-[108px] lg:pt-[185px] lg:pb-[130px]">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[2.25rem] lg:text-[5rem] leading-none text-white font-medium">
            Download <span className="text-blue500">Scratch</span> for Free-no
            swings attached.
          </h1>
          <div className="font-medium mt-10 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7">
            <Link
              href="#"
              className="w-full lg:w-fit bg-blue500 hover:bg-blue600 transition-colors duration-300 text-[1.25rem] lg:text-2xl px-16 py-4 text-white rounded-[10px]"
            >
              Download iOS
            </Link>
            <Link
              href="#"
              className="w-full lg:w-fit bg-blue500 hover:bg-blue600 transition-colors duration-300 text-[1.25rem] lg:text-2xl px-16 py-4 text-white rounded-[10px]"
            >
              Download Android
            </Link>
          </div>
          <div className="hidden lg:flex bg-white p-1.5 mt-12 rounded-[25px]">
            <Image src={socials.qrcode} alt="QR Code" />
          </div>
        </div>
      </div>
    </section>
  )
}
