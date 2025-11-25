import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';

interface MainLayoutProps {
  children?: ReactNode;
}

export interface LayoutState {
  leftPanelCollapsed: boolean;
  leftPanelWidth: number;
  rightPanelCollapsed: boolean;
}

export interface LayoutActions {
  toggleLeftPanel: () => void;
  toggleRightPanel: () => void;
  setLeftPanelWidth: (width: number) => void;
  collapseAllPanels: () => void;
  expandAllPanels: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = () => {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  // Mobile detection with resize listener
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Layout state management
  const [layoutState, setLayoutState] = useState<LayoutState>({
    leftPanelCollapsed: false,
    leftPanelWidth: 320, // Default Discord sidebar width
    rightPanelCollapsed: false,
  });

  // Layout actions
  const layoutActions: LayoutActions = {
    toggleLeftPanel: () =>
      setLayoutState(prev => ({ ...prev, leftPanelCollapsed: !prev.leftPanelCollapsed })),

    toggleRightPanel: () =>
      setLayoutState(prev => ({ ...prev, rightPanelCollapsed: !prev.rightPanelCollapsed })),

    setLeftPanelWidth: (width: number) =>
      setLayoutState(prev => ({ ...prev, leftPanelWidth: Math.max(200, Math.min(500, width)) })),

    collapseAllPanels: () =>
      setLayoutState(prev => ({ ...prev, leftPanelCollapsed: true, rightPanelCollapsed: true })),

    expandAllPanels: () =>
      setLayoutState(prev => ({ ...prev, leftPanelCollapsed: false, rightPanelCollapsed: false })),
  };

  // Auto-collapse left panel on mobile
  useEffect(() => {
    if (isMobile) {
      setLayoutState(prev => ({
        ...prev,
        leftPanelCollapsed: true,
      }));
    }
  }, [isMobile]);

  return (
    <div
      className="flex overflow-hidden relative"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary,
        height: '100dvh',
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

      {/* Desktop Left Panel - Topics */}
      {!isMobile && (
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
      )}

      {/* Mobile Drawer - Left Panel */}
      {isMobile && !layoutState.leftPanelCollapsed && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => layoutActions.collapseAllPanels()}
            style={{
              animation: prefersReducedMotion ? 'none' : 'fadeIn 0.3s ease-out',
            }}
          />
          {/* Drawer */}
          <div
            className="absolute inset-y-0 left-0 w-[88%] max-w-sm shadow-xl pt-safe-t pb-safe-b"
            style={{
              backgroundColor: theme.colors.sidebar,
              animation: prefersReducedMotion ? 'none' : 'slideInFromLeft 0.3s ease-out',
              willChange: prefersReducedMotion ? 'auto' : 'transform',
            }}
          >
            <LeftPanel
              isCollapsed={false}
              width={320}
              layoutActions={layoutActions}
            />
          </div>
        </div>
      )}

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
        <CenterPanel layoutActions={layoutActions} layoutState={layoutState} isMobile={isMobile} />
      </div>
    </div>
  );
};

export default MainLayout;