import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const NewsUpdates = () => {
  const newsItems = [
    {
      date: '21-08-2024',
      title: 'Rathi Enterprises, a new Kajaria Galaxy Showroom inaugurated today in Dhangadi, Nepal',
      imgSrc: 'path-to-image-1',
    },
    {
      date: '20-08-2024',
      title: 'We\'re excited to share that we\'ve launched our 12th manufacturing plant, marking a significant milestone in our journey',
      imgSrc: 'path-to-image-2',
    },
    {
      date: '15-08-2024',
      title: 'This Independence Day, as we rise to salute our tricolour, we pay tribute to the Desh Ki M...',
      imgSrc: 'path-to-image-3',
    },
    {
      date: '09-08-2024',
      title: 'Sheela Traders, a new Kajaria Plus Showroom inaugurated today in Auraiya, Uttar Pradesh',
      imgSrc: 'path-to-image-4',
    },
  ];

  return (
    <section className="px-4 py-8">
      <h2 className="text-center text-4xl font-semibold mb-6">Latest News Updates</h2>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500">WHAT'S NEW @ SADHGURU</span>
        <a href="#" className="text-blue-600 hover:underline font-bold">SEE ALL</a>
      </div>

      <div className="relative flex overflow-x-scroll space-x-8">
        {/* Left Arrow */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button className="bg-gray-200 hover:bg-gray-300 text-black rounded-full h-10 w-10">
            &lt;
          </button>
        </div>

        {/* News Items */}
        <div className="flex space-x-6">
          {newsItems.map((news, index) => (
            <div key={index} className="flex-shrink-0 max-w-xs">
              <img
                src="data:image/jpeg;base64,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"
                alt={news.title}
                className="rounded-lg object-cover w-full h-48"
              />
              <div className="mt-4 text-center">
                <p className="text-gray-600">{news.date}</p>
                <h3 className="mt-2 text-lg font-medium text-gray-900">{news.title}</h3>
                <a href="#" className="mt-2 text-blue-500 hover:underline block">Read More</a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button className="bg-gray-200 hover:bg-gray-300 text-black rounded-full h-10 w-10">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
