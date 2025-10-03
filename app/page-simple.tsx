import React from 'react';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', marginTop: '80px' }}>
        <h1>ScholarBridge</h1>
        <p>Scholarship Management Platform</p>
        <p>One application, multiple scholarship opportunities.</p>
      </main>
    </div>
  );
}