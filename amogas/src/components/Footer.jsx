import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white pt-10 pb-4 border-t-4 border-blue-300">
      
      {/* Container pengatur posisi ke tengah */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Top Section */}
        <div className="w-full md:w-2/3">
          
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-lg font-semibold">Souls Room</span>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            Dark Souls is a dark fantasy action role-playing series developed 
            by FromSoftware and published by Bandai Namco Entertainment.
            It really is entertaining fr fr.
          </p>

          <p className="text-sm mb-2">
            Drangleic, Lothric
          </p>

          <p className="text-sm mb-1">AncientKing@oldkingdom.webmail</p>
          <p className="text-sm">What is a phone?</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-blue-400 pt-3 text-center text-sm flex items-center justify-center gap-2">
        <span>© 2025 Souls Room | All Rights Reserved</span>
      </div>

    </footer>
  );
}
