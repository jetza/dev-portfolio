'use client';
import { motion } from 'framer-motion';

export default function MiniQRCodeCard() {
  return (
    <div className="relative h-full flex items-center justify-center p-6 text-white z-10">
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-12 bg-gradient-to-b from-transparent via-lime-400/50 to-transparent blur-sm"
        />
      </div>

      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 z-10">
        <div className="relative">
          <motion.div 
            className="grid grid-cols-7 gap-1.5 scale-75 relative z-10"
            animate={{
              opacity: [0.8, 1, 0.8],
              x: [0, -2, 2, 0],
            }}
            transition={{ 
              opacity: { duration: 2, repeat: Infinity },
              x: { duration: 0.2, repeat: Infinity, repeatDelay: 3 }
            }}
          >
            {/* Glitch clone - cyan */}
            <motion.div 
              className="absolute inset-0 grid grid-cols-7 gap-1.5 opacity-0"
              animate={{
                opacity: [0, 0.5, 0],
                x: [-3, -2, -3]
              }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
            >
              {/* Row 1 - Top left positioning square */}
              <div className="col-span-2 row-span-2 border-2 border-cyan-400 rounded p-0.5">
                <div className="w-full h-full bg-cyan-400 rounded-sm" />
              </div>
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3" />
              {/* Top right positioning square */}
              <div className="col-span-2 row-span-2 border-2 border-cyan-400 rounded p-0.5">
                <div className="w-full h-full bg-cyan-400 rounded-sm" />
              </div>
              
              {/* Row 2 */}
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3" />
              
              {/* Row 3 - Middle pattern */}
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3" />
              
              {/* Row 4 */}
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              
              {/* Row 5 - Bottom left positioning square */}
              <div className="col-span-2 row-span-2 border-2 border-cyan-400 rounded p-0.5">
                <div className="w-full h-full bg-cyan-400 rounded-sm" />
              </div>
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              
              {/* Row 6 */}
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
              <div className="w-3 h-3" />
            </motion.div>
            
            {/* Glitch clone - magenta */}
            <motion.div 
              className="absolute inset-0 grid grid-cols-7 gap-1.5 opacity-0"
              animate={{
                opacity: [0, 0.5, 0],
                x: [3, 2, 3]
              }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3, delay: 0.1 }}
            >
              {/* Row 1 - Top left positioning square */}
              <div className="col-span-2 row-span-2 border-2 border-magenta-500 rounded p-0.5">
                <div className="w-full h-full bg-magenta-500 rounded-sm" />
              </div>
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3" />
              {/* Top right positioning square */}
              <div className="col-span-2 row-span-2 border-2 border-magenta-500 rounded p-0.5">
                <div className="w-full h-full bg-magenta-500 rounded-sm" />
              </div>
              
              {/* Row 2 */}
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3" />
              
              {/* Row 3 - Middle pattern */}
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3" />
              
              {/* Row 4 */}
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              
              {/* Row 5 - Bottom left positioning square */}
              <div className="col-span-2 row-span-2 border-2 border-magenta-500 rounded p-0.5">
                <div className="w-full h-full bg-magenta-500 rounded-sm" />
              </div>
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              
              {/* Row 6 */}
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3" />
              <div className="w-3 h-3 bg-magenta-500 rounded-sm" />
              <div className="w-3 h-3" />
            </motion.div>
            
            {/* Main QR code - lime */}
            {/* Row 1 - Top left positioning square */}
            <div className="col-span-2 row-span-2 border-2 border-lime-400 rounded p-0.5">
              <div className="w-full h-full bg-lime-400 rounded-sm" />
            </div>
            <div className="w-3 h-3" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3" />
            {/* Top right positioning square */}
            <div className="col-span-2 row-span-2 border-2 border-lime-400 rounded p-0.5">
              <div className="w-full h-full bg-lime-400 rounded-sm" />
            </div>
            
            {/* Row 2 */}
            <div className="w-3 h-3" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3" />
            
            {/* Row 3 - Middle pattern */}
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3" />
            
            {/* Row 4 */}
            <div className="w-3 h-3" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            
            {/* Row 5 - Bottom left positioning square */}
            <div className="col-span-2 row-span-2 border-2 border-lime-400 rounded p-0.5">
              <div className="w-full h-full bg-lime-400 rounded-sm" />
            </div>
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            
            {/* Row 6 */}
            <div className="w-3 h-3" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3" />
            <div className="w-3 h-3 bg-lime-400 rounded-sm" />
            <div className="w-3 h-3" />
          </motion.div>
        </div>

        <motion.div
          animate={{ 
            opacity: [0.7, 1, 0.7],
            textShadow: [
              '0 0 10px rgba(163,230,53,0.5)',
              '0 0 20px rgba(163,230,53,0.8)',
              '0 0 10px rgba(163,230,53,0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-lime-400 font-black text-lg tracking-wider"
        >
          CLICK TO SCAN
        </motion.div>
      </div>
    </div>
  );
}
