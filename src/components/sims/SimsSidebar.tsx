import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItem {
  icon: string;
  label: string;
  href: string;
  submenu?: {
    icon: string;
    label: string;
    href: string;
  }[];
}

const navItems: NavItem[] = [
  {
    icon: 'fa-th-large',
    label: 'Dashboard',
    href: '/dashboard'
  },
  {
    icon: 'fa-desktop',
    label: 'Update Profile',
    href: '/update-profile'
  },
  {
    icon: 'fa-cc-visa',
    label: 'Payments',
    href: '/payments',
    submenu: [
      { icon: 'fa-angle-right', label: 'Create Invoice', href: '/create-invoice' },
      { icon: 'fa-angle-right', label: 'Invoice List', href: '/invoice-list' },
      { icon: 'fa-angle-right', label: 'Overpayment', href: '/overpayment' },
      { icon: 'fa-angle-right', label: 'Statement', href: '/statement' },
      { icon: 'fa-angle-right', label: 'Receipt', href: '/receipt' },
    ]
  },
  {
    icon: 'fa-hospital-o',
    label: 'Insurance (NHIF)',
    href: '/insurance',
    submenu: [
      { icon: 'fa-angle-right', label: 'Card Application', href: '/nhif-application' },
    ]
  },
  {
    icon: 'fa-plus-square-o',
    label: 'Course Registration',
    href: '/course-registration'
  },
  {
    icon: 'fa-folder-open',
    label: 'Examination Results',
    href: '/results',
    submenu: [
      { icon: 'fa-angle-right', label: 'CA Results', href: '/ca-results' },
      { icon: 'fa-angle-right', label: 'Final Results', href: '/results' },
      { icon: 'fa-angle-right', label: 'Carry Results', href: '/carry-results' },
    ]
  },
  {
    icon: 'fa-file',
    label: 'Appeal & Querying',
    href: '/appeals',
    submenu: [
      { icon: 'fa-angle-right', label: 'Appeal (RA)', href: '/appeal' },
      { icon: 'fa-angle-right', label: 'Querying (RQ)', href: '/querying' },
    ]
  },
  {
    icon: 'fa-map-pin',
    label: 'Postponement',
    href: '/postponement',
    submenu: [
      { icon: 'fa-angle-right', label: 'Send Application', href: '/postponement-apply' },
      { icon: 'fa-angle-right', label: 'Application List', href: '/postponement-list' },
    ]
  },
  {
    icon: 'fa-dashcube',
    label: 'Special Examination',
    href: '/special-exam',
    submenu: [
      { icon: 'fa-angle-right', label: 'Send Application', href: '/special-exam-apply' },
      { icon: 'fa-angle-right', label: 'Application List', href: '/special-exam-list' },
    ]
  },
  {
    icon: 'fa-gg',
    label: 'Programme Transfer',
    href: '/programme-transfer'
  },
  {
    icon: 'fa-feed',
    label: 'De-Registration',
    href: '/deregistration'
  },
  {
    icon: 'fa-asterisk',
    label: 'Mentorship',
    href: '/mentorship'
  },
  {
    icon: 'fa-desktop',
    label: 'Help Desk',
    href: '/help-desk'
  },
  {
    icon: 'fa-graduation-cap',
    label: 'Graduation Gown',
    href: '/graduation-gown'
  },
  {
    icon: 'fa-tasks',
    label: 'My Full Profile',
    href: '/profile'
  },
  {
    icon: 'fa-envelope',
    label: 'Messages',
    href: '/messages'
  },
  {
    icon: 'fa-folder-open',
    label: 'Notes',
    href: '/notes'
  }
];

export const SimsSidebar: React.FC = () => {
  const location = useLocation();

  const isActiveRoute = (href: string, submenu?: NavItem['submenu']) => {
    if (location.pathname === href) return true;
    if (submenu) {
      return submenu.some(item => location.pathname === item.href);
    }
    return false;
  };

  return (
    <nav className="sims-sidebar">
      <div className="p-4">
        <div className="text-center font-bold text-blue-600 mb-6">
          SIMS SAUT
        </div>
        
        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={cn(
                  'sims-nav-item',
                  isActiveRoute(item.href, item.submenu) && 'active'
                )}
              >
                <i className={`fa ${item.icon} mr-3 w-4`}></i>
                <span className="flex-1">{item.label}</span>
                {item.submenu && <i className="fa fa-arrow-down ml-2"></i>}
              </Link>
              
              {item.submenu && isActiveRoute(item.href, item.submenu) && (
                <ul className="ml-8 mt-1 space-y-1">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.href}
                        className={cn(
                          'sims-nav-item text-sm',
                          location.pathname === subItem.href && 'active'
                        )}
                      >
                        <i className={`fa ${subItem.icon} mr-2`}></i>
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};