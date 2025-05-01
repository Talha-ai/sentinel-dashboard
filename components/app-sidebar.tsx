'use client';

import { useState, useEffect } from 'react';
import {
  BarChart2,
  QrCode,
  Printer,
  Settings,
  LogOut,
  List,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState('heatmap');

  // Update active item based on URL hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveItem(hash);
    } else {
      setActiveItem('heatmap'); // Default active item
    }
  }, []);

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveItem(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Handle menu item click
  const handleMenuClick = (itemName: string) => {
    setActiveItem(itemName);
    window.location.hash = itemName;
  };

  const isActive = (item: string) => activeItem === item;

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-4">
        <h1 className="text-xl font-semibold">ABC Company</h1>
      </SidebarHeader>

      <SidebarContent className="px-4">
        {/* Scan Data Group */}
        <SidebarGroup className="mb-1">
          <SidebarGroupLabel
            className={`flex items-center justify-between px-3 py-2 ${
              isActive('heatmap') || isActive('list-view') ? 'bg-gray-100' : ''
            } rounded-md cursor-pointer`}
            onClick={() => handleMenuClick('heatmap')}
          >
            <div className="flex items-center gap-2">
              <BarChart2 size={20} className="text-gray-700" />
              <span className="font-medium">Scan Data</span>
            </div>
          </SidebarGroupLabel>

          <SidebarGroupContent className="mt-1">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`px-3 py-2 ml-6 ${
                    isActive('heatmap') ? 'bg-gray-100' : ''
                  }`}
                >
                  <a
                    href="#heatmap"
                    className="flex items-center gap-2"
                    onClick={() => handleMenuClick('heatmap')}
                  >
                    <BarChart2 size={16} className="text-gray-700" />
                    <span className="text-sm">Heatmap</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`px-3 py-2 ml-6 ${
                    isActive('list-view') ? 'bg-gray-100' : ''
                  }`}
                >
                  <a
                    href="#list-view"
                    className="flex items-center gap-2"
                    onClick={() => handleMenuClick('list-view')}
                  >
                    <List size={16} className="text-gray-700" />
                    <span className="text-sm">List view</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* QR Generator Group */}
        <SidebarGroup className="mb-1">
          <SidebarGroupLabel
            className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${
              isActive('qr-generator') ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
            onClick={() => handleMenuClick('qr-generator')}
          >
            <div className="flex items-center gap-2">
              <QrCode size={20} className="text-gray-700" />
              <span className="font-medium">QR Generator</span>
            </div>
          </SidebarGroupLabel>
        </SidebarGroup>

        {/* Onboarded Printers Group */}
        <SidebarGroup className="mb-1">
          <SidebarGroupLabel
            className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${
              isActive('printers') ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
            onClick={() => handleMenuClick('printers')}
          >
            <div className="flex items-center gap-2">
              <Printer size={20} className="text-gray-700" />
              <span className="font-medium">Onboarded Printers</span>
            </div>
          </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t mt-2 px-2 py-2">
        <div className="mt-auto flex">
          {/* Settings */}
          <SidebarGroup className="px-2 mb-1">
            <SidebarGroupLabel className="flex items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <Settings size={20} className="text-gray-700" />
                <span className="font-medium">Settings</span>
              </div>
            </SidebarGroupLabel>
          </SidebarGroup>
          <SidebarGroup className="px-2 mb-1">
            <SidebarGroupLabel className="flex items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <LogOut size={20} className="text-gray-700" />
                <span className="font-medium">Logout</span>
              </div>
            </SidebarGroupLabel>
          </SidebarGroup>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
