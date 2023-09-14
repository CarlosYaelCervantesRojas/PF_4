import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

export default function List() {

    let { id } = useParams();

    const [dataPersonas, setDataPersonas] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/personas")
            .then((response) => response.json())
            .then((data) => {
                setDataPersonas(data);
            })
    }, [])

    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Apellidos
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {dataPersonas.map((persona, i) => {
                        return (
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {persona.id}
                                </th>
                                <td className="px-6 py-4">
                                    {persona.primer_nombre}
                                </td>
                                <td className="px-6 py-4">
                                    {persona.primer_apellido + " " + persona.segundo_apellido}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <Link to={'/new/user/' + id} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Crear nuevo usuario
                </span>
            </Link>
        </div>

    )
}