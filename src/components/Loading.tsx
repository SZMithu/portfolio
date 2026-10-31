import { useProgress } from '@react-three/drei'
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export const Loading = () => {
  const { progress, active } = useProgress()
  const [isFinished, setIsFinished] = useState(false)

  // Create a spring-animated value for the progress
  const springProgress = useSpring(0, {
    stiffness: 20, // Lower = Slower
    damping: 80,   // Smooths out the bounce
  })

  // Sync the spring with the actual progress
  useEffect(() => {
    springProgress.set(progress)
  }, [progress, springProgress])

  // Create a whole number for the display
  const displayValue = useTransform(springProgress, (latest) => Math.round(latest))

  // Manual delay: Only mark as "finished" after 100% + a small buffer
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setIsFinished(true), 1000) // 500ms delay at 100%
      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <AnimatePresence>
      {(!isFinished || active) && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }} // Slide up slightly when disappearing
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
        >
          <div className="relative">
            {/* Animated Number */}
            <motion.span className="text-white text-8xl font-mono font-bold">
              {/* This renders the motion value directly */}
              <Counter value={displayValue} />
            </motion.span>
            <span className="text-primary text-4xl font-mono">%</span>
          </div>

          <div className="w-48 h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              style={{ width: `${progress}%` }} // Actual progress for the bar
              transition={{ type: "spring", stiffness: 50 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Helper component to render the animated motion value
const Counter = ({ value }: { value: any }) => {
  const [count, setCount] = useState(0)
  useEffect(() => value.on("change", (latest: number) => setCount(latest)), [value])
  return <>{count}</>
}
