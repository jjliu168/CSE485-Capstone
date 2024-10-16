// app/faq/page.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from "./faq_layout";

const FaqPage = () => {
    return(
        <Layout>
        {/*} CSS grid to center content like home tsx page*/}
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-b from-mint-green to-[#FFFFFF]">
          {/* Main content area (centered) */}
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1 className="text-4xl">Frequently Asked Questions</h1>
            <p className="text-lg mt-4">This is a placeholder page for the FAQ.</p>
          </main>
        </div>
  
      </Layout>
  
    )
}
// Exports the faq for availability in other parts of the app
export default FaqPage;