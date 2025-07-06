export function SidebarMobile({ onToggleSidebar, children }) {
  return (
    <div className="mobile-sidebar">
      <div className="mobile-sidebar-header">
        <button
          type="button"
          className="mobile-sidebar-close"
          aria-label="Close menu"
          onClick={() => onToggleSidebar(false)}
        >
          ×
        </button>
      </div>
      <div className="offcanvas-body">{children}</div>
    </div>
  );
}
