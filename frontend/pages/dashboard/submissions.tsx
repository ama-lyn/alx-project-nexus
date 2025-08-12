import React from 'react';
import { GetStaticProps } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import type { NextPageWithLayout } from '../_app';
import { UserSubmission } from '@/interfaces';
import { mockSubmissions } from '@/constants';
import Button from '@/components/common/Button';

// Define the props this page will receive
interface SubmissionsPageProps {
  submissions: UserSubmission[];
}

const Submissions: NextPageWithLayout<SubmissionsPageProps> = ({ submissions }) => {
  // Filter submissions into categories based on their status
  const pending = submissions.filter(s => s.status === 'Pending Inspection');
  const accepted = submissions.filter(s => s.status === 'Accepted');
  const rejected = submissions.filter(s => s.status === 'Rejected');
  
  return (
    <div className='w-full'>
      <h1 className="text-4xl font-bold text-gray-900">My Submissions</h1>
      <p className="text-[#6b35e8] mt-1">Track the status of books you&apos;ve submitted to The Circuit.</p>

      <div className="mt-8 space-y-10">
        {/* Pending Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Pending Inspection</h2>
          <div className="space-y-3">
            {pending.length > 0 ? pending.map(sub => (
              <div key={sub.id} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                <div>
                  <p className="font-medium">Book: {sub.bookTitle}</p>
                  <p className="text-sm text-gray-500">Submitted on: {new Date(sub.submittedDate).toLocaleDateString()}</p>
                </div>
                <Button label="View" variant="secondary" />
              </div>
            )) : <p className="text-gray-500">No pending submissions.</p>}
          </div>
        </section>

        {/* Accepted Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-green-600">Accepted</h2>
          <div className="space-y-3">
            {accepted.length > 0 ? accepted.map(sub => (
              <div key={sub.id} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                <div>
                  <p className="font-medium">Book: {sub.bookTitle}</p>
                  <p className="text-sm text-green-500">
                    Value: {sub.creditValue ? `${sub.creditValue} Credits` : `KSh ${sub.payoutValue}`}
                  </p>
                </div>
                <Button label="View" variant="secondary" />
              </div>
            )) : <p className="text-gray-500">No accepted submissions yet.</p>}
          </div>
        </section>

        {/* Rejected Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-red-600">Rejected</h2>
          <div className="space-y-3">
            {rejected.length > 0 ? rejected.map(sub => (
              <div key={sub.id} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                <div>
                  <p className="font-medium">Book: {sub.bookTitle}</p>
                  <p className="text-sm text-red-500">Reason: {sub.rejectionReason}</p>
                </div>
                <Button label="View" variant="secondary" />
              </div>
            )) : <p className="text-gray-500">No rejected submissions.</p>}
          </div>
        </section>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      submissions: mockSubmissions,
    },
  };
};

Submissions.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Submissions;