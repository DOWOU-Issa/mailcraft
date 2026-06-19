import React, { useState } from 'react';
import { Mail, BarChart3, Send, Users, Settings, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function DashboardLayout({
  children,
  currentPage,
  onNavigate,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Tableau de bord',
      icon: <BarChart3 className="w-5 h-5" />,
      active: currentPage === 'dashboard',
    },
    {
      id: 'campaigns',
      label: 'Campagnes',
      icon: <Send className="w-5 h-5" />,
      active: currentPage === 'campaigns',
    },
    {
      id: 'builder',
      label: 'Générateur',
      icon: <Mail className="w-5 h-5" />,
      active: currentPage === 'builder',
    },
    {
      id: 'segments',
      label: 'Segments',
      icon: <Users className="w-5 h-5" />,
      active: currentPage === 'segments',
    },
    {
      id: 'templates',
      label: 'Modèles',
      icon: <Mail className="w-5 h-5" />,
      active: currentPage === 'templates',
    },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed md:relative z-40 h-screen w-64 bg-white border-r border-border transition-transform duration-300 ease-out animate-slide-in-left',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663575754439/XqeztSmuMvbJ87RzP4YbbH/mailcraft-logo-in9Q22xC69eWsqpdec3CEx.webp"
                alt="MailCraft"
                className="w-10 h-10"
              />
              <h1 className="text-xl font-bold text-foreground">MailCraft</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 animate-fade-in-up',
                  item.active
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground hover:bg-muted'
                )}
                style={{
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                {item.icon}
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors">
              <Settings className="w-5 h-5" />
              <span className="font-medium text-sm">Paramètres</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="font-medium text-sm">Déconnexion</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="md:p-8 p-4 pt-16 md:pt-8">
          {children}
        </div>
      </main>
    </div>
  );
}
