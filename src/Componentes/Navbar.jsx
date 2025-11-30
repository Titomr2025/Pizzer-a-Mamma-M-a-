import React from 'react'

const Navbar = () => {
  const total = 25000;
  const token = false;

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center flex-grow-1">
          <span className="navbar-brand mb-0 h1 me-2 d-none d-md-inline">Pizzería Mamma Mía!</span>
          <span className="navbar-brand mb-0 h1 me-2 d-md-none">🍕 Mamma Mía!</span>
          <button className="btn btn-outline-light btn-sm me-1">
            <span className="d-none d-sm-inline">🍕 Home</span>
            <span className="d-sm-none">🍕</span>
          </button>
          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm me-1">
                <span className="d-none d-sm-inline">🔓 Profile</span>
                <span className="d-sm-none">🔓</span>
              </button>
              <button className="btn btn-outline-light btn-sm me-1">
                <span className="d-none d-sm-inline">🔒 Logout</span>
                <span className="d-sm-none">🔒</span>
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm me-1">
                <span className="d-none d-sm-inline">🔐 Login</span>
                <span className="d-sm-none">🔐</span>
              </button>
              <button className="btn btn-outline-light btn-sm me-1">
                <span className="d-none d-sm-inline">🔐 Register</span>
                <span className="d-sm-none">🔐</span>
              </button>
            </>
          )}
        </div>
        <button className="btn btn-outline-info btn-sm">
          <span className="d-none d-sm-inline">🛒 Total: ${formatPrice(total)}</span>
          <span className="d-sm-none">🛒 ${formatPrice(total)}</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
