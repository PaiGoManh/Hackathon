import React from 'react'

const Requests = () => {
  return (
    <div className='pt-[5%]'>
        <div className='text-center lg:mt-0 mt-[10%] text-2xl font-bold '>OLD REQUESTS</div>
        <div>
        <table className="lg:min-w-[500px] min-w-[360px] lg:ml-[30%] ml-2  table-auto bg-white rounded-lg shadow-lg lg:mt-0 mt-[5%]">
            <thead>
                <tr className="bg-gray-200 text-gray-600 text-left">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Condition</th>
                <th className="px-4 py-2">Status</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
            </table>

        </div>
    </div>
  )
}

export default Requests