import { Search, Users2, Circle, MessageSquare, MoreVertical, ListFilter, ArchiveRestore, Plus, Mic, Laugh, Pin} from 'lucide-react'
import Image from 'next/image'

export function Sidebar () {
    return  (
        <aside>
          <div className='bg-[#222C32] w-[482px] h-[59px]'>
            <div className='flex items-center p-1.5 gap-[15.5rem]'>
                <a href="#">
                    <Image className='rounded-full w-11 h-11 ml-2' src="/eu.png" width={500} height={500} alt="Profile" />
                </a>
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

          <div className='bg-[#131B20] w-[482px] h-[727px] grid border-zinc-700 overflow-y-auto overflow-x-hidden'>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Amor
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-[224px] right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Ricardo Trabalho
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Valeu
                  </div>
                </div>
                <div className='relative top-0 left-[180px] right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Grupo1
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Grupo2
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Grupo3
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Pedro
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Grupo
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Grupo
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Grupo
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Grupo
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Grupo
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Grupo
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Grupo
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
              <div className='bg-[#131B20] h-[74px] flex items-center gap-6 text-zinc-100 font-semibold border-t-[1px] border-b border-zinc-600/30 hover:bg-[#1d2a31]'>
              <Image className='rounded-full w-11 h-11 ml-2 contrast-[.25]' src="/user.png" width={500} height={500} alt="Users" />
                <div className=''>
                    Grupo4
                  <div className='flex items-center text-zinc-200 font-normal'>
                    Mensagem
                  </div>
                </div>
                <div className='relative top-0 left-56 right-0 font-normal text-xs text-zinc-200/60 grid'>
                      Ontem
                      <div className='mt-1 ml-3'>
                        <Pin size={16}/>
                      </div>
                </div>
              </div>
          </div>
          </div>
        </aside>
    )
}