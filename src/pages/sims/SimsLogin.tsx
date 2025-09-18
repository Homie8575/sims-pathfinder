import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import sautLogo from '@/assets/saut-logo.png';

const SimsLogin: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false
  });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check hardcoded credentials
    if (formData.username === 'LLB/2024/4510' && formData.password === 'Bernado@2005') {
      toast.success('Login successful!');
      navigate('/dashboard');
    } else {
      toast.error('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sims-header">
        <nav className="flex items-center px-6 py-3">
          <img src={sautLogo} alt="SAUT Logo" className="sims-logo mr-4" />
          <div>
            <div className="text-lg font-bold text-gray-800">
              ST AUGUSTINE UNIVERSITY OF TANZANIA [ SAUT ]
            </div>
            <div className="text-sm font-semibold text-blue-600">
              STUDENT INFORMATION MANAGEMENT SYSTEM &#123; SIMS &#125;
            </div>
          </div>
        </nav>
      </header>
      
      <div className="border-b-2 border-blue-500"></div>

      {/* Academic Year Info */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center text-black font-bold">
          <span>Academic Year : 2024/2025</span>
          <span>September 18, 2025</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Welcome Section */}
          <div className="pr-8 border-r-2 border-gray-400">
            <div className="text-black">
              <div className="mb-6">
                <h2 className="font-bold text-lg mb-2">Welcome to SIMS</h2>
                <p className="ml-4">
                  The Student Information Management System (SIMS) holds all the information relating to students.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Students</h3>
                <div className="ml-4 space-y-1">
                  <div><strong>*</strong> Register for Courses online</div>
                  <div><strong>*</strong> View Course Progress and Results</div>
                  <div><strong>*</strong> Forums</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Teaching Staff</h3>
                <div className="ml-4 space-y-1">
                  <div><strong>*</strong> View list of Students per Course</div>
                  <div><strong>*</strong> Publish Course Results</div>
                  <div><strong>*</strong> Track Students Progress/Reports</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Other</h3>
                <div className="ml-4 space-y-1">
                  <div><strong>*</strong> Payment Management</div>
                  <div><strong>*</strong> Configuration</div>
                </div>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div>
            <div className="max-w-md">
              <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-bold text-center mb-6 text-blue-600">Login</h2>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={formData.remember}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, remember: checked as boolean }))
                        }
                      />
                      <Label htmlFor="remember" className="text-sm">Remember me</Label>
                    </div>
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Forgot your password?
                    </a>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Login to Your Account
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-6 py-3">
        <div className="flex justify-between items-center text-sm">
          <div>
            <strong>© 2025 &nbsp; &nbsp; 
              <a href="#" className="text-blue-600 hover:underline">
                ST AUGUSTINE UNIVERSITY OF TANZANIA
              </a>
            </strong>
          </div>
          <div>
            Design and Developed by <strong>
              <a href="http://ictsolutionsdesign.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                ICT SOLUTIONS DESIGN
              </a>
            </strong>.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimsLogin;