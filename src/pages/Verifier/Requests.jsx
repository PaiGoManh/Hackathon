import React from 'react'

const Requests = () => {
  return (
    <div className='pt-[5%]'>
        <div className='text-center mb-5 text-2xl font-bold '>OLD REQUESTS</div>
        <div>
        <table className="min-w-[500px] ml-[30%] table-auto bg-white rounded-lg shadow-lg">
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