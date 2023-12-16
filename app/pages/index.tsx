import React from 'react';
import MainButton from '../components/ui/PrimaryButton'; 
import SecondButton from '../components/ui/SecondaryButton'; 
import styles from '../styles/home.module.css';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', backgroundColor: '#020281', justifyContent: 'center', alignItems: 'center', padding: '0px' }}>
      {/* Left Side - Image with Padding */}
      <div style={{ width: 'calc(45%)', height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0px' }}>
        <img 
          src="https://www.imgbly.com/ib/Q8I4Mq5vPY.png" 
          alt="GEA Image" 
          style={{ maxWidth: '100%', maxHeight: '100%' }} 
        />
      </div>

       <div className={styles.responsiveCard}>
          <h1>Welcome to test</h1>
          <h2>GEA Template App</h2>
          <div style={{ marginTop: '20px' }}>
            <MainButton onClick={() => router.push('/builder')} />
            <SecondButton />
          </div>
        </div> 
        </div>  );  
}
