import 'antd/dist/antd.css';
import React, { useState } from "react"
import Head from 'next/head';
import AppLayout from "../components/Applayout"
import "../components/index.css"



const HomePage = ({Component}) => {
    return (
        <div>
            <Head>
                <title>1987 CONSULTING</title>
                <link rel="icon" href="/changelogo.png" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
            </Head>
            <AppLayout><Component /></AppLayout>
        </div>    
    );
  };
  
  export default HomePage;