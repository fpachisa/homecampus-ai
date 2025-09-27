import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';

interface MainLayoutProps {
  children?: ReactNode;
}

export interface LayoutState {
  leftPanelCollapsed: boolean;
  rightPanelCollapsed: boolean;
  leftPanelWidth: number;
  rightPanelWidth: number;
}

export interface LayoutActions {
  toggleLeftPanel: () => void;
  toggleRightPanel: () => void;
  setLeftPanelWidth: (width: number) => void;
  setRightPanelWidth: (width: number) => void;
  collapseAllPanels: () => void;
  expandAllPanels: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = () => {
  const { theme } = useTheme();

  // Layout state management
  const [layoutState, setLayoutState] = useState<LayoutState>({
    leftPanelCollapsed: false,
    rightPanelCollapsed: false,
    leftPanelWidth: 320, // Default Discord sidebar width
    rightPanelWidth: 280, // Default right panel width
  });

  // Layout actions
  const layoutActions: LayoutActions = {
    toggleLeftPanel: () =>
      setLayoutState(prev => ({ ...prev, leftPanelCollapsed: !prev.leftPanelCollapsed })),

    toggleRightPanel: () =>
      setLayoutState(prev => ({ ...prev, rightPanelCollapsed: !prev.rightPanelCollapsed })),

    setLeftPanelWidth: (width: number) =>
      setLayoutState(prev => ({ ...prev, leftPanelWidth: Math.max(200, Math.min(500, width)) })),

    setRightPanelWidth: (width: number) =>
      setLayoutState(prev => ({ ...prev, rightPanelWidth: Math.max(200, Math.min(400, width)) })),

    collapseAllPanels: () =>
      setLayoutState(prev => ({ ...prev, leftPanelCollapsed: true, rightPanelCollapsed: true })),

    expandAllPanels: () =>
      setLayoutState(prev => ({ ...prev, leftPanelCollapsed: false, rightPanelCollapsed: false })),
  };

  // Responsive breakpoints
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Auto-collapse panels on mobile
  React.useEffect(() => {
    if (isMobile) {
      setLayoutState(prev => ({
        ...prev,
        leftPanelCollapsed: true,
        rightPanelCollapsed: true,
      }));
    }
  }, [isMobile]);

  return (
    <div
      className="flex h-screen overflow-hidden relative"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary,
      }}
    >
      {/* Background texture/pattern for depth */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(88, 101, 242, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(71, 82, 196, 0.05) 0%, transparent 50%)',
        }}
      />
      {/* Left Panel - Topics */}
      <div
        className={`flex-shrink-0 transition-all duration-300 ease-in-out ${
          layoutState.leftPanelCollapsed ? 'w-0' : ''
        }`}
        style={{
          width: layoutState.leftPanelCollapsed ? 0 : layoutState.leftPanelWidth,
        }}
      >
        <LeftPanel
          isCollapsed={layoutState.leftPanelCollapsed}
          width={layoutState.leftPanelWidth}
          layoutActions={layoutActions}
        />
      </div>

      {/* Resize Handle for Left Panel */}
      {!layoutState.leftPanelCollapsed && !isMobile && (
        <div
          className="w-1 cursor-col-resize hover:bg-brand/50 transition-colors duration-200 flex-shrink-0"
          style={{ backgroundColor: theme.colors.border }}
          onMouseDown={(e) => {
            e.preventDefault();
            const startX = e.clientX;
            const startWidth = layoutState.leftPanelWidth;

            const handleMouseMove = (e: MouseEvent) => {
              const newWidth = startWidth + (e.clientX - startX);
              layoutActions.setLeftPanelWidth(newWidth);
            };

            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
        />
      )}

      {/* Center Panel - Chat */}
      <div className="flex-1 flex flex-col min-w-0">
        <CenterPanel layoutActions={layoutActions} layoutState={layoutState} />
      </div>

      {/* Resize Handle for Right Panel */}
      {!layoutState.rightPanelCollapsed && !isMobile && (
        <div
          className="w-1 cursor-col-resize hover:bg-brand/50 transition-colors duration-200 flex-shrink-0"
          style={{ backgroundColor: theme.colors.border }}
          onMouseDown={(e) => {
            e.preventDefault();
            const startX = e.clientX;
            const startWidth = layoutState.rightPanelWidth;

            const handleMouseMove = (e: MouseEvent) => {
              const newWidth = startWidth - (e.clientX - startX);
              layoutActions.setRightPanelWidth(newWidth);
            };

            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
        />
      )}

      {/* Right Panel - Scratch Pad */}
      <div
        className={`flex-shrink-0 transition-all duration-300 ease-in-out ${
          layoutState.rightPanelCollapsed ? 'w-0' : ''
        }`}
        style={{
          width: layoutState.rightPanelCollapsed ? 0 : layoutState.rightPanelWidth,
        }}
      >
        <RightPanel
          isCollapsed={layoutState.rightPanelCollapsed}
          width={layoutState.rightPanelWidth}
          layoutActions={layoutActions}
        />
      </div>

      {/* Floating Toggle Buttons for Collapsed Panels */}
      {layoutState.leftPanelCollapsed && (
        <button
          onClick={layoutActions.toggleLeftPanel}
          className="fixed left-4 top-20 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-float"
          style={{
            background: theme.gradients.brand,
            color: '#ffffff',
            boxShadow: theme.shadows.glow,
          }}
          title="Show Topics Panel"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {layoutState.rightPanelCollapsed && (
        <button
          onClick={layoutActions.toggleRightPanel}
          className="fixed right-4 top-20 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-float"
          style={{
            background: theme.gradients.brand,
            color: '#ffffff',
            boxShadow: theme.shadows.glow,
            animationDelay: '0.2s',
          }}
          title="Show Scratch Pad"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>
      )}

      {/* Mobile Overlay for Panels */}
      {isMobile && (!layoutState.leftPanelCollapsed || !layoutState.rightPanelCollapsed) && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => layoutActions.collapseAllPanels()}
        />
      )}
    </div>
  );
};

export default MainLayout;