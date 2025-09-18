import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SimsHeader } from '@/components/sims/SimsHeader';
import { SimsSidebar } from '@/components/sims/SimsSidebar';

interface Course {
  code: string;
  name: string;
  credits: number;
  marks?: number;
  grade: string;
  gradePoint: number;
  remark: string;
}

const semester1Results: Course[] = [
  { code: 'PH 113', name: 'Social Ethics', credits: 3, grade: 'I^CARRY', gradePoint: 0, remark: 'CARRY' },
  { code: 'SLW 100', name: 'Legal Methods I', credits: 3, marks: 47, grade: 'C', gradePoint: 6, remark: 'PASS' },
  { code: 'SLW 101', name: 'Jurisprudence I', credits: 3, grade: 'I^CARRY', gradePoint: 0, remark: 'CARRY' },
  { code: 'SLW 102', name: 'Constitutional Law I', credits: 3, marks: 56, grade: 'B', gradePoint: 9, remark: 'PASS' },
  { code: 'SLW 103', name: 'Criminal Law', credits: 3, marks: 27, grade: 'C', gradePoint: 53, remark: 'PASS' },
  { code: 'SLW 104', name: 'Public International Law I', credits: 3, marks: 24, grade: 'C', gradePoint: 53, remark: 'PASS' },
  { code: 'SLW 105', name: 'Law of Contract I', credits: 3, marks: 54, grade: 'B', gradePoint: 9, remark: 'PASS' },
  { code: 'SLW 106', name: 'Legal Drafting and Writing I', credits: 3, marks: 45, grade: 'C', gradePoint: 6, remark: 'PASS' }
];

const SimsResults: React.FC = () => {
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

            {/* Results Container */}
            <div className="bg-white border border-gray-300 rounded shadow">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                <h3 className="font-semibold">Published Results</h3>
              </div>
              
              <div className="p-6">
                {/* Semester I Results */}
                <div className="mb-8">
                  <h4 className="font-bold mb-4 text-black">
                    Bachelor of Laws - [ LLB ]<br />
                    FIRST YEAR :: 2024/2025 - SEMESTER I
                  </h4>
                  
                  <div className="overflow-x-auto">
                    <table className="sims-table">
                      <thead>
                        <tr>
                          <th style={{ width: '90px' }}>Course Code</th>
                          <th style={{ width: '200px' }}>Course Name</th>
                          <th style={{ width: '30px' }} className="text-center">Credits</th>
                          <th style={{ width: '30px' }} className="text-center">Marks</th>
                          <th style={{ width: '30px' }} className="text-center">Grade</th>
                          <th style={{ width: '30px' }} className="text-center">Grade Point</th>
                          <th style={{ width: '80px' }} className="text-center">Remark</th>
                        </tr>
                      </thead>
                      <tbody>
                        {semester1Results.map((course, index) => (
                          <tr key={index}>
                            <td>
                              <a href="#" className="text-blue-600 hover:underline">
                                {course.code}
                              </a>
                            </td>
                            <td>{course.name}</td>
                            <td className="text-center">{course.credits}</td>
                            <td className="text-center">{course.marks || ''}</td>
                            <td className="text-center">
                              {course.grade.includes('CARRY') ? (
                                <span>I<sup>CARRY</sup></span>
                              ) : (
                                course.grade
                              )}
                            </td>
                            <td className="text-center">{course.gradePoint}</td>
                            <td className="text-center">{course.remark}</td>
                          </tr>
                        ))}
                        <tr>
                          <td colSpan={4} className="text-right font-bold pr-2">
                            Semester GPA :
                          </td>
                          <td colSpan={2} className="text-center font-bold">
                            1.2
                          </td>
                          <td className="text-center font-bold">
                            CARRY
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Semester II Results */}
                <div>
                  <h4 className="font-bold mb-4 text-black">
                    Bachelor of Laws - [ LLB ]<br />
                    FIRST YEAR :: 2024/2025 - SEMESTER II
                  </h4>
                  
                  <div className="overflow-x-auto">
                    <table className="sims-table">
                      <thead>
                        <tr>
                          <th style={{ width: '90px' }}>Course Code</th>
                          <th style={{ width: '200px' }}>Course Name</th>
                          <th style={{ width: '30px' }} className="text-center">Credits</th>
                          <th style={{ width: '30px' }} className="text-center">Marks</th>
                          <th style={{ width: '30px' }} className="text-center">Grade</th>
                          <th style={{ width: '30px' }} className="text-center">Grade Point</th>
                          <th style={{ width: '80px' }} className="text-center">Remark</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={7} className="text-center text-gray-500 py-8">
                            No results published for Semester II yet.
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default SimsResults;