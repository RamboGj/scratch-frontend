import { montserrat } from '@/utils/fonts'

export function Hero() {
  return (
    <section className="max-w-[1266px] w-full mx-auto mt-[208px] pb-[550px]">
      <div className="flex flex-col w-full mx-auto text-center">
        <h1 className="text-[8rem] leading-none font-medium">
          Experience <span className="text-blue500">Beyond</span> Your Foursome.
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
  )
}
