import React from 'react'
import { Zap, CircleCheck } from 'lucide-react';

const statsgrid = ({totalTodos, ActiveTodos, completedTodos}) => {
  
  return (
    <>
      <div className='grid grid-cols-3 gap-3 mb-4'>

        <div className='backdrop-blur-2xl bg-linear-to-br from-violet-500/20 to-purple-500/20  rounded-2xl border border-violet-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer'>
          <div className='flex items-center gap-2 mb-1'>
            <Zap size={16} className='text-violet-400' />
            <span className='text-violet-300 text-xs font-semibold'>Total</span>
          </div>
          <div className='text-2xl font-black text-white'>{totalTodos}</div>
        </div>

        <div className='backdrop-blur-2xl bg-linear-to-br from-violet-500/20 to-purple-500/20  rounded-2xl border border-violet-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer'>
          <div className='flex items-center gap-2 mb-1'>
            <div className='w-4 h-4 rounded-full border-2 border-blue-400'></div>
            <span className='text-violet-300 text-xs font-semibold'>Active</span>
          </div>
          <div className='text-2xl font-black text-white'>{ActiveTodos}</div>
        </div>

        <div className='backdrop-blur-2xl bg-linear-to-br from-violet-500/20 to-purple-500/20  rounded-2xl border border-violet-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer'>
          <div className='flex items-center gap-2 mb-1'>
            <CircleCheck size={16} className='text-violet-400' />
            <span className='text-violet-300 text-xs font-semibold'>Done</span>
          </div>
          <div className='text-2xl font-black text-white'>{completedTodos}</div>
        </div>

      </div>
    </>
  )
}

export default statsgrid