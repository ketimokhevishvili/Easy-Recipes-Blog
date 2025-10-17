import useDataHook from "../hook";


const CoreComponent = () => {
    const hook = useDataHook()
    return(
        <div className='p-4 '>
            <h1 className='text-2xl font-bold mb-6 text-center'>Core Component</h1>
            <div className='flex flex-wrap gap-6 justify-center'>
                {hook.items.map(el => {
                    return (
                        <div className='flex flex-col items-center w-60 bg-purple-300 p-4 rounded shadow' key={el.id}>
                            <img className=' w-24 h-24 object-cover rounded mb-3 ' src={el.img} alt={'title'}/>
                            <h3 className='text-lg font-semibold mb-1 text-center'>{el.title}</h3>
                            <p className='text-sm text-gray-700 text-center'>{el.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CoreComponent;
