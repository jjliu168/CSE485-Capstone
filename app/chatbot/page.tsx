// app/chatbot/page.tsx
"use client"; // This allows for the use of the useState hooks
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect} from 'react'; // Use state is a hook for dynamic states
import Layout from './chatbot_layout';

const ChatbotPage = () => {
    // Store/Track user input and response here
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState<{type: string; text: string}[]>([]);// Creates an array to store chat messages

    // Create a reference to the bottom of the messages container
    const bottomReference = useRef<HTMLDivElement>(null);

    // Scroll to bottom of messages container when messages are updated
    useEffect(() => {
        bottomReference.current?.scrollIntoView({ behavior: 'smooth'});
    }, [messages]); // Triggers upon change of the 'messages' array


    // Handle Input Changes Dynamically
    const handleInputChanges = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(event.target.value);
    }
    // Take input and generate response
    const handleSubmission = () => {
        // Upon submisison appends user message to chat history and displays
        if (userInput.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { type: 'user', text: userInput }, // Add user's message
                { type: 'bot', text: 'This is a placeholder response.' } // Placeholder bot response to be changed later
            ]);
            setUserInput(''); // Clears the user input
        }
        
    }
    return(
        <Layout>
            {/* Use the same grid and flex styling as the calculator page */}
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#d4f3e8]"> {/*Chatbot Background here*/}
                <h1 className="text-4xl font-bold mt-4">Chatbot</h1>
                <p className="text-lg mt-2 mb-8 text-gray-600">This is the placeholder page for the Chatbot.</p>
                {/* Message Container */}
                <div className="flex flex-col w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 mb-4 flex-1 overflow-y-auto">
                    {/* Renders each message */}
                    {messages.map((message, index) => ( // For each message in the array messages it will execute function in braces
                       <div
                            key={index} // Create a separate div element for each message
                            className={`p-3 rounded-full mb-4 max-w-xs ${
                                message.type === 'user' ? 'bg-blue-100 text-blue-900 ml-auto' : 'bg-gray-200 text-gray-900' // Sets message colors based on where message from
                            }`}
                       >
                                {message.text} {/* Displays the content of the message */}
                       </div> 
                    ))}
                    <div ref={bottomReference} />   {/* Reference for the bottom to scroll to */}
                </div>
                {/* Bottom Input Section */}
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-4 mb-4 flex items-center sticky bottom-0"> 
                    {/* Text Input box */}
                    <textarea
                        value={userInput}
                        onChange={handleInputChanges}
                        // Treat "Enter" key as submit
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' && !event.shiftKey) { // When shifted will add a new line
                                handleSubmission();
                                event.preventDefault(); // Prevents adding a new line
                            }
                        }}
                        className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                        rows={1}
                        placeholder="Message Chatbot" // Replace when come up with name for chatbot
                    />
                    {/* Summission Button */}
                    <button
                        onClick={handleSubmission}
                        className="ml-4 w-30 px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-100"
                    >
                        Submit
                    </button>

                </div>
                {/* You can extend this with actual chatbot functionality later */}

                {/* Add a link back to the homepage */}
                <Link 
                    href="/" 
                    className="bg-greenify-button-green mt-4 mb-8 rounded-full shadow-sm border border-solid border-black/[.08] transition-colors flex items-center justify-center text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 hover:bg-[#2e6957]"

                >
                    Go back to the homepage
                </Link>
            </div>
        </Layout>

    )
}
// Exports the chatbot for availability in other parts of the app
export default ChatbotPage;