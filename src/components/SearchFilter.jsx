

function SearchFilter() {
  return (
    <div >
        <form className="space-x-5">
        <select className="p-1 rounded-md shadow">
            <option>value 1</option>
            <option>value 2</option>
        </select>
        <input type="text" placeholder="search orders" className="rounded-md shadow p-1 text-gray-200 font-semibold"/> 
        <button className="font-semibold text-gray-500 border p-1.5 rounded-lg shadow">Reset</button>

        </form>
       


    </div>
  )
}

export default SearchFilter