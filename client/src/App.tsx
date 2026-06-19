import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Dashboard from "@/pages/Dashboard";
import EmailBuilder from "@/pages/EmailBuilder";
import Campaigns from "@/pages/Campaigns";
import Segments from "@/pages/Segments";
import Templates from "@/pages/Templates";
import DashboardLayout from "@/components/DashboardLayout";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState } from "react";

type PageType = 'dashboard' | 'campaigns' | 'builder' | 'segments' | 'templates';

function Router() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'campaigns':
        return <Campaigns />;
      case 'builder':
        return <EmailBuilder />;
      case 'segments':
        return <Segments />;
      case 'templates':
        return <Templates />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Switch>
      <Route path={"/"}>
        <DashboardLayout currentPage={currentPage} onNavigate={(page) => setCurrentPage(page as PageType)}>
          {renderPage()}
        </DashboardLayout>
      </Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
