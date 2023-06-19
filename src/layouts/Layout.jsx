import { Outlet } from 'react-router-dom'
import Resumen from '../components/Resumen'
import Sidebar from '../components/Sidebar'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import useQuiosco from '../hooks/useQuiosco'
import { useAuth } from '../hooks/useAuth'
import ModalProducto from '../components/ModalProducto'

export default function layout() {
  useAuth({middleware: 'auth'})
  const { modal } = useQuiosco();
  return (
    <>
      <div className='md:flex'>
        <Sidebar />

        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          <Outlet />
        </main>
        
        <Resumen />
      </div>
      {modal ? <ModalProducto /> : null}
      <ToastContainer />
    </>
  )
}
