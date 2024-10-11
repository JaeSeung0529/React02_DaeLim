// src/app/about/layout.js
export const metadata = {
    title: 'Blog',
    description: 'Blog page layout',
  };
  
  export default function BlogLayout({ children }) {
    return (
      <div>
        <h3>Sub Layout for About</h3>
        {children}
      </div>
    );
  }
  