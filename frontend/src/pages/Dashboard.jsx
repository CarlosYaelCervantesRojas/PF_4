import { Link, useParams } from "react-router-dom"

export default function Dashboard() {

    let { id } = useParams();

    // const [imageUrl, setImageUrl] = useState(null);

    // useEffect(() => {
    //   fetch("https://dog.ceo/api/breeds/image/random")
    //     .then((response) => response.json())
    //     .then((dog) => {
    //       setImageUrl(dog.message);
    //       setIsLoading(false);
    //     });
    // }, []);

    return (
        <>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to={"/profile/" + id} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ml-3">Profile</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={"/list/users/" + id} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={"/"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ml-3">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <p class="text-3xl text-gray-900">Seleciona la acción a relizar del menu  de la izquierda</p>
                </div>
            </div>
        </>
    )
}