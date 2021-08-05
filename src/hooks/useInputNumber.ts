import { useState } from "react"


const useInputNumber = (initialState: number) =>{
    const [number, setNumber] = useState<any>(initialState)
    const handlerChange = (event: any) => {
        setNumber(event.target.value)
    }
    return [number, handlerChange, setNumber]
}

export default useInputNumber