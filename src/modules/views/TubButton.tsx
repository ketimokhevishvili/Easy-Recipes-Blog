import useDataHook from "../hook";


const TubButton = () => {
    const hook = useDataHook()
    let tabContent = <p>დააჭირეთ ღილაკს</p>


    if (hook.selectedName){
        const filteredItem = hook.items.find(el  => el.title === hook.selectedName)
        if (filteredItem){
            tabContent = (
                <div className='mt-4 p-4 rounded shadow'>
                    <h6 className='text-sm font-semibold'>{filteredItem.title}</h6>
                    <p className='text-lg font-semibold'>{filteredItem.description}</p>
                </div>
            )
        }
    }
    return (
        <div className='p-8 '>
            <h1>Examples</h1>
            {hook.items.map(el =>
                <div className='flex md:inline-flex' key={el.id}>
                    <div className='p-2' key={el.id}>
                        <button className='px-4 py-2 rounded-2xl hover:bg-purple-900 active:bg-blue-700 transition' onClick={() => hook.setSelectedName(el.title)}>{el.title}</button>
                    </div>
                </div>
            )
            }
            {tabContent}
        </div>
    )
}

export default TubButton;
