import React from 'react'


export default function Layout({ children, className }) {
  return (
    <div
      className={`bg-base-100 p-6  mx-6 mt-3 transition-transform duration-700 ${className}`}

    >
      {children}
    </div>
  );
}

