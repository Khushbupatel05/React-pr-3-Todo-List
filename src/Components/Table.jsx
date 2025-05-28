const Table = () => {
    return (
        <div className='container mx-auto text-center mt-5'>
            <div className="relative overflow-x-auto  sm:rounded-lg w-6/12 mx-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className=" uppercase bg-gray-50 dark:bg-blue-100  dark:text-gray-900">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>   
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-blue-300 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-blue-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4 text-black font-bold">
                                Silver
                            </td>  
                            
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table;