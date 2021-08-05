import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import useInput from "../../hooks/useInput"
import useInputNumber from "../../hooks/useInputNumber"
import { createProductAction } from "../../store/products/actions"


const ProductCreate = ()=>{

    const [name, setName] = useInput("")
    const [price, setPrice] = useInputNumber(0)
    const [description, setDescription] = useInput("")
    const [color, setColor] = useInput("")
    const dispatch = useDispatch()
    const history = useHistory()
    const handlerSave = (event: any) =>{
        event.preventDefault()
        dispatch(createProductAction({
            id: new Date().getTime(),
            name,
            price,
            description,
            color
        }))
        history.push("/products")
        
    }

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Nuevo Producto
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/products">Listado</Link>
                        </div>
                    </div>
                    <form onSubmit={handlerSave}>
                        <div className="card-body">
                            <label>Nombre</label>
                            <input className="form-control" type="text" value={name} onChange={setName} />
                            <label>Precio</label>
                            <input className="form-control" type="number" value={price} onChange={setPrice} />
                            <label>Descripción</label>
                            <input className="form-control" type="text" value={description} onChange={setDescription} />
                            <label>Color</label>
                            <input className="form-control" type="text" value={color} onChange={setColor} />
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
    )
}

export default ProductCreate