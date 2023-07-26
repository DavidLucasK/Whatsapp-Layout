import { Search, Users2, Circle, MessageSquare, MoreVertical, ListFilter, ArchiveRestore, Plus, Mic, Laugh} from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className='ml-[480px] mt-[20px]'>
      <div className="flex">
        <Sidebar />
        <div className='border-l border-zinc-100/20 h-[888px]'></div>
        <main>
          <div className='bg-[#222C32] w-[1118px] h-[59px]'>
          <div className='flex items-center p-1.5 gap-[56rem]'>
            <div className='flex items-center gap-4 font-semibold'>
              <a href="#">
                <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Profile" />
              </a>
              David
            </div>
              <div className='flex items-center gap-8 text-zinc-200/60'>
                <Search size={20}/>
                <MoreVertical size={20}/>
              </div>
          </div>
          </div>
          <div className="bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] h-[776px] invert contrast-[1.1]">
          </div>
          <div className='bg-[#222C32] w-[1118px] h-[59px] flex items-center'>
          <div className='flex items-center justify-between ml-4 gap-6'>
            <div className='first-icons flex items-center gap-4'>
              <Laugh />
              <Plus />
            </div>
            <div className='bg-[#2e3b42] p-2 rounded-lg w-[948px] h-[40px] flex items-center'>
                <div className='flex items-center p-2 text-sm text-zinc-200/60'>
                  Mensagem
                </div>
            </div>
            <div className='flex items-center ml-[-6px]'>
              <Mic />
            </div>
          </div>
          </div>
        </main>
      </div>
    </div>
  )
}
