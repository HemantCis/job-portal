'use client';

import Header from '../Header/Header';
import Sidebar from '../Footer/Footer';
import Footer from '../Footer/Footer';

export default function MainLayout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <div className="container-fluid flex-grow-1">
                <div className="row">
                <div className="col-md-3 col-lg-2 d-none d-md-block sidebar">
                    <Sidebar />
                </div>
                <main className="col-md-9 col-lg-10 main-content">
                    {children}
                </main>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}