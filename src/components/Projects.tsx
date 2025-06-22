export default function Projects() {
  return (
    <section className="py-10 px-4 md:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">CompanyConnect</h3>
          <p className="text-gray-700">
            Social platform for companies and users. Includes login system,
            profile pages, feedback and company discovery.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">3D Warehouse Manager</h3>
          <p className="text-gray-700">
            React + Three.js app for visualizing and managing warehouse
            inventory in 3D space.
          </p>
        </div>
      </div>
    </section>
  );
}
