"use client";

import React from "react";

export default function ContactForm() {
    function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pt-4">
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="name" className="font-medium uppercase">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name*"
          className="border-base-200 rounded-lg border bg-white p-3"
        />
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="phone" className="font-medium uppercase">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter your phone number*"
          className="border-base-200 rounded-lg border bg-white p-3"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-2 text-sm">
        <label htmlFor="email" className="font-medium uppercase">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email*"
          className="border-base-200 rounded-lg border bg-white p-3"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-2 text-sm">
        <label htmlFor="message" className="font-medium uppercase">
          Message
        </label>
        <textarea
          rows={8}
          name="message"
          id="message"
          placeholder="Enter your message*"
          className="border-base-200 resize-none rounded-lg border bg-white p-3"
        />
      </div>
      <button
        type="submit"
        className="bg-accent hover:bg-accent-200 disabled:bg-accent/50 col-span-2 rounded-lg px-4 py-2 text-sm font-medium text-white duration-200 sm:text-base"
      >
        Send Message
      </button>
    </form>
  );
}
