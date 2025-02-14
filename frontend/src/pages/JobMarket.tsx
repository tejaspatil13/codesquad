import { Link } from 'react-router-dom';

function JobPortal() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Job Portal</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/jobs/hr" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">HR Portal</h3>
            <p className="text-gray-600 mb-4">
              Post job openings, manage applications, and find the perfect candidates
              for your organization.
            </p>
            <span className="text-blue-600 font-medium">Access HR Portal →</span>
          </Link>
          
          <Link to="/jobs/seeker" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Job Seeker Portal</h3>
            <p className="text-gray-600 mb-4">
              Browse job openings, submit applications, and track your application status.
            </p>
            <span className="text-blue-600 font-medium">Access Job Seeker Portal →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobPortal;