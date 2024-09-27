/* eslint-disable no-unused-vars */
import React from 'react'
import { MdOutlineContentPasteGo } from "react-icons/md";
import { Link } from 'react-router-dom';

const data = [
  { ID: '001', Condition: 'age', Status: 'Verified' },
  { ID: '002', Condition: 'age', Status: 'Not verified' },

];

const Requests = () => {

  return (
    <div className='pt-[5%]'>
      <button className='w-[250px] h-10 bg-[blue] text-center text-xl font-bold text-white border-white border-[3px] rounded-full
        ml-[40%] mt-5 mb-[5%]'>
          scan qrcode
        </button>
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
                  <div href={item.View} className="text-blue-500 hover:underline">
                    <Link to='/prover/request'>
                      <MdOutlineContentPasteGo/>
                    </Link>
                  </div>
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