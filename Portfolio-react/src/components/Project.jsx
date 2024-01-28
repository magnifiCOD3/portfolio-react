import React from 'react'
import ProjectItem from './ProjectItem'
import laptopImg from '../assets/laptop.jpg'

const Project = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl  font-bold text-center text-[#001b5e]'>Project</h1>
        <p className='text-center py-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={laptopImg} title='Responsive Website' />
            <ProjectItem img={laptopImg} title='Future Porject' />
            <ProjectItem img={laptopImg} title='On Process' />
            <ProjectItem img={laptopImg} title='Ongoing Project' />
        </div>
    </div>
  )
}

export default Project