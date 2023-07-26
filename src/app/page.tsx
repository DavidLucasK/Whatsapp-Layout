import { Search, Users2, Circle, MessageSquare, MoreVertical, ListFilter, ArchiveRestore, Plus, Mic, Laugh} from 'lucide-react'
import React from 'react'

export default function Home() {
  return (
    <div className='ml-[480px] mt-[20px]'>
      <div className="flex">
        <aside>
          <div className='bg-[#222C32] w-[482px] h-[59px]'>
            <div className='flex items-center p-1.5 gap-[15.5rem]'>
              <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Profile" />
              <div className='flex items-center gap-6 text-zinc-200/60'>
                <Users2 size={20}/>
                <Circle size={20}/>
                <MessageSquare size={20}/>
                <MoreVertical size={20}/>
              </div>
            </div>
          </div>
          <div className='bg-[#131B20] w-[482px] h-[42px] flex items-center gap-4'>
            <div className='bg-[#222C32] p-2 rounded-lg w-[420px] h-9 flex items-center ml-3 mt-2'>
              <div className='flex items-center gap-3 text-sm text-zinc-200/60'>
                <Search size={18}/>
                Pesquisar ou começar uma nova conversa
              </div>
            </div>
              <div className='mt-4 inset text-zinc-200/60 mt-[22px]'>
                <ListFilter className="mt-[-16px]" size={20}/>
              </div>
          </div>
          <div className='Conversas'>
          <div className='bg-[#131B20] w-[482px] h-[64px] flex items-center gap-8 text-emerald-600'>
              <ArchiveRestore size={22} className="ml-[24px]"/>
              <div className='text-zinc-50 text-lg'>Arquivadas</div>
          </div>

          <div className='bg-[#131B20] w-[482px] h-[727px] grid border-zinc-700 overflow-y-auto'>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ?
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ?
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ??
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ?
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ?
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ?
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ?
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ?
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ?
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ?
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ??
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t border-b border-zinc-600/30'>
                <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Users" />
                <div className=''>
                    David
                  <div className='flex items-center text-zinc-200 font-normal'>
                    E vc conseguiu ir lá ?
                  </div>
                  <div className='flex '>
                      22:40
                  </div>
                </div>
              </div>
          </div>
          </div>
        </aside>
        <div className='border-l border-zinc-100/20 h-[888px]'></div>
        <main>
          <div className='bg-[#222C32] w-[1118px] h-[59px]'>
          <div className='flex items-center p-1.5 gap-[56rem]'>
            <div className='flex items-center gap-4 font-semibold'>
              <img className='rounded-full w-11 h-11 ml-2' src="eu.png" alt="Profile" />
              David
            </div>
              <div className='flex items-center gap-8 text-zinc-200/60'>
                <Search size={20}/>
                <MoreVertical size={20}/>
              </div>
          </div>
          </div>
          <div className="bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] h-[776px] invert contrast-[1.10]">
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
            <div className='last-icons flex items-center'>
              <Mic />
            </div>
          </div>
          </div>
        </main>
      </div>
    </div>
  )
}
