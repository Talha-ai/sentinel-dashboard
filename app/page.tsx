// 'use client';
// import { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   // CardHeader,
//   // CardTitle,
// } from '../components/ui/card';
// import {
//   Tabs,
//   TabsContent,
//   // TabsList,
//   // TabsTrigger,
// } from '../components/ui/tabs';
// // import { Button } from '../components/ui/button';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '../components/ui/select';

// // Mock data
// const scanData = {
//   genuine: 14563,
//   tampered: 5,
// };

// const printers = [
//   { id: 1, name: 'Printer1', model: 'Konica Minolta ABC (zW)' },
//   { id: 2, name: 'Printer2', model: 'Konica Minolta XYZ (HH)' },
// ];

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState('scan-data');
//   const [timeRange, setTimeRange] = useState('30d');

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-64 border-r bg-white">
//         <div className="p-4 border-b font-medium">ABC Company</div>
//         <div className="py-4">
//           <button
//             className={`w-full text-left p-4 ${
//               activeTab === 'scan-data' ? 'bg-gray-100' : ''
//             }`}
//             onClick={() => setActiveTab('scan-data')}
//           >
//             Scan data
//           </button>
//           <div
//             className={`pl-8 ${activeTab === 'scan-data' ? 'block' : 'hidden'}`}
//           >
//             <button className="w-full text-left p-2 text-sm">Heatmap</button>
//             <button className="w-full text-left p-2 text-sm text-gray-500">
//               List view
//             </button>
//           </div>
//           <button
//             className={`w-full text-left p-4 ${
//               activeTab === 'qr-generator' ? 'bg-gray-100' : ''
//             }`}
//             onClick={() => setActiveTab('qr-generator')}
//           >
//             QR Generator
//           </button>
//           <button
//             className={`w-full text-left p-4 ${
//               activeTab === 'printers' ? 'bg-gray-100' : ''
//             }`}
//             onClick={() => setActiveTab('printers')}
//           >
//             Onboarded printers
//           </button>
//         </div>
//         <div className="absolute bottom-0 w-64 border-t p-4 flex justify-between">
//           <button>Settings</button>
//           <button>Logout</button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto">
//         <Tabs value={activeTab} className="w-full">
//           {/* Scan Data Tab */}
//           <TabsContent value="scan-data" className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <div className="grid grid-cols-2 gap-6">
//                 <Card className="py-3 bg-gray-100">
//                   <CardContent>
//                     <div className="text-md font-semibold text-black">
//                       Genuine scans: {scanData.genuine}
//                     </div>
//                   </CardContent>
//                 </Card>
//                 <Card className="py-3 bg-gray-100">
//                   <CardContent>
//                     <div className="text-md font-semibold  text-black">
//                       Tampered scans: {scanData.tampered}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//               <Select value={timeRange} onValueChange={setTimeRange}>
//                 <SelectTrigger className="w-40">
//                   <SelectValue placeholder="Select period" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="30d">Last 30 days</SelectItem>
//                   <SelectItem value="90d">Last 90 days</SelectItem>
//                   <SelectItem value="120d">Last 120 days</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <Card className="mb-6 bg-gray-100 ">
//               <CardContent className="h-96 flex items-center justify-center">
//                 <div className="text-gray-500">Map View</div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           {/* QR Generator Tab */}
//           <TabsContent value="qr-generator" className="p-6">
//             <Card className="mb-6 py-3 w-fit bg-gray-100">
//               <CardContent className="">
//                 <div className="text-md font-semibold text-black">
//                   Total fingerprints generated: {scanData.genuine}
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6 h-96 flex items-center justify-center">
//                 <div className="text-lg text-center">
//                   List view of all QR fingerprints
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           {/* Printers Tab */}
//           <TabsContent value="printers" className="p-6">
//             <div className="grid grid-cols-2 gap-6">
//               {printers.map((printer) => (
//                 <Card key={printer.id} className="bg-gray-100">
//                   <CardContent>
//                     <div className="text-lg font-medium">{printer.name}</div>
//                     <div className="text-gray-500">{printer.model}</div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// 'use client';
// import { useState, useEffect } from 'react';

