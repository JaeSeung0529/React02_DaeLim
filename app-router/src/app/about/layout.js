// src/app/about/layout.js
export const metadata = {
    title: 'About',
    description: 'About page layout',
  };
  
  export default function AboutLayout({ children }) {
    return (
      <div>
        <h3>Sub Layout for About</h3>
        {children}
      </div>
    );
  }
  