import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteProductAction } from "../../store/products/actions"
import { productListSelector } from "../../store/products/selectors"

const ProductList = ()=>{
    const productList = useSelector(productListSelector)
    const dispatch = useDispatch()

    const handlerDelete = (id: any)=>{
        dispatch(deleteProductAction(id))
    }

    return (
        <div>
            <h1>ProductList</h1>
            {productList.length > 0 ? (<table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Precio</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>color</th>
                                    <th className="text-end">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {productList.map((p: any) => (
                                    <tr key={p.id}>
                                        <td>
                                            <div className="badge bg-dark">
                                                {p.id}
                                            </div>
                                        </td>
                                        <td>{p.price}</td>
                                        <td>{p.name}</td>
                                        <td>{p.description}</td>
                                        <td>{p.color}</td>
                                        <td className="text-end">
                                            <div className="btn-group">
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handlerDelete(p.id)}
                                                >eliminar</button>
                                                <Link
                                                    className="btn btn-sm btn-primary"
                                                    to={`/products/detail/${p.id}`}
                                                >detalle</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>) : (
                                <div className="alert alert-danger">
                                    No existen elementos
                                </div>
                            )}
        </div>
    )
}

export default ProductList