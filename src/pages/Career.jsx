import React from 'react';

const CareerComponent = () => {
  // Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, labore? Recusandae, nihil eos. Beatae veritatis corrupti libero adipisci voluptate. Impedit.
  const jobOpenings = [
    {
      title: "ABCD",
      location: "Pune, India",
      description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, labore? Recusandae, nihil eos. Beatae veritatis corrupti libero adipisci voluptate. Impedit.",
      
    },
    {
      title: "ABCD",
      location: "Pune, India",
      description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, labore? Recusandae, nihil eos. Beatae veritatis corrupti libero adipisci voluptate. Impedit.",
    },
  ];

  const handleApplyClick = (jobTitle) => {
    const mailtoLink = `mailto:hr.swarajengineering@gmail.com?subject=Application for ${encodeURIComponent(
      jobTitle
    )}&body=Dear HR,%0D%0A%0D%0AI am writing to apply for the position of ${encodeURIComponent(jobTitle)}. Please find my resume attached.%0D%0A%0D%0AThank you.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="career-container p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Job Openings</h1>
      {jobOpenings.map((job, index) => (
        <div key={index} className="job-card bg-white p-6 mb-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">{job.title}</h2>
          <p className="text-lg font-medium text-gray-600">{job.location}</p>
          <p className="text-md mt-2 text-gray-700">{job.description}</p>
          
          <button
            onClick={() => handleApplyClick(job.title)}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Apply
          </button>
        </div>
      ))}
    </div>
  );
};

export default CareerComponent;
