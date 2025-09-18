import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SimsHeader } from '@/components/sims/SimsHeader';
import { SimsSidebar } from '@/components/sims/SimsSidebar';

const SimsDashboard: React.FC = () => {
  const navigate = useNavigate();

  const currentUser = {
    name: 'Benard Mabele',
    regNo: 'LLB/2024/4510'
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SimsHeader currentUser={currentUser} onLogout={handleLogout} />
      <div className="border-b-2 border-blue-500"></div>
      
      <div className="flex">
        <SimsSidebar />
        
        <main className="sims-content">
          <div className="p-6">
            {/* Status Bar */}
            <div className="border-b border-black pb-2 mb-4 text-right font-bold">
              <span className="text-blue-600 mr-20">
                Password will expire on : 16-11-2025
              </span>
              Active Academic Year : 2024/2025 - Semester II
            </div>

            {/* Success Alert */}
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Logged In Successfully
            </div>

            {/* Registration Status */}
            <div className="bg-blue-100 border border-blue-400 text-blue-800 px-4 py-3 rounded mb-6">
              <div><strong>REGISTRATION STATUS ACADEMIC YEAR : 2024/2025</strong></div>
              <div><strong>SEMESTER I : <span className="text-red-600">REGISTERED</span> &nbsp; &nbsp; Bachelor of Laws - First Year</strong></div>
              <div><strong>SEMESTER II : <span className="text-red-600">REGISTERED</span> &nbsp; &nbsp; Bachelor of Laws - First Year</strong></div>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Main Dashboard */}
              <div className="lg:col-span-7">
                <div className="bg-white border border-gray-300 rounded shadow">
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                    <h3 className="font-semibold">Dashboard</h3>
                  </div>
                  <div className="p-4">
                    Welcome
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-white border border-gray-300 rounded shadow mt-6">
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  <div className="p-4 min-h-[100px]">
                    {/* Notifications content would go here */}
                  </div>
                </div>
              </div>

              {/* News Section */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-gray-300 rounded shadow">
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                    <h3 className="font-semibold">News</h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-green-500 text-white px-2 py-1 text-xs rounded">Important</span>
                          <a href="#" className="text-blue-600 hover:underline font-semibold">ALERT</a>
                        </div>
                        <p className="text-gray-700 mb-2">ALERT</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gray-300 rounded"></div>
                            <div>
                              <div className="font-semibold">Mr. Steven Mavere</div>
                              <div>Administrator</div>
                              <div>07:38 AM &nbsp; 28 AUG 2025</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SimsDashboard;