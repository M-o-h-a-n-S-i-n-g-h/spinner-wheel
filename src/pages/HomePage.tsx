import RegisterForm from '../components/RegisterForm'

import WheelSVG from '../assets/SVG/WheelSVG'

const HomePage = () => {
  return (
    <div className="p-4 max-w-md sm:max-w-6xl h-screen m-auto">
      <div className="flex items-center justify-center items-center gap-32 h-full sm:flex md:relative md:gap-2 lg:grid lg:grid-flow-col lg:grid-cols-2 lg:place-items-center">
        <div className="absolute -top-36 md:absolute md:top-auto md:-left-40 lg:relative lg:left-0 lg:top-0 lg:translate-full">
          <WheelSVG />
        </div>

        <div className="sm:w-[350px] mt-6 md:ml-48 lg:ml-0">
          <h1 className="text-3xl sm:text-3xl font-bold sm:leading-snug">
            This is how EngageBud looks like in action!
          </h1>

          <RegisterForm acceptTerms={true} />

          <div className="italic text-xs md:text-[10px] md:leading-3 font-light text-black text-center mt-4">
            <span>You can spin the wheel only once &nbsp;</span>
            <span>
              *If you win, you can claim the coupon only for 10 minutes!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
