import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import sautLogo from '@/assets/saut-logo.png';

interface SimsHeaderProps {
  currentUser: {
    name: string;
    regNo: string;
    avatar?: string;
  };
  onLogout?: () => void;
}

export const SimsHeader: React.FC<SimsHeaderProps> = ({ currentUser, onLogout }) => {
  return (
    <header className="sims-header">
      <nav className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-4">
          <img src={sautLogo} alt="SAUT Logo" className="sims-logo" />
          <div>
            <div className="text-lg font-bold text-gray-800">
              ST AUGUSTINE UNIVERSITY OF TANZANIA [ SAUT ]
            </div>
            <div className="text-sm font-semibold text-blue-600">
              STUDENT INFORMATION MANAGEMENT SYSTEM &#123; SIMS &#125;
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <i className="fa fa-bars"></i>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <i className="fa fa-user text-gray-600"></i>
                </div>
                <span className="text-sm font-medium">Mr. {currentUser.name}</span>
                <i className="fa fa-caret-down"></i>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem>
                <i className="fa fa-user mr-2"></i>
                My Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <i className="fa fa-history mr-2"></i>
                My Login History
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <i className="fa fa-key mr-2"></i>
                Change Password
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>
                <i className="fa fa-sign-out-alt mr-2"></i>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="sm" onClick={onLogout}>
            <i className="fa fa-sign-out-alt mr-2"></i>
            Log out
          </Button>
        </div>
      </nav>
    </header>
  );
};