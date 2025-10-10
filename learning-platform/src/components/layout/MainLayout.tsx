import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';

interface MainLayoutProps {
  children?: ReactNode;
}

export interface LayoutState {
  leftPanelCollapsed: boolean;
  leftPanelWidth: number;
}

export interface LayoutActions {
  toggleLeftPanel: () => void;
  setLeftPanelWidth: (width: number) => void;
  collapseAllPanels: () => void;
  expandAllPanels: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = () => {
  const { theme } = useTheme();

  // Layout state management
  const [layoutState, setLayoutState] = useState<LayoutState>({
    leftPanelCollapsed: false,
    leftPanelWidth: 320, // Default Discord sidebar width
  });

  // Layout actions
  const layoutActions: LayoutActions = {
    toggleLeftPanel: () =>
      setLayoutState(prev => ({ ...prev, leftPanelCollapsed: !prev.leftPanelCollapsed })),

    setLeftPanelWidth: (width: number) =>
      setLayoutState(prev => ({ ...prev, leftPanelWidth: Math.max(200, Math.min(500, width)) })),

    collapseAllPanels: () =>
      setLayoutState(prev => ({ ...prev, leftPanelCollapsed: true })),

    expandAllPanels: () =>
      setLayoutState(prev => ({ ...prev, leftPanelCollapsed: false })),
  };

  // Responsive breakpoints
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Auto-collapse panels on mobile
  React.useEffect(() => {
    if (isMobile) {
      setLayoutState(prev => ({
        ...prev,
        leftPanelCollapsed: true,
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
          pointerEvents: 'none',
        }}
      />
      {/* Left Panel - Topics */}
      <div
        className="flex-shrink-0 transition-all duration-300 ease-in-out"
        style={{
          width: layoutState.leftPanelCollapsed ? 60 : layoutState.leftPanelWidth,
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

      {/* Mobile Overlay for Panels */}
      {isMobile && !layoutState.leftPanelCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => layoutActions.collapseAllPanels()}
        />
      )}
    </div>
  );
};

export default MainLayout;