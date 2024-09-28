import React from 'react';
import './App.css';
import ImageSection from './components/ImageSection';
import SignupForm from './components/SignupForm';

const App = () => {
  return (
    <div className="app-container">
      <ImageSection />
      <SignupForm />
    </div>
  );
};

export default App;
