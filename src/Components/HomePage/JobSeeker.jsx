import React from 'react'

function JobSeeker() {
  return (
    <div className='mt-[152px] w-full h-fit grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center p-8'>
        <img className='max-h-[534.05px] left-[64px]' src="../Images/Frame.png" alt="Circles" />
        <div className='w-[220px] circle-job'>
            <h1 className='h-[24px] font-bold text-[36px] leading-6 tracking-tighter'>Job Seekers</h1>
        <div className='mt-[65px]'>
          <div className='h-[3px] w-[38px] bg-[#635EA3] leading-6 tracking-tighter text-[16px]'></div>
          <p className='pt-[6px] w-full'>Apply for a job with one click after completing your profile</p>
        </div>
        <div className='mt-[35px]'>
          <div className='h-[3px] w-[38px] bg-[#635EA3] leading-6 tracking-tighter text-[16px]'></div>
          <p className='pt-[6px] w-full'>Free CV templates- Many to choose from</p>
        </div>
        <div className='mt-[35px]'>
          <div className='h-[3px] w-[38px] bg-[#635EA3] leading-6 tracking-tighter text-[16px]'></div>
          <p className='pt-[6px] w-full'>Free exports to pdf</p>
        </div>
        <div className='mt-[35px]'>
          <div className='h-[3px] w-[38px] bg-[#635EA3] leading-6 tracking-tighter text-[16px]'></div>
          <p className='pt-[6px] w-full'>Free profile and access to jobs</p>
        </div>
        </div>
    </div>
  )
}

export default JobSeeker