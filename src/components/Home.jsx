import React from 'react'

const Home = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-center p-6">
    <div className="max-w-3xl">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-[#75b469] via-[#efce74] via-[#fb833f] via-[#fecc4f] via-[#fb11e0] via-[#fe732b] via-[#0149ff] via-[#01a3ff] via-[#3e85fe] via-[#883eec] to-[#75b469] bg-clip-text text-transparent">
        RESTRICTED BY OPPORTUNITY
      </h3>
  
      <h1 className="text-[64px] font-extrabold text-[#f8f8f8] leading-tight">
        GET THE TECH CAREER
      </h1>
      <h1 className="text-[64px] font-extrabold text-[#f8f8f8] leading-tight">
        YOU DESERVE. FASTER
      </h1>
  
      <p className="tracking-[0] font-normal text-[16px] leading-[24px] text-gray-300 mt-4">
        Structured coding courses that get you there faster with confidence.
      </p>
    </div>
  </div>
  
{/* //   <!-- Student Feedback Section --> */}
  <div className="bg-gray-800 py-12 px-6">
    <h2 className="text-3xl font-bold text-center text-white mb-8">Student Feedback</h2>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* <!-- Student Card 1 --> */}
      <div className="bg-gray-700 p-6 rounded-xl shadow-lg text-white">
        <img src="https://via.placeholder.com/100" alt="Student 1" className="w-16 h-16 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold">John Doe</h3>
        <p className="text-gray-300 mt-2">
          "This course completely changed my career! The structured learning path and real-world projects helped me land my first tech job."
        </p>
      </div>
  
      {/* <!-- Student Card 2 --> */}
      <div className="bg-gray-700 p-6 rounded-xl shadow-lg text-white">
        <img src="https://via.placeholder.com/100" alt="Student 2" className="w-16 h-16 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold">Emily Smith</h3>
        <p className="text-gray-300 mt-2">
          "I loved how interactive the lessons were. The mentorship and support from the instructors were truly amazing!"
        </p>
      </div>
  
      {/* <!-- Student Card 3 --> */}
      <div className="bg-gray-700 p-6 rounded-xl shadow-lg text-white">
        <img src="https://via.placeholder.com/100" alt="Student 3" className="w-16 h-16 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold">Michael Lee</h3>
        <p className="text-gray-300 mt-2">
          "The hands-on projects helped me gain confidence in coding. I highly recommend this course to anyone starting in tech!"
        </p>
      </div>
      <div className="bg-gray-700 p-6 rounded-xl shadow-lg text-white">
        <img src="https://via.placeholder.com/100" alt="Student 3" className="w-16 h-16 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold">Michael Lee</h3>
        <p className="text-gray-300 mt-2">
          "The hands-on projects helped me gain confidence in coding. I highly recommend this course to anyone starting in tech!"
        </p>
      </div>
      <div className="bg-gray-700 p-6 rounded-xl shadow-lg text-white">
        <img src="https://via.placeholder.com/100" alt="Student 3" className="w-16 h-16 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold">Michael Lee</h3>
        <p className="text-gray-300 mt-2">
          "The hands-on projects helped me gain confidence in coding. I highly recommend this course to anyone starting in tech!"
        </p>
      </div>
      <div className="bg-gray-700 p-6 rounded-xl shadow-lg text-white">
        <img src="https://via.placeholder.com/100" alt="Student 3" className="w-16 h-16 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold">Michael Lee</h3>
        <p className="text-gray-300 mt-2">
          "The hands-on projects helped me gain confidence in coding. I highly recommend this course to anyone starting in tech!"
        </p>
      </div>
    </div>
  </div>
  
  {/* <!-- "WHAT WE OFFER" Section --> */}
