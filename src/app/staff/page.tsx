// Dummy data for staff members
const staffMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Principal',
    subject: 'Administration',
    email: 'sarah.johnson@fgs.edu',
    imageUrl: '/placeholder.jpg',
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Vice Principal',
    subject: 'Administration',
    email: 'john.smith@fgs.edu',
    imageUrl: '/placeholder.jpg',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Teacher',
    subject: 'Mathematics',
    email: 'emily.davis@fgs.edu',
    imageUrl: '/placeholder.jpg',
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Teacher',
    subject: 'Science',
    email: 'michael.brown@fgs.edu',
    imageUrl: '/placeholder.jpg',
  },
  {
    id: 5,
    name: 'Jessica Wilson',
    role: 'Teacher',
    subject: 'English',
    email: 'jessica.wilson@fgs.edu',
    imageUrl: '/placeholder.jpg',
  },
  {
    id: 6,
    name: 'Robert Taylor',
    role: 'Teacher',
    subject: 'History',
    email: 'robert.taylor@fgs.edu',
    imageUrl: '/placeholder.jpg',
  },
];

export default function StaffPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Staff</h1>
          <p className="text-xl">Meet our dedicated team of educators</p>
        </div>
      </section>

      {/* Staff Directory */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 bg-gray-200">
                  {/* Placeholder for staff photo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Staff Photo
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600 mt-1">{member.role}</p>
                  <p className="text-gray-600">{member.subject}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 