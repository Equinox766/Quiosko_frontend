import { useState, useEffect } from "react";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

export default function ModalProducto() {
  const { producto, handleClickModal, handleAgregarPedido, pedido } = useQuiosco();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if(pedido.some( pedidoState => pedidoState.id === producto.id)) {
      const productoEdicion = pedido.filter( pedidoState => pedidoState.id === producto.id )[0]
      setCantidad(productoEdicion.cantidad)
      setEdicion(true)
    }
  }, [pedido])
  
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="relative p-6 flex-auto">
              <div className="md:flex gap-10">
                <div className="md:w-1/3">
                  <img
                    src={`/img/${producto.imagen}.jpg`}
                    alt={`Imagen Producto ${producto.nombre}`}
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex justify-end">
                    <button onClick={handleClickModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <h1 className="mt-5 font-bold text-3xl">{producto.nombre}</h1>
                  <p className="mt-5 font-bold text-5xl text-amber-500">
                    {formatearDinero(producto.precio)}
                  </p>
                  <div className="flex gap-4 mt-5">
                    <button
                      type="button"
                      onClick={() => {
                        if (cantidad <= 1) return;
                        setCantidad(cantidad - 1);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <p className="text-3xl">{cantidad}</p>
                    <button
                      type="button"
                      onClick={() => {
                        if (cantidad >= 5) return;
                        setCantidad(cantidad + 1);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                    onClick={() => {
                      handleAgregarPedido({...producto, cantidad})
                      handleClickModal()
                    }}
                  >
                    {edicion ? 'Guardar Cambios': 'Añadir al Pedido'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
