/* eslint-disable no-unused-vars */
import React from 'react'
import { MdOutlineContentPasteGo } from "react-icons/md";

const data = [
  { ID: '001', Condition: 'age', Status: 'Active' },
  { ID: '002', Condition: 'age', Status: 'Inactive' },

];

const Requests = () => {

  return (
    <div className='pt-[5%]'>
        <div className='text-center lg:mt-0 mt-[10%] text-2xl font-bold '>REQUESTS PENDING</div>
        <div>
        <table className="lg:min-w-[500px] min-w-[360px] lg:ml-[30%] ml-2  table-auto bg-white rounded-lg shadow-lg lg:mt-0 mt-[5%]">
            <thead>
                <tr className="bg-gray-200 text-gray-600 text-left">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Condition</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">view</th>
                </tr>
            </thead>
            <tbody>
              {data.map((item) => (
              <tr key={item.ID} className="border-t border-gray-300 text-black">
                <td className="px-4 py-2 text-center">{item.ID}</td>
                <td className="px-4 py-2 text-center">{item.Condition}</td>
                <td className="px-4 py-2 text-center">{item.Status}</td>
                <td className="px-4 py-2 text-center">
                  <a href={item.View} className="text-blue-500 hover:underline">
                    <MdOutlineContentPasteGo/>
                  </a>
                </td>
              </tr>
              ))}
            </tbody>
            </table>

        </div>
    </div>
  )
}

export default Requests