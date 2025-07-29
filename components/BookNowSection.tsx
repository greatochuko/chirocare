import React from "react";

export default function BookNowSection() {
  return (
    <div className="bg-accent flex flex-col items-center gap-4 p-8 text-center text-white sm:gap-6 sm:p-12 lg:p-16">
      <h4 className="text-lg font-semibold capitalize sm:text-xl md:text-2xl lg:text-3xl">
        Ready to start your journey to better health?
      </h4>
      <p className="sm:text-lg">Schedule your free consultation today!</p>
      <button className="text-accent hover:bg-accent rounded-full border-2 border-white bg-white px-4 py-2 text-sm font-semibold duration-200 hover:text-white sm:px-6 sm:py-3 sm:text-base">
        Book an Appointment
      </button>
    </div>
  );
}
