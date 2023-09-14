import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import Nav from "../components/Nav";


function Profile() {

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


    const [nav, setNav] = useState(false);

    function handleClick() {
        setNav(!nav);
    }


    return (
        <body className="h-screen py-3 px-5 bg-[#FAFAFB] sm:px-20">
            {
                nav ? <Nav /> : null
            }
            <section>
                <header className="flex justify-between items-center">
                    <div>
                        <img src="/devchallenges.svg" alt="devchallenges" />
                    </div>

                    <div id="imgMenu" onClick={handleClick} className="flex items-center hover:cursor-pointer">
                        <nav className="w-8 h-8 hover:cursor-pointer">
                            <span className="hidden sm:font-sans sm:font-bold sm:text-xs sm:block sm:pl-3">
                                {dataPerson.primer_nombre + " " + dataPerson.primer_apellido}
                            </span>
                        </nav>
                        <div className="w-8 h-6">
                            <img id="arrow" className="h-full w-full" src="/arrow.svg" alt="arrow" />
                        </div>
                    </div>
                </header>

                <h1 className="text-center font-sans text-2xl pt-5 sm:text-4xl">
                    Personal info
                </h1>

                <p className="text-center font-sans text-sm font-light pt-3 sm:text-lg">
                    Basic info, like your name and photo
                </p>

            </section>

            <section className="w-full h-4/5 sm:border sm:rounded-xl sm:h-2/3 sm:mt-14">
                <table className="w-full h-full text-[#BDBDBD] text-sm font-medium">
                    <tr className="pt-10 w-full">
                        <td className="w-2/4">
                            <h2 className="font-sans font-normal text-2xl pb-1 text-[#000] sm:pl-10">
                                Profile
                            </h2>

                            <p className="text-[#828282] font-sans font-medium text-sm sm:pl-10">
                                Some info may be visible to other people
                            </p>
                        </td>

                        <td className="flex justify-end items-center h-full w-auto sm:pr-10">
                            <Link to={'/edit/user/' + id} className="flex justify-center items-center border-solid border-[#828282] border-2 h-10 w-24 rounded-xl text-[#828282] font-sans font-medium text-base">
                                Edit
                            </Link>
                        </td>
                    </tr>

                    <tr className="border-y border-[#E0E0E0]">
                        <td>
                            <p className="sm:pl-10">
                                NAME
                            </p>
                        </td>

                        <td>
                            <input readOnly className="bg-transparent focus:outline-none  font-semibold text-[#333] text-base text-right sm:text-start" value={dataPerson.primer_nombre + " " + dataPerson.primer_apellido} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="sm:pl-10">
                                ROL
                            </p>
                        </td>

                        <td>
                            <input readOnly className="bg-transparent focus:outline-none  font-semibold text-[#333] text-base text-right sm:text-start" value={dataRol.rol} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="sm:pl-10">
                                USER
                            </p>
                        </td>

                        <td>
                            <input readOnly className="bg-transparent focus:outline-none font-semibold text-[#333] text-base text-right sm:text-start" value={dataUser.usuario} />
                        </td>
                    </tr>

                    <tr className="border-y border-[#E0E0E0] sm:border-y-0 sm:border-t">
                        <td>
                            <p className="sm:pl-10">
                                PASSWORD
                            </p>
                        </td>

                        <td>
                            <input readOnly type="password" className="bg-transparent font-semibold text-[#333] text-base text-right focus:outline-none sm:text-start" value={dataUser.clave} />
                        </td>
                    </tr>
                </table>
            </section>
        </body>

    )
}

export default Profile