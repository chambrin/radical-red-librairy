import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

// edge runtime
export const runtime = 'edge'

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-48 xl:px-72 2xl:px-96">
            {children}
        </div>
    );
};

export default Layout;