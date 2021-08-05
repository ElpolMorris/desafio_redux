import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { productListSelector } from "../../store/products/selectors"

const ProductDetail = ()=>{
    
    const {id}:any = useParams()
    const productList = useSelector(productListSelector)
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")   
    const [color, setColor] = useState("") 
    useEffect(() => {
        const p = productList.find(e => e.id === +id)
        if(p){
            setName(p.name)
            setPrice(p.price)
            setDescription(p.description)
            setColor(p.color)
        }
    }, [id,productList])

    return productList.find(e => e.id === +id) ? (
        <div className="row">
            <div className="col-4 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <ul className="list-group">
                            <h6 className="text-center">Producto: {name}</h6>
                            <li className="list-group-item">cod: {id}</li>
                            <li className="list-group-item">Precio: ${price}</li>
                            <li className="list-group-item">Descripción: {description}</li>
                            <li className="list-group-item">Color: {color}</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <Link className="text-center" to="/products">Volver</Link>
        </div>
    ) : (
            <div>Loading...</div>
        )
}

export default ProductDetail