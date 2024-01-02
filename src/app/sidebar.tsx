import './sidebar.css'

export default function Sidebar() {
    return <div>
        <div className="flex-shrink-0 p-3">
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                        Section 1
                    </button>
                    <div className="collapse show" id="home-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sub-Section 1</a></li>
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sub-Section 2</a></li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Section 2
                    </button>
                    <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sub-Section 1</a></li>
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sub-Section 2</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
}