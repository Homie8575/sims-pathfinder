import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SimsHeader } from '@/components/sims/SimsHeader';
import { SimsSidebar } from '@/components/sims/SimsSidebar';

interface ProfileSection {
  id: string;
  label: string;
  icon: string;
}

const profileSections: ProfileSection[] = [
  { id: 'basic_info', label: 'Student Basic Information', icon: 'fa-check' },
  { id: 'contact', label: 'Contact Information', icon: 'fa-check' },
  { id: 'nextkin', label: 'Next of Kin Information', icon: 'fa-check' },
  { id: 'education', label: 'Education Background', icon: 'fa-check' },
  { id: 'attachment', label: 'Attachment', icon: 'fa-check' },
  { id: 'insurance', label: 'Insurance', icon: 'fa-check' },
  { id: 'bank_info', label: 'Bank Account', icon: 'fa-check' },
  { id: 'admission_history', label: 'Admission History', icon: 'fa-check' },
  { id: 'examination', label: 'Examination Results', icon: 'fa-check' },
  { id: 'examination_carry', label: 'Carry Examinations Results', icon: 'fa-check' },
  { id: 'payment', label: 'Payment Report', icon: 'fa-check' },
  { id: 'loan', label: 'Loan Information', icon: 'fa-check' },
  { id: 'accommodation', label: 'Accommodation History', icon: 'fa-check' }
];

const SimsProfile: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('basic_info');

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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Profile Menu */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-gray-300 rounded shadow">
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                    <h3 className="font-semibold">Profile Menu</h3>
                  </div>
                  <div className="p-4">
                    {/* User Info */}
                    <div className="flex items-center space-x-3 mb-4 pb-4 border-b">
                      <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center">
                        <i className="fa fa-user text-gray-600"></i>
                      </div>
                      <div className="text-sm">
                        <div><strong>Name:</strong> Mabele, Benard</div>
                        <div><strong>Reg#:</strong> LLB/2024/4510</div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <ul className="space-y-1">
                      {profileSections.map((section) => (
                        <li key={section.id} className="border border-gray-200">
                          <button
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center space-x-2 ${
                              activeSection === section.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                            }`}
                          >
                            <i className={`fa ${section.icon}`}></i>
                            <span>{section.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="lg:col-span-9">
                <div className="bg-white border border-gray-300 rounded shadow">
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                    <h3 className="font-semibold">Student Basic Information</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        {/* University Information */}
                        <div className="mb-6">
                          <h4 className="text-brown-600 font-bold border-b border-brown-600 pb-1 mb-4 text-lg">
                            UNIVERSITY INFORMATION
                          </h4>
                          
                          <table className="w-full max-w-3xl">
                            <tbody className="space-y-2">
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold w-1/3">Campus Name:</th>
                                <td className="py-1">Main Campus</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">RegNo No.:</th>
                                <td className="py-1">LLB/2024/4510</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Admission No.:</th>
                                <td className="py-1">SA/MN/2024/366</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Entry Year:</th>
                                <td className="py-1">2024/2025 - Semester I</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Intake:</th>
                                <td className="py-1">September</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Entry Programme:</th>
                                <td className="py-1">Bachelor of Laws - [ LLB ]</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Entry Class:</th>
                                <td className="py-1">First Year</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Entry Category:</th>
                                <td className="py-1">A-Level Certificate</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Sponsor:</th>
                                <td className="py-1">PRIVATE</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        {/* Personal Information */}
                        <div>
                          <h4 className="text-brown-600 font-bold border-b border-brown-600 pb-1 mb-4 text-lg">
                            PERSON BASIC INFORMATION
                          </h4>
                          
                          <table className="w-full max-w-3xl">
                            <tbody>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold w-1/3">First Name:</th>
                                <td className="py-1">Benard</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Last Name:</th>
                                <td className="py-1">Mabele</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Gender:</th>
                                <td className="py-1">Male</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Date of Birth:</th>
                                <td className="py-1">2005-01-01</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Nationality:</th>
                                <td className="py-1">Tanzanian</td>
                              </tr>
                              <tr>
                                <th className="text-left py-1 pr-4 font-semibold">Religion:</th>
                                <td className="py-1">Christian</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Profile Photo */}
                      <div className="ml-6">
                        <div className="w-24 h-32 bg-gray-300 rounded flex items-center justify-center">
                          <i className="fa fa-user text-gray-600 text-2xl"></i>
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

export default SimsProfile;