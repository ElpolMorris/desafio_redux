import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import useInput from "../../hooks/useInput"
import useInputNumber from "../../hooks/useInputNumber"
import { updateProductAction } from "../../store/products/actions"
import { productListSelector } from "../../store/products/selectors"


const ProductUpdate = ()=>{
    const [name, handlerName, setName] = useInput("")
    const [price,handlerPrice, setPrice] = useInputNumber(0)
    const [description,handlerDescription, setDescription] = useInput("")
    const [color,handlerColor, setColor] = useInput("")
    const dispatch = useDispatch()
    const productList = useSelector(productListSelector)
    const {id}:any = useParams()
    const history = useHistory()
    useEffect(() => {
    //     
        const pl = productList.find(({id: idProduct}) => idProduct === +id)
        
        if(pl){
            setColor(pl.color)
            setName(pl.name)
            setPrice(pl.price)
            setDescription(pl.description)
        }
    }, [id,productList,setColor,setName,setPrice,setDescription])
    const handlerSave = (e: any)=>{
        e.preventDefault()
        
        dispatch(updateProductAction({
            id: +id,
            name,
            price,
            description,
            color
        }))
        history.push("/products")
    }

    return productList.find(e => e.id === +id) ? (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Nuevo Producto
                        
                    </div>
                    <form onSubmit={handlerSave}>
                        <div className="card-body">
                            <label>Nombre</label>
                            <input className="form-control" disabled type="text" value={id}/>
                            <label>Nombre</label>
                            <input className="form-control" type="text" value={name} onChange={handlerName} />
                            <label>Precio</label>
                            <input className="form-control" type="number" value={price} onChange={handlerPrice} />
                            <label>Descripción</label>
                            <input className="form-control" type="text" value={description} onChange={handlerDescription} />
                            <label>Color</label>
                            <input className="form-control" type="text" value={color} onChange={handlerColor} />
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-primary mt-3"
                                disabled={name === '' || price === '' || description === '' || color === ''}
                            >Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ): (
        <div>Loading...</div>
    )
} 
export default ProductUpdate