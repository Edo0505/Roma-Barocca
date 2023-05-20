import React from 'react'
const text="Benvenuti nel sito Roma Barocca, questo sito permetterà di visualizzare le uscite che faremo negli anni scolastici, per adesso è adattato alla visualizzazione dell'uscita Roma Barocca, un progetto creato da alcuni professori del plesso Grottaferrata dell'IIS Enzo Ferrari.In alto troverete alcune informazioni riguardanti l'unica uscita di questo progetto, con link a spotify, audio-guide e un video riassunto cronologico che rispecchierà la card in fondo al sito, per qualsiasi ulteriore sviluppo oltre a vederlo da questo questo indirizzo sarà disponibile al link del mio github. Buona Visione";
const TextImage = () => {
  return (
    <div className='text-center align-top text-white md:mx-40'>
        <span className='font-serif text-6xl'>
            About this project
        </span>
        <hr className='m-7'></hr>
        <p className='px-7 text-center justify-center items-center'>
            {text}
        </p>
    </div>
  )
};

export default TextImage;
