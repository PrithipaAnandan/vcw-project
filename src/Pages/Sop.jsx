import TagLine7 from "../Components/TagLine/Content/TagLine7";
import Footer from "./Footer";
import Header from "./Header";

function Sop() {
  return (
    <>
      <div className="mx-4 sm:mx-10 lg:mx-20">
        <Header />
        <TagLine7 />
      </div>

      <div className=" mt-6 mx-20">
        <h1 className="text-3xl sm:text-4xl text-left lg:text-5xl font-bold mx-4 sm:mx-10 lg:mx-72">
          Standard Operating Procedure
        </h1>
      </div>

      <div className="mx-4 sm:mx-10 lg:mx-20 min-h-screen p-4 sm:p-6 lg:p-8">
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">1. Purpose</h2>
          <p className="text-gray-600 mt-2">
            <ul className="list-disc list-inside">
              <li>
                This SOP outlines the standards, procedures, and best practices for all projects and operations within Vcode Wonder. It aims to ensure a consistent, high-quality approach to development, design, and project management.
              </li>
            </ul>
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">2. Core Values</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Innovation: Continuously explore new technologies and solutions.</li>
            <li>Quality: Maintain high standards in code and product reliability.</li>
            <li>Efficiency: Aim for streamlined, optimized processes for all tasks.</li>
            <li>Collaboration: Foster teamwork and transparent communication.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">3. Development Standards</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Code Structure: Organize code by features and modules, using folders like /components, /pages, and /utils.</li>
            <li>Tailwind CSS: Use Tailwind classes for styling, with minimal custom CSS. Reuse common styling with the @apply directive.</li>
            <li>Best Practices: Follow DRY (Don`t Repeat Yourself) principles, write reusable components, and use Git for version control with regular, clear commits.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">4. Design Standards</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>UI Consistency: Follow a unified design language across all projects, focusing on responsive design and accessibility.</li>
            <li>Naming Conventions: Use PascalCase for components, camelCase for variables, and consistent naming across files.</li>
            <li>Documentation: Maintain clear comments and JSDoc annotations for all significant components and functions.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">5. Project Workflow</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Project Kickoff: Define clear goals, roles, and timelines at the start of each project.</li>
            <li>Version Control: Use Git with feature branches for new functionalities. Review and merge to main upon completion.</li>
            <li>Testing: Use Jest for unit tests and set up end-to-end testing for critical flows to ensure quality and reliability.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">6. Deployment</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Continuous Deployment: Utilize platforms like Vercel or Netlify for seamless deployment.</li>
            <li>Code Review: Perform code reviews for all major features before merging into the main branch.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">7. Communication Protocol</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Daily Standups: Hold brief meetings to update on progress, challenges, and next steps.</li>
            <li>Documentation: Log key changes and updates in a shared document repository for transparency and knowledge-sharing.</li>
          </ul>
        </section>
      </div>

      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default Sop;