// // Mock data
// const scanData = {
//   genuine: 14563,
//   tampered: 5,
// };

// const printers = [
//   { id: 1, name: 'Printer1', model: 'Konica Minolta ABC (zW)' },
//   { id: 2, name: 'Printer2', model: 'Konica Minolta XYZ (HH)' },
// ];

// // Time range options
// const timeRangeOptions = [
//   { value: '30d', label: 'Last 30 days' },
//   { value: '90d', label: 'Last 90 days' },
//   { value: '120d', label: 'Last 120 days' },
// ];

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState('scan-data');
//   const [timeRange, setTimeRange] = useState('30d');
//   const [isSelectOpen, setIsSelectOpen] = useState(false);
//   const [viewType, setViewType] = useState('heatmap');

//   // Change active tab based on URL hash
//   useEffect(() => {
//     const hash = window.location.hash.replace('#', '');
//     if (hash === 'heatmap' || hash === 'list-view') {
//       setActiveTab('scan-data');
//       setViewType(hash);
//     } else if (hash === 'qr-generator') {
//       setActiveTab('qr-generator');
//     } else if (hash === 'printers') {
//       setActiveTab('printers');
//     }
//   }, []);

//   // Listen for hash changes
//   useEffect(() => {
//     const handleHashChange = () => {
//       const hash = window.location.hash.replace('#', '');
//       if (hash === 'heatmap' || hash === 'list-view') {
//         setActiveTab('scan-data');
//         setViewType(hash);
//       } else if (hash === 'qr-generator') {
//         setActiveTab('qr-generator');
//       } else if (hash === 'printers') {
//         setActiveTab('printers');
//       }
//     };

//     window.addEventListener('hashchange', handleHashChange);
//     return () => {
//       window.removeEventListener('hashchange', handleHashChange);
//     };
//   }, []);

//   return (
//     <div className="flex-1 p-4 md:p-6 overflow-auto">
//       {/* Scan Data Tab */}
//       <div
//         className={`${
//           activeTab === 'scan-data' ? 'block' : 'hidden'
//         } space-y-6`}
//       >
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
//             <div className="py-3 px-4 bg-gray-100 rounded-md shadow-sm">
//               <div className="text-md font-semibold text-black">
//                 Genuine scans: {scanData.genuine}
//               </div>
//             </div>
//             <div className="py-3 px-4 bg-gray-100 rounded-md shadow-sm">
//               <div className="text-md font-semibold text-black">
//                 Tampered scans: {scanData.tampered}
//               </div>
//             </div>
//           </div>

//           {/* Custom select dropdown */}
//           <div className="relative w-full md:w-40">
//             <div
//               className="flex justify-between items-center px-3 py-2 border rounded-md bg-white cursor-pointer"
//               onClick={() => setIsSelectOpen(!isSelectOpen)}
//             >
//               <span>
//                 {
//                   timeRangeOptions.find((option) => option.value === timeRange)
//                     ?.label
//                 }
//               </span>
//               <svg
//                 width="15"
//                 height="15"
//                 viewBox="0 0 15 15"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M4 6L7.5 9.5L11 6"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 ></path>
//               </svg>
//             </div>

//             {isSelectOpen && (
//               <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-md shadow-md z-10">
//                 {timeRangeOptions.map((option) => (
//                   <div
//                     key={option.value}
//                     className="px-3 py-2 cursor-pointer hover:bg-gray-100"
//                     onClick={() => {
//                       setTimeRange(option.value);
//                       setIsSelectOpen(false);
//                     }}
//                   >
//                     {option.label}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="bg-gray-100 rounded-md shadow-sm">
//           <div className="h-96 flex items-center justify-center">
//             <div className="text-gray-500">
//               {viewType === 'list-view' ? 'List View' : 'Map View'}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* QR Generator Tab */}
//       <div
//         className={`${
//           activeTab === 'qr-generator' ? 'block' : 'hidden'
//         } space-y-6`}
//       >
//         <div className="py-3 px-4 bg-gray-100 rounded-md shadow-sm w-full md:w-fit">
//           <div className="text-md font-semibold text-black">
//             Total fingerprints generated: {scanData.genuine}
//           </div>
//         </div>

