import { Search, Users2, Circle, MessageSquare, MoreVertical, ListFilter, ArchiveRestore, Plus, Mic, Laugh, Pin} from 'lucide-react'
import Image from 'next/image'

export function Sidebar () {
    return  (
        <aside>
          <div className='bg-[#222C32] w-[482px] h-[59px] px-2'>
            <div className='flex items-center p-1.5 space-x-56'>
                <a href="#">
                    <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Profile" />
                </a>
              <div className='flex items-center gap-8 text-zinc-200/60'>
                <a href="#">
                  <Users2 size={20}/>
                </a>
                <a href="#">
                  <Circle size={20}/>
                </a>
                <a href="#">
                  <MessageSquare size={20}/>
                </a>
                <a href="#">
                  <MoreVertical size={20}/>
                </a>
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
          <div className='bg-[#131B20] w-[482px] h-[794px] px-2 grid border-zinc-700 overflow-y-auto overflow-x-hidden'>
            <a href="">
              <div className='bg-[#131B20] h-[58px] px-6 flex items-center gap-8 text-zinc-100 border-b border-zinc-600/30 '>
                <ArchiveRestore size={20} className="text-emerald-600"/>
                <div className='text-zinc-50 text-[17px]'>Arquivadas</div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      14:18
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className='bg-[#131B20] h-[74px] px-2 flex items-center space-x-64 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
                <div className='flex items-center select-none gap-6'>
                  <Image className='rounded-full w-11 h-11 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                  <div className='gap- text-zinc-200 font-normal'>
                    <div className='font-semibold'>Amor</div>
                    <div>Mensagem</div>
                  </div>
                </div>
                <div className='font-normal text-xs text-zinc-200/60 select-none'>
                      Ontem
                      <div className='mt-1 ml-2.5'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
            </a>
          </div>
          </div>
        </aside>
    )
}