"use client";

import {
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const ICONS = [
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  BoltIcon,
];

function Features() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-12">
          Take action from insights
        </p>
        <div className="flex justify-center items-center gap-12 md:gap-20">
          {ICONS.map((Icon, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <Icon className="h-8 w-8 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