//         <div className="bg-white rounded-md shadow-sm border">
//           <div className="p-6 h-96 flex items-center justify-center">
//             <div className="text-lg text-center">
//               List view of all QR fingerprints
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Printers Tab */}
//       <div
//         className={`${activeTab === 'printers' ? 'block' : 'hidden'} space-y-6`}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {printers.map((printer) => (
//             <div key={printer.id} className="bg-gray-100 rounded-md shadow-sm">
//               <div className="p-4">
//                 <div className="text-lg font-medium">{printer.name}</div>
//                 <div className="text-gray-500">{printer.model}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import the WorldMap component dynamically to avoid SSR issues with Leaflet
const WorldMap = dynamic(() => import('@/components/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex items-center justify-center bg-gray-100">
      Loading map...
    </div>
  ),
});

// Mock data
const scanData = {
  genuine: 14563,
  tampered: 5,
};

// Mock location data for QR scans
const locationData = [
  {
    id: 1,
    lat: 37.7749,
    lng: -122.4194,
    status: 'genuine',
    location: 'San Francisco, CA',
    date: '2025-04-28',
  },
  {
    id: 2,
    lat: 40.7128,
    lng: -74.006,
    status: 'genuine',
    location: 'New York, NY',
    date: '2025-04-29',
  },
  {
    id: 3,
    lat: 34.0522,
    lng: -118.2437,
    status: 'genuine',
    location: 'Los Angeles, CA',
    date: '2025-04-27',
  },
  {
    id: 4,
    lat: 51.5074,
    lng: -0.1278,
    status: 'tampered',
    location: 'London, UK',
    date: '2025-04-30',
  },
  {
    id: 5,
    lat: 48.8566,
    lng: 2.3522,
    status: 'genuine',
    location: 'Paris, France',
    date: '2025-04-25',
  },
  {
    id: 6,
    lat: 35.6762,
    lng: 139.6503,
    status: 'genuine',
    location: 'Tokyo, Japan',
    date: '2025-04-26',
  },
  {
    id: 7,
    lat: 22.3193,
    lng: 114.1694,
    status: 'tampered',
    location: 'Hong Kong',
    date: '2025-04-29',
  },
  {
    id: 8,
    lat: 1.3521,
    lng: 103.8198,
    status: 'genuine',
    location: 'Singapore',
    date: '2025-04-28',
  },
  {
    id: 9,
    lat: -33.8688,
    lng: 151.2093,
    status: 'genuine',
    location: 'Sydney, Australia',
    date: '2025-04-30',
  },
  {
    id: 10,
    lat: 19.4326,
    lng: -99.1332,
    status: 'tampered',
    location: 'Mexico City, Mexico',
    date: '2025-04-27',
  },
  {
    id: 11,
    lat: 55.7558,
    lng: 37.6173,
    status: 'genuine',
    location: 'Moscow, Russia',
    date: '2025-04-26',
  },
  {
    id: 12,
    lat: 25.2048,
    lng: 55.2708,
    status: 'genuine',
    location: 'Dubai, UAE',
    date: '2025-04-25',
  },
  {
    id: 13,
    lat: -34.6037,
    lng: -58.3816,
    status: 'genuine',
    location: 'Buenos Aires, Argentina',
    date: '2025-04-29',
  },
  {
    id: 14,
    lat: 41.9028,
    lng: 12.4964,
    status: 'genuine',
    location: 'Rome, Italy',
    date: '2025-04-28',
  },
  {
    id: 15,
    lat: 28.6139,
    lng: 77.209,
    status: 'tampered',
    location: 'New Delhi, India',
    date: '2025-04-30',
  },
  {
    id: 16,
    lat: 39.9042,
    lng: 116.4074,
    status: 'genuine',
    location: 'Beijing, China',
    date: '2025-04-27',
  },
  {
    id: 17,
    lat: -23.5505,
    lng: -46.6333,
    status: 'genuine',
    location: 'São Paulo, Brazil',
    date: '2025-04-26',
  },
  {
    id: 18,
    lat: 52.52,
    lng: 13.405,
    status: 'tampered',
    location: 'Berlin, Germany',
    date: '2025-04-25',
  },
];

