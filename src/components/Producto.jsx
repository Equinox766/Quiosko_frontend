/* eslint-disable react/prop-types */
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
export default function Producto({
  producto,
  botonAgregar = false,
  botonDisponible = false,
}) {
  const { handleClickModal, handleSetProducto, handleClickProductoAgotado} = useQuiosco();
  const { imagen, nombre, precio } = producto;
  return (
    <div className="border p-3 bg-white">
      <img
        src={`/img/${imagen}.jpg`}
        alt={`Imagen ${nombre}`}
        className="w-full"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-3xl text-amber-500">
          {formatearDinero(precio)}
        </p>
      </div>
      {botonAgregar && (
          <button
          type="button"
          onClick={() => {
            handleClickModal();
            handleSetProducto(producto);
          }}
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
        >
          Agregar
        </button>
      )}
      {botonDisponible && (
          <button
          type="button"
          onClick={() => {
            handleClickProductoAgotado(producto.id)
          }}
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
        >
          Producto Agotado
        </button>
      )}
    </div>
  );
}
