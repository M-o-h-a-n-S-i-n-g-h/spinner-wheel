import Confetti from 'react-confetti'

const ReactConfetti = () => {
  return (
    <div className="absolute top-0 -left-100 w-screen">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={4000}
        recycle={false}
        gravity={0.1}
      />
    </div>
  )
}

export default ReactConfetti
