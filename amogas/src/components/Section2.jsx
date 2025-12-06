import React from "react";

export default function FeatureSection() {
  return (
    <div className="w-full py-10 px-6 flex flex-col md:flex-row gap-6 justify-center">

      {/* Card 1 – Ideation */}
      <div className="bg-yellow-200 rounded-2xl p-6 w-full md:w-1/4 shadow hover:shadow-lg transition">
        <div className="text-yellow-700 text-3xl mb-3"></div>
        <h3 className="font-semibold text-lg mb-2">Roll</h3>
        <p className="text-sm text-gray-700">
          Rolling is your primary evasion tactic, a quick maneuver that makes you briefly invincible (using "i-frames").
        </p>
      </div>

      {/* Card 2 – Creation */}
      <div className="bg-green-200 rounded-2xl p-6 w-full md:w-1/4 shadow hover:shadow-lg transition">
        <div className="text-green-700 text-3xl mb-3"></div>
        <h3 className="font-semibold text-lg mb-2">Creation</h3>
        <p className="text-sm text-gray-700">
          Create something that doesnt exist.
        </p>
      </div>

      {/* Card 3 – Collaboration */}
      <div className="bg-blue-200 rounded-2xl p-6 w-full md:w-1/4 shadow hover:shadow-lg transition">
        <div className="text-blue-700 text-3xl mb-3"></div>
        <h3 className="font-semibold text-lg mb-2">Parry</h3>
        <p className="text-sm text-gray-700">
          Parry is a high-risk, high-reward defensive maneuver using a left-hand shield or weapon (like a dagger) to deflect an enemy's attack just before impact, leaving them vulnerable for a devastating critical hit.
        </p>
      </div>

      {/* Card 4 – Guidance & Support */}
      <div className="bg-red-500 rounded-2xl p-6 w-full md:w-1/4 shadow hover:shadow-lg transition">
        <div className="text-pink-700 text-3xl mb-3"></div>
        <h3 className="font-semibold text-lg mb-2">Bosses</h3>
        <p className="text-sm text-gray-700">
          A uniquely powerful, non-respawning enemy that tests player skill, blocking story progression or offering valuable rewards like unique weapons and souls, often behind a white fog door, requiring strategy beyond normal combat to defeat.
        </p>
      </div>

    </div>
  );
}
