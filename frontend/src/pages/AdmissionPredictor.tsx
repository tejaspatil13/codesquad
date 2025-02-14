import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdmissionForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rank: '',
    percentile: '',
    branch: '',
    gender: '',
    category: '',
    seat_type: '',
    score_type: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would make an API call here
    navigate('/admission-results', { state: { formData } });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">College Admission Form</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Rank (Optional)</label>
            <input
              type="number"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Percentile</label>
            <input
              type="number"
              step="0.01"
              name="percentile"
              required
              value={formData.percentile}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Branch</label>
            <select
              name="branch"
              required
              value={formData.branch}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select Branch</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Electronics Engineering">Electronics Engineering</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="OPEN">OPEN</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OBC">OBC</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Seat Type</label>
            <select
              name="seat_type"
              required
              value={formData.seat_type}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select Seat Type</option>
              <option value="LOPENS">LOPENS</option>
              <option value="GOPENS">GOPENS</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Score Type</label>
            <select
              name="score_type"
              required
              value={formData.score_type}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select Score Type</option>
              <option value="MHT-CET">MHT-CET</option>
              <option value="JEE">JEE</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdmissionForm;