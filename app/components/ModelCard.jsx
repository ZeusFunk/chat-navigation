import React from 'react'


function ModelCard({ modelName, description, iconPath, url }) {

    return (
        <a href={url} className=' relative'>
            <img src={iconPath} width={128} height={128} className=' absolute top-4 right-2 blur-xl' />
            <div className="border-1 rounded-2xl h-[200px] flex bg-slate-100 items-center p-6 shadow-lg hover:shadow-2xl hover:bg-white transition duration-300">
                <img src={iconPath} width={64} height={64} />
                <div className='pl-4 h-full m-3'>
                    <div className=' text-2xl font-bold'>{modelName}</div>
                    <div className=' pt-3 text-slate-700 z-10'>{description}</div>
                </div>
            </div>
        </a>
    )
}

export default ModelCard