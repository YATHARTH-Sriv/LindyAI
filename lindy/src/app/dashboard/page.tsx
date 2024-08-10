"use client"
import { BentoGridSecondDemo} from '@/components/helpers/column'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'

const navigation=[
  {
    title: "Yatharth Srivastava",
    
  },
  {
    title: "Home",
    
  },
  {
    title: "Lindies",
    
  }
]

const second=[
  {
    title: "Create Your Own",
    
  },
{
  title :"Create your own Lindy to automate your worklife"
}
]

function Dashboard() {
  return (
    <div className=" overflow scrollbar-hide h-screen w-screen bg-gradient-to-r from-rose-100 to-teal-100  grid grid-cols-12">
      <div id="leftcolumn" className="h-screen col-span-3  text-black  ">
      <ul className="  bg-white rounded-md m-3 p-3 flex-row  text-sm   ">
        {navigation.map(items=>
          (<li key={items.title} className="flex gap-4 hover:bg-slate-400 rounded-md px-3 py-3 w-fit h-fit ">
            {/* <Link href={items.link} className=" flex gap-4 "> */}
            <p className=" text-sm">{items.title}</p>
            {/* </Link> */}
          </li>)
        )}
      </ul>
      <p className=' text-sm p-2 m-2'>Just a developer trying to build something good for the world this is a Lindy Ai Assistant to automate your worklife I will try to add more things to project</p>
      <Link href={'/chatwebsite'}>
      <Button className=' m-5 bg-white p-2 w-fit h-fit' >Create a Lindy +</Button>
      </Link>
      </div>


      <div id="feed" className="overflow-y-auto border-t-2 border-r-2 border-l-2 col-span-6 text-white scrollbar-hide">
        <div className=" grid gap-2 border-b-2 mt-3 ml-2  p-2 m-3">
             <div className=" text-black text-col-span-1">
              Welcome Yatharth Srivastava
             </div>
             <div className=" mt-2 p-4 grid  bg-blue-300 rounded-md text-black w-full col-span-11">
              <p>Get started with Personal Assistant</p>
              <ul className="text-white p-3 mt-2 flex justify-between">
  <li>
    <div className="text-black">Meeting Scheduler</div>
    <div>Want to schedule</div>
    <div>your meeting with</div>
    <div>your Google Calendar</div>
  </li>
  <li>
    <div className="text-black">Meeting Note Taker</div>
    <div>Want to take notes</div>
    <div>with your meeting</div>
  </li>
  <li>
    <div className="text-black">Email Drafter</div>
    <div>Want to schedule your meeting</div>
    <div>with your Google Calendar</div>
  </li>
</ul>

              <Link href={'/meetingscheduler'}>
              <Button className=' bg-white p-2 w-fit h-fit' >+ Get 3 Lindies</Button>
              </Link>
             </div>
             
             
  
             <div>

             </div>
          
          </div>
        <section className=" m-2 ">
          <BentoGridSecondDemo />
        </section>  
      </div>




      <div id="sidebar" className=" m-4 col-span-3 ">
      <ul className=" bg-white rounded-md m-3 p-3 flex-row mt-1 text-sm pl-3 ml-4">
        {second.map(items=>
          (<li key={items.title} className="    flex gap-4 hover:bg-slate-400 rounded-md px-3 py-3 w-fit h-fit ">
            {/* <Link href={items.link} className=" flex gap-4 "> */}
            <p className=" text-sm">{items.title}</p>
            {/* </Link> */}
          </li>)
        )}
      </ul>

      <Link href={'/meetingscheduler'}>
      <Button className=' m-5 bg-blue-400 text-white p-2 w-fit h-fit'>New Lindy</Button>
      </Link>
      </div>
    </div>
  )
}

export default Dashboard