import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import {useGlobalContext} from '../context';
import {AiFillGithub} from 'react-icons/ai';
import {FaSchool} from 'react-icons/fa';
const linkSpotify='https://open.spotify.com/playlist/4DvteColbVCrs7iIgc4r6x?si=yPwnUK02TG67O3qpR2-yNw&utm_source=copy-link&nd=1';
const Nav = () => {
    const {openSidebar} = useGlobalContext();
  return (
    <div className='flex mx-5 shadow-md'>
        <div className='transition ease-in-out rounded-lg p-7 cursor-pointer hover:shadow-2xl hover:text-blue-700'>
            Roma Barocca
        </div>
        <div className='mx-auto'>
            <ul className='list-none hidden lg:flex'>
                <a href="Audio guide Chiesa del Gesù.pdf" download='Audio-guide'><li className='transition ease-in-out rounded-lg p-7 cursor-pointer mx-10  hover:shadow-2xl hover:text-yellow-400'>Audio-guide</li></a> 
                <a href={linkSpotify} target='_blank' rel="noreferrer"><li className='transition ease-in-out rounded-lg p-7 cursor-pointer mx-10 hover:shadow-2xl hover:text-green-700'>Spotify</li></a>
                <a href="Video-Riassunto.mp4" download='Video-Riassunto.mp4'><li className='transition ease-in-out rounded-lg p-7 cursor-pointer mx-10 hover:shadow-2xl hover:text-red-600'>Video-Riassunto</li></a>
            </ul>
        </div>
        <div className='hidden lg:flex'>
            <a href="https://github.com/Edo0505/Roma-Barocca" target='_blank' rel="noreferrer"><AiFillGithub className='scale-150 m-7 cursor-pointer'/></a> 
            <a href='https://www.iisenzoferrari.edu.it/' target='_blank' rel="noreferrer"><FaSchool className='scale-150 m-7 mr-10 cursor-pointer'/></a>
        </div>
        <button className='p-7 lg:hidden' onClick={openSidebar}>
                <AiOutlineMenu className='transition ease-in-out scale-125 hover:-rotate-90'/>
        </button>
    </div>
  )
}

export default Nav;