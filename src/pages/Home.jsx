import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center px-3 py-5">
            <div className="card hero-panel p-4 p-md-5" style={{ maxWidth: 920, width: '100%' }}>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-7">
                        <span className="hero-badge mb-3">Company Hiring Platform</span>
                        <h1 className="display-5 fw-bold mb-3">Hire Tracker</h1>
                        <p className="lead text-muted mb-4">
                            A polished, modern solution for managing departments, jobs, applicants, employees, and attendance from one secure place.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                            <Link to="/login" className="btn btn-primary px-4 py-2">Login</Link>
                            <Link to="/register" className="btn btn-outline-secondary px-4 py-2">Create Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