const printers = [
  { id: 1, name: 'Printer1', model: 'Konica Minolta ABC (zW)' },
  { id: 2, name: 'Printer2', model: 'Konica Minolta XYZ (HH)' },
];

// Time range options
const timeRangeOptions = [
  { value: '30d', label: 'Last 30 days' },
  { value: '90d', label: 'Last 90 days' },
  { value: '120d', label: 'Last 120 days' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('scan-data');
  const [timeRange, setTimeRange] = useState('30d');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [viewType, setViewType] = useState('heatmap');

  // Change active tab based on URL hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'heatmap' || hash === 'list-view') {
      setActiveTab('scan-data');
      setViewType(hash);
    } else if (hash === 'qr-generator') {
      setActiveTab('qr-generator');
    } else if (hash === 'printers') {
      setActiveTab('printers');
    }
  }, []);

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'heatmap' || hash === 'list-view') {
        setActiveTab('scan-data');
        setViewType(hash);
      } else if (hash === 'qr-generator') {
        setActiveTab('qr-generator');
      } else if (hash === 'printers') {
        setActiveTab('printers');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="flex-1 p-4 md:p-6 overflow-auto">
      {/* Scan Data Tab */}
      <div
        className={`${
          activeTab === 'scan-data' ? 'block' : 'hidden'
        } space-y-6`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
            <div className="py-3 px-4 bg-gray-100 rounded-md shadow-sm">
              <div className="text-md font-semibold text-black">
                Genuine scans: {scanData.genuine}
              </div>
            </div>
            <div className="py-3 px-4 bg-gray-100 rounded-md shadow-sm">
              <div className="text-md font-semibold text-black">
                Tampered scans: {scanData.tampered}
              </div>
            </div>
          </div>

          {/* Custom select dropdown */}
          <div className="relative w-full md:w-40">
            <div
              className="flex justify-between items-center px-3 py-2 border rounded-md bg-white cursor-pointer"
              onClick={() => setIsSelectOpen(!isSelectOpen)}
            >
              <span>
                {
                  timeRangeOptions.find((option) => option.value === timeRange)
                    ?.label
                }
              </span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L7.5 9.5L11 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            {isSelectOpen && (
              <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-md shadow-md z-10">
                {timeRangeOptions.map((option) => (
                  <div
                    key={option.value}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setTimeRange(option.value);
                      setIsSelectOpen(false);
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {viewType === 'list-view' ? (
          <div className="bg-white rounded-md shadow-sm border">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {locationData.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        #{item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            item.status === 'genuine'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 rounded-md shadow-sm">
            <div className="h-96 relative" id="map-container">
              <WorldMap locationData={locationData} />
            </div>
          </div>
        )}
      </div>

      {/* QR Generator Tab */}
      <div
        className={`${
          activeTab === 'qr-generator' ? 'block' : 'hidden'
        } space-y-6`}
      >
        <div className="py-3 px-4 bg-gray-100 rounded-md shadow-sm w-full md:w-fit">
          <div className="text-md font-semibold text-black">
            Total fingerprints generated: {scanData.genuine}
          </div>
        </div>

        <div className="bg-white rounded-md shadow-sm border">
          <div className="p-6 h-96 flex items-center justify-center">
            <div className="text-lg text-center">
              List view of all QR fingerprints
            </div>
          </div>
        </div>
      </div>

      {/* Printers Tab */}
      <div
        className={`${activeTab === 'printers' ? 'block' : 'hidden'} space-y-6`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {printers.map((printer) => (
            <div key={printer.id} className="bg-gray-100 rounded-md shadow-sm">
              <div className="p-4">
                <div className="text-lg font-medium">{printer.name}</div>
                <div className="text-gray-500">{printer.model}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
