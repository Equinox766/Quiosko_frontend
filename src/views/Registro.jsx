import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Alerta from '../components/Alerta'

export default function Registro() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const { registro } = useAuth({
        middleware: 'guest',
        url: '/'
    });
    const [errores, setErrores ] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        registro(datos, setErrores)
    }
    return (
        <>    
            <h1 className='text-4xl font-black'>Crea tu Cuenta</h1>
            <p>Crea tu cuenta llenendo el formulario</p>
            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form 
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}
                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="name"
                        >
                            Nombre:
                        </label>
                        <input 
                            type="text"
                            id="name"
                            className="mt-2 w-full block p-3 bg-gray-50 "
                            name="name"
                            ref={nameRef}
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="email"
                        >
                            Email:
                        </label>
                        <input 
                            type="email"
                            id="email"
                            className="mt-2 w-full block p-3 bg-gray-50 "
                            name="email"
                            ref={emailRef}
                            placeholder="Tu email"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="password"
                        >
                            Contraseña:
                        </label>
                        <input 
                            type="password"
                            id="password"
                            className="mt-2 w-full block p-3 bg-gray-50 "
                            name="password"
                            ref={passwordRef}
                            placeholder="Tu contraseña"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="password_confirmation"
                        >
                            Repetir Contraseña:
                        </label>
                        <input 
                            type="password"
                            id="password_confirmation"
                            className="mt-2 w-full block p-3 bg-gray-50 "
                            name="password_confirmation"
                            ref={passwordConfirmationRef}
                            placeholder="Repetir contraseña"
                        />
                    </div>
                    <input type="submit" value="Crear Cuenta" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" />
                </form>
            </div>
            <nav className="mt-5">
        <Link to="/auth/login">
            ¿Ya tienes cuenta? Inicia sesión
        </Link>
        </nav>
        </>
    )
}
