import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#07071b] text-[#a9a9e2] p-8">
      {/* Background Section */}
      <div className="mb-16">
        <h2 className="text-blue-500 text-2xl font-bold mb-4">About Me</h2>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-blue-500 text-2xl font-bold mb-4">SKILLS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">LANGUAGES</h3>
            <ul className="space-y-1">
              <li>JavaScript (ES6)</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS/Sass</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">FRAMEWORKS</h3>
            <ul className="space-y-1">
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">TOOLS</h3>
            <ul className="space-y-1">
              <li>Bash</li>
              <li>Git & GitHub</li>
              <li>Chrome DevTools</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
