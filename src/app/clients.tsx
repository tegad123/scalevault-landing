"use client";

function Clients() {
  return (
    <div className="bg-[#FAFAFA] py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {[...Array(10)].map((_, idx) => (
            <div
              key={idx}
              className="h-16 border border-gray-200 rounded-lg bg-white flex items-center justify-center"
            >
              <span className="text-gray-300 text-xs">Logo</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;

