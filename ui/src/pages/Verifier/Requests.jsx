// eslint-disable-next-line no-unused-vars
import React from 'react';

const Requests = () => {
  // Dummy data for old requests
  const requestsData = [
    { id: '1', condition: 'Pending Verification', status: 'In Progress' },
    { id: '2', condition: 'Verified', status: 'Completed' },
    { id: '4', condition: 'Rejected', status: 'Failed' },
  ];

  return (
    <div className='pt-[5%]'>
      <div className='text-center lg:mt-0 mt-[10%] text-2xl font-bold '>OLD REQUESTS</div>
      <div>
        <table className="lg:min-w-[500px] min-w-[360px] lg:ml-[30%] ml-2 table-auto bg-white rounded-lg shadow-lg lg:mt-0 mt-[5%]">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-left">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Condition</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {requestsData.map((request, index) => (
              <tr key={index} className="border-t text-black">
                <td className="px-4 py-2">{request.id}</td>
                <td className="px-4 py-2">{request.condition}</td>
                <td className={`px-4 py-2 ${
                  request.status === 'Completed' ? 'text-green-500' : request.status === 'Failed' ? 'text-red-500' : 'text-yellow-500'
                }`}>
                  {request.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requests;
