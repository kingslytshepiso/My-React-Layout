import Sidebar from "./sidebar";

export default function Header() {
  return <nav className="navbar navbar-expand-sm navbar-light bg-light" aria-label="Third navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Layout Logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <div className='d-sm-none d-block d-md-none'>
              <Sidebar />
            </div>
          </li>
        </ul>
      </div>

    </div>
  </nav>
}