import { useNavigate } from "react-router-dom";
import SearchFilter from "./SearchFilter"
import { Table } from 'flowbite-react';


function Payments() {
  const navigate =useNavigate()

  const clickMe = ()=>{
    navigate('/companydashboard/orders')
  }

  return (
    <div className='overflow-scroll'>
       <h2 className="text-2xl font-bold">Payments</h2>
       <div className="flex justify-between my-5">
          <SearchFilter/>
          <button className="bg-black text-white p-2 text-sm rounded-lg font-semibold" onClick={clickMe}>Register New Tailor</button>

       </div>

       <Table hoverable>
      <Table.Head>
        <Table.HeadCell>
          name
        </Table.HeadCell>
        <Table.HeadCell>
          email
        </Table.HeadCell>
        <Table.HeadCell>
          wallet
        </Table.HeadCell>
        <Table.HeadCell>
          Total-Work
        </Table.HeadCell>

        <Table.HeadCell>
          Total Pending Work
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>

      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17
          </Table.Cell>
          <Table.Cell>
            Sliver
          </Table.Cell>
          <Table.Cell>
            Laptop
          </Table.Cell>
          <Table.Cell>
            $2999
          </Table.Cell>

          <Table.Cell>
            2999
          </Table.Cell>

          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Edit
              </p>
            </a>

            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                delete
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <p>
              Microsoft Surface Pro
            </p>
          </Table.Cell>
          <Table.Cell>
            White
          </Table.Cell>
          <Table.Cell>
            Laptop PC
          </Table.Cell>
          <Table.Cell>
            $1999
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Edit
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Magic Mouse 2
          </Table.Cell>
          <Table.Cell>
            Black
          </Table.Cell>
          <Table.Cell>
            Accessories
          </Table.Cell>
          <Table.Cell>
            $99
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Edit
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </div>
  )
}

export default Payments
