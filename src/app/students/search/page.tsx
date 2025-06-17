'use client';

import { useState } from 'react';

// Mock student data - in a real application, this would come from your database
const mockStudents = {
  'STD001': {
    id: 'STD001',
    name: 'John Doe',
    class: '10-A',
    monthlyFees: 5000,
    dateOfAdmission: '2023-04-15',
    registrationNumber: 'STD001',
    feeSubmissions: [
      {
        selectedMonths: [
          { month: 'January', year: 2024 },
          { month: 'February', year: 2024 }
        ],
        submissionDate: '2024-02-15',
        totalAmount: 10000,
        status: 'paid'
      }
    ],
    parentInfo: {
      parentName: 'Robert Doe',
      contactNumber: '1234567890',
      email: 'robert.doe@example.com'
    }
  }
  // Add more mock students as needed
};

interface Student {
  id: string;
  name: string;
  class: string;
  monthlyFees: number;
  dateOfAdmission: string;
  registrationNumber: string;
  feeSubmissions: FeeSubmission[];
  parentInfo: {
    parentName: string;
    contactNumber: string;
    email: string;
  };
}

interface FeeSubmission {
  selectedMonths: {
    month: string;
    year: number;
  }[];
  submissionDate: string;
  totalAmount: number;
  status: string;
}

export default function SearchStudent() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [student, setStudent] = useState<Student | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setStudent(null);

    // Simulate API delay
    setTimeout(() => {
      const result = mockStudents[registrationNumber as keyof typeof mockStudents];
      
      if (result) {
        setStudent(result);
      } else {
        setError('No student found with this registration number');
      }
      setLoading(false);
    }, 500);
  };

  const getFeeStatus = (student: Student) => {
    if (!student.feeSubmissions || student.feeSubmissions.length === 0) {
      return {
        status: "No fee submissions found",
        pendingAmount: student.monthlyFees
      };
    }

    const currentDate = new Date();
    
    // Find the most recent fee submission
    const latestSubmission = student.feeSubmissions
      .reduce((latest, current) => {
        const currentMonths = current.selectedMonths || [];
        if (currentMonths.length === 0) return latest;
        
        const currentLastMonth = currentMonths[currentMonths.length - 1];
        const latestMonths = latest.selectedMonths || [];
        const latestLastMonth = latestMonths.length > 0 ? latestMonths[latestMonths.length - 1] : null;
        
        if (!latestLastMonth) return current;
        
        const currentDate = new Date(currentLastMonth.year, getMonthIndex(currentLastMonth.month));
        const latestDate = new Date(latestLastMonth.year, getMonthIndex(latestLastMonth.month));
        
        return currentDate > latestDate ? current : latest;
      }, {} as FeeSubmission);

    if (!latestSubmission.selectedMonths?.length) {
      return {
        status: "No fee submissions found",
        pendingAmount: student.monthlyFees
      };
    }

    // Get the last paid month
    const lastPaidMonth = latestSubmission.selectedMonths[latestSubmission.selectedMonths.length - 1];
    const lastPaidDate = new Date(lastPaidMonth.year, getMonthIndex(lastPaidMonth.month));
    
    // Calculate months difference including current month
    const monthsDiff = getMonthsDifference(lastPaidDate, currentDate);
    
    // Include current month in unpaid months count
    const unpaidMonths = monthsDiff;
    const pendingAmount = unpaidMonths * student.monthlyFees;

    // Get the list of pending months for display
    const pendingMonths = [];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    
    let tempDate = new Date(lastPaidDate);
    tempDate.setMonth(tempDate.getMonth() + 1); // Start from the month after last paid

    while (tempDate <= currentDate) {
      pendingMonths.push(`${months[tempDate.getMonth()]} ${tempDate.getFullYear()}`);
      tempDate.setMonth(tempDate.getMonth() + 1);
    }

    return {
      status: unpaidMonths === 0 
        ? "Fees are up to date" 
        : `Fees pending for ${unpaidMonths} months (${pendingMonths.join(", ")})`,
      pendingAmount: pendingAmount
    };
  };

  // Helper function to get month index from month name
  const getMonthIndex = (monthName: string): number => {
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 
                   'july', 'august', 'september', 'october', 'november', 'december'];
    return months.indexOf(monthName.toLowerCase());
  };

  // Helper function to calculate months difference between two dates
  const getMonthsDifference = (startDate: Date, endDate: Date): number => {
    return (
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()) +
      1  // Include current month
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Student</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            placeholder="Enter registration number (e.g., STD001)"
            className="flex-1 p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {student && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Student Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p><span className="font-semibold">Name:</span> {student.name}</p>
              <p><span className="font-semibold">Father's Name:</span> {student.parentInfo?.parentName || 'Not provided'}</p>
              <p><span className="font-semibold">Class:</span> {student.class}</p>
              <p><span className="font-semibold">Monthly Fees:</span> Rs. {student.monthlyFees}</p>
              <p className="mt-2">
                <span className="font-semibold">Fee Status:</span>{' '}
                <span className={getFeeStatus(student).status.includes('up to date') 
                  ? 'text-green-600' 
                  : 'text-red-600'}>
                  {getFeeStatus(student).status}
                </span>
              </p>
              {getFeeStatus(student).pendingAmount > 0 && (
                <p className="text-red-600">
                  <span className="font-semibold">Pending Amount:</span> Rs. {getFeeStatus(student).pendingAmount}
                </p>
              )}
            </div>
            <div>
              <p><span className="font-semibold">Registration Number:</span> {student.registrationNumber}</p>
              <p><span className="font-semibold">Date of Admission:</span> {new Date(student.dateOfAdmission).toLocaleDateString()}</p>
              <p><span className="font-semibold">Parent's Contact:</span> {student.parentInfo?.contactNumber || 'Not provided'}</p>
              <p><span className="font-semibold">Parent's Email:</span> {student.parentInfo?.email || 'Not provided'}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Recent Fee Submissions</h3>
            {student.feeSubmissions && student.feeSubmissions.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-left">Months Covered</th>
                      <th className="px-4 py-2 text-left">Amount</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.feeSubmissions.map((submission, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-2">{new Date(submission.submissionDate).toLocaleDateString()}</td>
                        <td className="px-4 py-2">
                          {submission.selectedMonths.map(m => `${m.month} ${m.year}`).join(', ')}
                        </td>
                        <td className="px-4 py-2">Rs. {submission.totalAmount}</td>
                        <td className="px-4 py-2">
                          <span className={`capitalize ${
                            submission.status === 'paid' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {submission.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No fee submissions found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 