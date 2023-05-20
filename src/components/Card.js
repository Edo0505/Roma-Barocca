import React from 'react'
import profiloImg from '../components/imgslider/fotoUscita/Profilo.jpg'
const Card = ({titolo,data,classi,mete,ore}) => {
  return (
    <div className='p-5'>
        <div className="transition ease-in-out delay-75 w-80 text-center overflow-hidden shadow-md rounded-md hover:shadow-2xl card">
            <div className=''>
                {titolo} {data}
            </div>
            <p>Organizzata dalle classi: {classi}</p>  
            <img src={profiloImg} alt='profilo' className='mx-auto'></img>
            <p>
                Tour:<br></br>
                {mete.map((meta,key)=><p className='text-left'>
                    {(key+1+" ")+ore[key]+" "+meta}
                </p>    
                )}
            </p>    
        </div>
    </div>
  )
}

export default Card;