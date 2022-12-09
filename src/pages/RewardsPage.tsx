import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

import Button from '../components/Button'
import ReactConfetti from '../components/Confetti'

import WheelSVG from '../assets/SVG/WheelSVG'

const RewardsPage = () => {
  const {
    state: { wonReward, coupon },
    setState
  } = useAppContext()
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = (close: boolean) => {
    navigator.clipboard.writeText(coupon)

    if (close) {
      setState((prevState) => ({
        ...prevState,
        step: 1
      }))
    } else {
      setIsCopied(true)
    }
  }

  return (
    <div className="p-4 max-w-md sm:max-w-6xl h-screen m-auto">
      <div className="flex items-center justify-center items-center gap-32 h-full sm:flex md:relative md:gap-2 lg:grid lg:grid-flow-col lg:grid-cols-2 lg:place-items-center">
        <ReactConfetti />

        <div className="absolute -top-40 md:absolute md:top-auto md:-left-40 lg:w-96 lg:h-96 lg:relative lg:left-0 lg:top-0 lg:translate-full lg:justify-self-end">
          <WheelSVG />
        </div>

        <div className="w-[300px] sm:w-[270px] grid md:ml-48 lg:ml-0">
          <h1 className="text-xl text-center sm:text-xl md:text-left font-bold sm:leading-snug">
            Congrats! You won:
          </h1>
          <h2 className="text-3xl text-center md:text-2xl md:text-left font-bold sm:leading-snug">
            20% off on {wonReward}
          </h2>

          <div className="w-full h-14 relative mt-4 flex justify-between items-center">
            <div className="bg-bgGray rounded-l-md h-full w-2/3 flex justify-start p-4 items-center text-2xl font-bold">
              <span className="text-white">{coupon}</span>
            </div>
            <Button
              onClick={() => handleCopy(false)}
              className="absolute right-0 text-xl uppercase h-full w-1/3 rounded-r-md rounded-l-none text-white font-bold flex justify-center items-center bg-darkGreen"
            >
              {isCopied ? 'COPIED!' : 'COPY'}
            </Button>
          </div>

          <Button
            className="mt-6 py-3 text-xl"
            onClick={() => handleCopy(true)}
          >
            Close panel & Copy
          </Button>
          <div className="italic text-xs md:text-[10px] md:leading-3 font-light text-black text-center mt-4">
            <span>You can claim the coupon for 10 minutes only! &nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RewardsPage
