import React, { useState } from "react";

const Modal = () => {
  

  return (
    <>
      <main className="flex items-center justify-center w-screen h-screen flex-col bg-gray-100">
        <button
          type="button"
          className="flex items-center justify-center px-4 font-medium bg-violet-700 text-white h-9 rounded-md hover:bg-violet-800 transition-all duration-300"
          onClick={handleOpenModal}
        >
          <span className="flex items-center justify-center space-x-2">
            Open modal
          </span>
        </button>

        {showModal && (
          <div
            role="dialog"
            id="modal-example"
            aria-hidden={!showModal}
            className={`modal fixed top-0 left-0 z-50 w-screen h-screen bg-black/30 flex items-center flex-col justify-center p-6 ${
              showModal ? "show" : "fade"
            }`}
            tabIndex="-1"
          >
            <div
              className="absolute top-0 left-0 z-[0] w-full h-full"
              tabIndex="-1"
            />
            <article
              className="modal-content flex flex-col relative m-0 rounded-md bg-white sm:my-16"
              aria-labelledby="modal-title"
              aria-describedby="modal-body"
            >
              <header className="flex p-4 items-center justify-between">
                <h2 className="m-0 text-xl font-medium max-w-[calc(100%_-_3rem)]">
                  Modal title
                </h2>
                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-colors duration-300 hover:bg-black/10"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </header>
              <main className="relative flex-[1_1_auto] p-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing…</p>
              </main>
              <footer className="flex flex-shrink-0 flex-wrap items-center justify-end flex-row p-4 gap-1">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 font-medium bg-gray-200 text-black h-9 rounded-md hover:bg-gray-300 transition-all duration-300"
                  onClick={handleCloseModal}
                >
                  <span className="flex items-center justify-center space-x-2">
                    Close
                  </span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 font-medium bg-violet-700 text-white h-9 rounded-md hover:bg-violet-800 transition-all duration-300"
                >
                  <span className="flex items-center justify-center space-x-2">
                    Save changes
                  </span>
                </button>
              </footer>
            </article>
          </div>
        )}
      </main>
    </>
  );
};

export default Modal;
