import React, { useState } from "react";

export default function Accordian() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <div className="w-[40%] mx-auto py-[100px]">
      <div className="text-center pb-7">
        <button className='py-2 px-5 bg-[#fefeff] text-[#1a5eff] font-bold  shadow-sm rounded-md'>FAQ</button>
        <h1 className="text-[55px] leading-[50px] text-[#1f2c3b] font-bold">You’ve got questions, we’ve got <span>answers</span></h1>
      </div>
       <div id="accordion-color">
      {/* Accordion Item 1 */}
      <h2 id="accordion-color-heading-1">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 ${open === 1 ? "bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white" : ""}`}
          onClick={() => toggle(1)}
          aria-expanded={open === 1}
          aria-controls="accordion-color-body-1"
        >
          <span>How can I tell if using AI is the right solution for my problem?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 ${open === 1 ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-1"
        className={`${open === 1 ? "block" : "hidden"}`}
        aria-labelledby="accordion-color-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Figuring out which process to enhance using AI can be tricky for business people. If you have a business problem where you feel that the solution might be hidden in data and can't be solved with simple rules, AI could be the answer.
            To define an AI use case, you'll need the help of an AI team, the person who knows the most about the issue (the problem owner), and technical specialists who understand how to deal with the problem in the technical world.
            </p>
          
        </div>
      </div>

      {/* Accordion Item 2 */}
      <h2 id="accordion-color-heading-2">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 ${open === 2 ? "bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white" : ""}`}
          onClick={() => toggle(2)}
          aria-expanded={open === 2}
          aria-controls="accordion-color-body-2"
        >
          <span>How long does an AI solution take to implement?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 ${open === 2 ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-2"
        className={`${open === 2 ? "block" : "hidden"}`}
        aria-labelledby="accordion-color-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Using AI involves a series of steps: collecting data, labeling it, developing and training the model, testing and evaluating it, and finally deploying the solution. At the beginning, data collection and labeling take 20-50% of the time (higher % for smaller or standard projects).

The rest of the time is spent on model development, testing, and deployment, which depends on how unique the problem is, the performance level required, and the complexity of deployment. AI projects can last anywhere from 3 months to several years, depending on the size and collaboration needed.

          </p>
          
        </div>
      </div>

      {/* Accordion Item 3 */}
      <h2 id="accordion-color-heading-3">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 ${open === 3 ? "bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white" : ""}`}
          onClick={() => toggle(3)}
          aria-expanded={open === 3}
          aria-controls="accordion-color-body-3"
        >
          <span>Will we need to make changes in our teams?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 ${open === 3 ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-3"
        className={`${open === 3 ? "block" : "hidden"}`}
        aria-labelledby="accordion-color-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            No, you don't have to fire employees. AI and automation are only there to help humans to be able to focus on the most important tasks by automating time-consuming and repetitive tasks. In the long run, process automation will make your teams happier and improves their performance.

              All you need to do is sit back, let the automation run the repetitive tasks, and focus on strategic tasks that only humans can do. With our experience running AI projects, we know how frustrating it is for company teams to integrate innovative AI &amp; automation solutions into their daily routines.

              With our approach, we not only implement an automation solution but also help you to realize the "Future of Work" with all the freedom that it brings.
          </p>      
        </div>
      </div>
    </div>
    </div>
  )
}
