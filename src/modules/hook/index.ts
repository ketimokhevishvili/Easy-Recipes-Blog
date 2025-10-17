import {useEffect, useState} from "react";

interface IData {
    id: number;
    img: string;
    title: string;
    description: string;
}
const useDataHook = ()=> {

    const [items, setItems] = useState<IData[]>([])
    const [selectedName, setSelectedName] = useState('')



    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data: IData[]) => setItems(data))
            .catch(console.error);
    }, [])
    return{
        items,
        selectedName,
        setSelectedName
    }
}

export default useDataHook
