import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

export default function EditPersonUser(){

    let { id } = useParams();

    const [dataUser, setDataUser] = useState([])
    const [dataPerson, setDataPerson] = useState([])
    const [dataRol, setDataRol] = useState([])

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/usuario/"+ id)
        .then((response) => response.json())
        .then((data) => {
          setDataUser(data);
        })
    }, [])

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/persona/"+ dataUser.persona_id)
        .then((response) => response.json())
        .then((data) => {
          setDataPerson(data);
        })
    }, [dataUser])

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/rol/" + dataUser.rol_id)
        .then((response) => response.json())
        .then((data) => {
          setDataRol(data);
        })
    }, [dataUser])

    return (
        
<form action={"http://127.0.0.1:8000/api/usuario/update/" + id} method="post" className="bg-[#111827] w-screen h-screen p-5"> 
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer nombre</label>
            <input type="text" name="primer_nombre" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={dataPerson.primer_nombre} required />
        </div>
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo nombre</label>
            <input type="text" name="segundo_nombre" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={dataPerson.segundo_nombre} required/>
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer apellido</label>
            <input type="text" name="primer_apellido" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={dataPerson.primer_apellido} required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo apellido</label>
            <input type="text" name="segundo_apellido" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={dataPerson.segundo_apellido} required />
        </div>
    </div>
    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
        <input type="text" name="usuario" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={dataUser.usuario} required />
    </div> 
    <div className="mb-6">
        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nueva clave</label>
        <input type="password" name="clave" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={dataUser.clave} required />
    </div> 
        <input type="number" name="habilitado" value={1} className="hidden"/>
        <input type="number" name="rol_id" value={dataRol.id} className="hidden"/>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar cambios</button>
</form>

    )
}