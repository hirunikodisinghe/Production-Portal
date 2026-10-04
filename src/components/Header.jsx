function Header() {
  return (
    <header className="portal-header">
      <div className="brand">
        <div className="logo-box">
  <img
    src="/production-portal/images/gri-logo.png"
    alt="GRI Logo"
    className="logo-icon"
  />
</div>
        <div>
          <h2>ST3 - Production Insights</h2>
          <span>ST3 Production Dashboard Portal</span>
        </div>
      </div>

      <button className="header-btn">System Online</button>
    </header>
  );
}

export default Header;