'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <div className="demo-container">
      <Card className="demo-card w-full h-[600px] md:h-[500px] bg-gradient-to-br from-slate-900 to-purple-900/20 relative overflow-hidden border border-purple-500/20 shadow-2xl">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#a78bfa"
        />
        
        <div className="flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 mb-6">
              Interactive 3D
            </h1>
            <p className="mt-4 text-purple-100 max-w-lg text-lg leading-relaxed">
              Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
              that capture attention and enhance your design.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm text-purple-200 border border-purple-400/30">
                🎨 Modern Design
              </span>
              <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm text-purple-200 border border-purple-400/30">
                ⚡ High Performance
              </span>
              <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm text-purple-200 border border-purple-400/30">
                🚀 Interactive
              </span>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative bg-gradient-to-br from-purple-900/30 to-transparent rounded-r-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-r-2xl"></div>
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full relative z-10"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
