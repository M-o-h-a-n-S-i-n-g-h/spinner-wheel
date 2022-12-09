import { useRef, useState } from 'react'
import { useAppContext } from '../context/AppContext'

import Button from '../components/Button'

import { getRandomCoupon } from '../utils/getRandomCoupon'

import spinnerImg from '../assets/images/pointer.png'
import wheelImg from '../assets/images/wheel.png'
import spinAudio from '../assets/audio/spin.mp3'

const options = [
  '30% sitewide off',
  'Buy 1 get 1 free',
  'Free Coffee mug on purchase of $1000',
  'Buy 2 Effervescent tablets and get 1 free',
  'Free 50g Team on purchase of Rs.500',
  'Hot chocolate free with tea'
]

let angle = 0
const DELAY_SECONDS = 4

const GamePage = () => {
  const wheelRef = useRef<HTMLImageElement>(null)
  const [disabled, setDisabled] = useState(false)
  const [audio] = useState(new Audio(spinAudio))

  const { setState } = useAppContext()

  const playSound = () => {
    audio.play()
  }

  const spinWheel = () => {
    angle = Math.ceil(5000 + Math.random() * 5000)
    setDisabled(true)
    playSound()

    const wheel = wheelRef.current
    if (wheel) {
      wheel.style.transform = `rotate(${angle}deg)`
      wheel.style.transition = `transform ${DELAY_SECONDS}s ease-out`
      wheel.style.filter = 'blur(5px)'
    }

    setTimeout(() => {
      setDisabled(false)
    }, DELAY_SECONDS * 1000)
  }

  const handleTransitionEnd = () => {
    const wheel = wheelRef.current

    if (wheel) {
      const actualDeg = Math.ceil(angle % 360)
      const optionIndex = actualDeg / (360 / options.length)
      const option = options[Math.floor(optionIndex)]

      wheel.style.transition = 'none'
      wheel.style.filter = 'blur(0px)'
      wheel.style.transform = `rotate(${-Math.floor(actualDeg / 60) * 60}deg)`
      audio.pause()
      audio.currentTime = 0

      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          step: 3,
          wonReward: option,
          coupon: getRandomCoupon(8).toUpperCase()
        }))
      }, 2000)
    }
  }

  return (
    <div className="flex items-center flex-col h-screen justify-center">
      <div className="relative">
        <img
          onTransitionEnd={handleTransitionEnd}
          src={wheelImg}
          ref={wheelRef}
          alt="wheel"
          className="w-[100%] h-[100%] md:w-[480px] md:h-[460px]"
        />
        <img
          src={spinnerImg}
          alt="spinner"
          className="absolute top-1/2 w-12 md:w-14 md:h-15 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <Button
        disabled={disabled}
        onClick={spinWheel}
        className="px-10 py-4 mt-10"
      >
        {disabled ? 'Guess your best' : 'SPIN'}
      </Button>
    </div>
  )
}

export default GamePage
