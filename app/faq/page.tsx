// app/faq/page.tsx
"use client";

import React from 'react';
import Layout from "./faq_layout";
import Image from "next/image";
import Link from "next/link";

// Note from Ethan: I think this is the most efficient way to allow easy access/editing of the questions. Using a text file for dynamic rendering of FAQ page is out of scope and unnecessary for this project.
const Q1 = "What is the difference between GreenLiving, GreenifyAI, and GreenExpectations?";
const A1 = "PLACEHOLDER TEXT, NEED DETAILED ANSWER";

const Q2 = "How is my sustainability score calculated?";
const A2 = "To determine how eco-friendly your home and lifestyle are, we consider your overall energy and water usage, the amount of renewable energy you use, and the air quality in your home. Each factor gets a score based on your performance, and these scores are added up and then translated into a grade, from F (lowest) to S (highest).";

const Q3 = "How was your AI-powered chatbot developed?";
const A3 = "Our AI-powered chatbot was built on the Gemini-1.5-Flash-8B model, enabling efficient natural language processing. Using API keys provided by the model, our chatbot delivers accurate responses to user queries in real-time. Python and Flask were used to incorporate multiple endpoints to facilitate our chatbot's functionality. ";

const FaqPage = () => {
    return(
<Layout>
      {/*} CSS grid to center content like home tsx page*/}
      <div className="default-page-bg"> {/* Page background with mint->white gradient*/}
<<<<<<< HEAD
          <h1 className="page-title text-center">
      Frequently Asked Questions
    </h1>
      <p className="page-caption text-center">
      Here are some answers to frequently asked questions!
      </p>
        <div className="flex flex-col w-3/4 mb-6 mt-2 bg-white shadow-lg rounded-lg p-6" style={{outline: "2px solid #22c55e"}}>
          <div>
=======
        <h1 className="page-title">
          Frequently Asked Questions
        </h1>
        <p className="page-caption">
          Here are some answers to frequently asked questions!
        </p>

        <div className="flex flex-col w-3/4 mb-6 bg-white shadow-lg rounded-lg p-6" style={{outline: "2px solid #22c55e"}}>
>>>>>>> 4c7981ff2f1622f4ab5ecd9c68115223749fce0c
            <div className="flex items-center space-x-2 mb-4">
                <i className="fa-icon-dark mr-1 fa-solid fa-lg fa-question-circle"></i> {/*} Question Mark Icon*/}
                <h2 className="text-lg font-semibold">{ Q1 }</h2>
            </div>
            <div className="flex items-baseline space-x-2">
                <i className="fa-icon-dark mr-1 fa-solid fa-lg fa-reply"></i> {/*} Reply Icon*/}
                <p className="text-lg text-gray-800">{ A1 }</p>
            </div>
        </div>

        <div className="flex flex-col w-3/4 mb-6 bg-white shadow-lg rounded-lg p-6" style={{outline: "2px solid #22c55e"}}>
            <div className="flex items-center space-x-2 mb-4">
                <i className="fa-icon-dark mr-1 fa-solid fa-lg fa-question-circle"></i> {/*} Question Mark Icon*/}
                <h2 className="text-lg font-semibold">{ Q2 }</h2>
            </div>
            <div className="flex items-baseline space-x-2">
                <i className="fa-icon-dark mr-1 fa-solid fa-lg fa-reply"></i> {/*} Reply Icon*/}
                <p className="text-lg text-gray-800">{ A2 }</p>
            </div>
        </div>

        <div className="flex flex-col w-3/4 mb-6 bg-white shadow-lg rounded-lg p-6" style={{outline: "2px solid #22c55e"}}>
            <div className="flex items-center space-x-2 mb-4">
                <i className="fa-icon-dark mr-1 fa-solid fa-lg fa-question-circle"></i> {/*} Question Mark Icon*/}
                <h2 className="text-lg font-semibold">{ Q3 }</h2>
            </div>
            <div className="flex items-baseline space-x-2">
                <i className="fa-icon-dark mr-1 fa-solid fa-lg fa-reply"></i> {/*} Reply Icon*/}
                <p className="text-lg text-gray-800">{ A3 }</p>
            </div>
        </div>

        {/*} TODO: Want to add buttons which direct to the Chatbot page with a prompt for more details*/}
      </div>
    </Layout>
  
    )
}
// Exports the faq for availability in other parts of the app
export default FaqPage;