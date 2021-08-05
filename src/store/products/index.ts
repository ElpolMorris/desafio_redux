const initialState = {
    data: [{id:1,name:"naranja",price:200,description:"fruta",color:"orange"},{id:2,name:"manzana",price:700,description:"fruta",color:"green"}],
}

const reducerListProd = (prevState=initialState,action:{payload: any,type:string})=>{
    switch (action.type) {
        case "PRODUCT_CREATE":
            return {
                data: [...prevState.data,action.payload]
            }
        case "PRODUCT_DELETE":
            return {
                data: prevState.data.filter((p: any) => p.id !== action.payload)
            }
        case "PRODUCT_UPDATE":
            return {
                data: prevState.data.map((p: any)=>{
                    if (p.id === action.payload.id) return action.payload
                    return p
                })
            }    
        default:
            return prevState;
    }
}

export default reducerListProd