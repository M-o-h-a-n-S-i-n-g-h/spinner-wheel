import React from 'react'

import topLeafImg from '../assets/images/topImg.png'
import bottomLeafImg from '../assets/images/bottomImg.png'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen h-screen bg-lightGreen">
      <div className="absolute left-0 top-0 lg:opacity-50">
        <img src={topLeafImg} width="100%" height="100%" alt="Image" />
      </div>

      <div className="relative z-50">{children}</div>

      <div className="absolute left-0 bottom-0 lg:opacity-50">
        <img src={bottomLeafImg} width="100%" height="100%" alt="Image" />
      </div>
    </div>
  )
}

export default Layout