<div className="bg-gray-900 py-16 px-6 text-white text-center">
  <h2 className="text-4xl font-extrabold text-white mb-12">WHAT WE OFFER</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* <!-- Offer 1: Structured Learning Paths --> */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <svg className="w-12 h-12 mx-auto mb-4 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
      <h3 className="text-xl font-semibold">Structured Learning Paths</h3>
      <p className="text-gray-300 mt-2">
        Step-by-step courses designed to take you from beginner to expert.
      </p>
    </div>

    {/* <!-- Offer 2: Real-World Projects --> */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <svg className="w-12 h-12 mx-auto mb-4 text-green-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 12l2 2 4-4"></path>
        <path d="M2 12l2-2 4 4 4-4 6 6"></path>
      </svg>
      <h3 className="text-xl font-semibold">Real-World Projects</h3>
      <p className="text-gray-300 mt-2">
        Gain hands-on experience with industry-relevant projects.
      </p>
    </div>

    {/* <!-- Offer 3: One-on-One Mentorship --> */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <svg className="w-12 h-12 mx-auto mb-4 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M15 9l-6 6"></path>
        <path d="M9 9l6 6"></path>
      </svg>
      <h3 className="text-xl font-semibold">One-on-One Mentorship</h3>
      <p className="text-gray-300 mt-2">
        Get personalized guidance from industry professionals.
      </p>
    </div>

    {/* <!-- Offer 4: Job Placement Assistance --> */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <svg className="w-12 h-12 mx-auto mb-4 text-purple-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 10h18"></path>
        <path d="M3 6h18"></path>
        <path d="M3 14h18"></path>
        <path d="M3 18h18"></path>
      </svg>
      <h3 className="text-xl font-semibold">Job Placement Assistance</h3>
      <p className="text-gray-300 mt-2">
        We help you prepare for job interviews and land your dream job.
      </p>
    </div>

    {/* <!-- Offer 5: Certification Programs --> */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <svg className="w-12 h-12 mx-auto mb-4 text-orange-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L15 8h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"></path>
      </svg>
      <h3 className="text-xl font-semibold">Certification Programs</h3>
      <p className="text-gray-300 mt-2">
        Earn industry-recognized certificates to boost your career.
      </p>
    </div>

    {/* <!-- Offer 6: Flexible Learning --> */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <svg className="w-12 h-12 mx-auto mb-4 text-red-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 3L19 12 5 21 5 3z"></path>
      </svg>
      <h3 className="text-xl font-semibold">Flexible Learning</h3>
      <p className="text-gray-300 mt-2">
        Learn at your own pace with lifetime access to course materials.
      </p>
    </div>
  </div>
</div>

<footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* <!-- Branding & Contact Info --> */}
    <div className="space-y-4">
      <img src="CN-Logo.png" alt="CN Logo" className="w-24" />
      <h2 className="text-lg font-semibold">Contact Us</h2>
      <p className="text-gray-300">Toll-Free: <span className="font-semibold">1800-123-3598</span></p>
      <p className="text-gray-300">Email: <a href="mailto:contact@codingninjas.com" className="text-orange-400">contact@codingninjas.com</a></p>
    </div>

    {/* <!-- Quick Links --> */}
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Our Offerings</h2>
      <ul className="space-y-2 text-gray-300">
        <li><a href="#" className="hover:text-orange-400">Careers</a></li>
        <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
        <li><a href="#" className="hover:text-orange-400">Pricing & Refund Policy</a></li>
        <li><a href="#" className="hover:text-orange-400">Bug Bounty</a></li>
        <li><a href="#" className="hover:text-orange-400">Review</a></li>
        <li><a href="#" className="hover:text-orange-400">Press Release</a></li>
      </ul>
    </div>

    {/* <!-- Products & Community --> */}
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Products</h2>
      <ul className="space-y-2 text-gray-300">
        <li><a href="#" className="hover:text-orange-400">Job Bootcamp</a></li>
        <li><a href="#" className="hover:text-orange-400">Code 360</a></li>
        <li><a href="#" className="hover:text-orange-400">Professional Certifications</a></li>
        <li><a href="#" className="hover:text-orange-400">Student Certifications</a></li>
      </ul>

      <h2 className="text-lg font-semibold mt-6">Community</h2>
      <ul className="space-y-2 text-gray-300">
        <li><a href="#" className="hover:text-orange-400">10X Club</a></li>
        <li><a href="#" className="hover:text-orange-400">Student Chapters</a></li>
        <li><a href="#" className="hover:text-orange-400">Hire from us</a></li>
      </ul>
    </div>
  </div>

  {/* <!-- Bottom Bar --> */}
  <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
    &copy; 2025 Coding Ninjas. All Rights Reserved.
  </div>
</footer>

  </>
  )
}

export default Home
