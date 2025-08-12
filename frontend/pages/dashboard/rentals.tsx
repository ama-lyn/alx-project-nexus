import React from 'react';
import { GetStaticProps } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import type { NextPageWithLayout } from '../_app';
import { UserRental } from '@/interfaces';
import { mockRentals } from '@/constants';
import Image from 'next/image';
import Button from '@/components/common/Button';

interface RentalsProps {
  rentals: UserRental[];
}

const Rentals: NextPageWithLayout<RentalsProps> = ({ rentals }) => {
 
  const activeRentals = rentals.filter(r => r.status === 'Rented' || r.status === 'Overdue');
  const rentalHistory = rentals.filter(r => r.status === 'Returned');

  const getStatusColor = (status: UserRental['status']) => {
    if (status === 'Overdue') return 'text-red-600 bg-red-100';
    if (status === 'Rented') return 'text-green-600 bg-green-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900">My Rentals</h1>
      <p className="text-gray-600 mt-1">Manage your active rentals and view your rental history.</p>

      {/* Active Rentals Section */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Active Rentals</h2>
        {activeRentals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeRentals.map(rental => (
              <div key={rental.id} className="flex gap-4 p-4 bg-white border rounded-lg">
                <Image src={rental.imageUrl} alt={rental.bookTitle} width={80} height={120} className="rounded-md object-cover" />
                <div className="flex flex-col">
                  <p className="font-semibold">{rental.bookTitle}</p>
                  <p className={`mt-2 text-xs font-bold py-1 px-2 rounded-full self-start ${getStatusColor(rental.status)}`}>
                    {rental.status}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Due Date: {new Date(rental.returnDate).toLocaleDateString()}</p>
                  <Button label="Return Instructions" variant="secondary" className="mt-auto" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 bg-white border p-4 rounded-lg">You have no active rentals.</p>
        )}
      </section>

      {/* Rental History Section */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Rental History</h2>
        {rentalHistory.length > 0 ? (
          <div className="bg-white border rounded-lg p-4">
            {rentalHistory.map(rental => (
              <div key={rental.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <p>{rental.bookTitle}</p>
                <p className="text-sm text-gray-500">Returned on: {new Date(rental.returnDate).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Your rental history is empty.</p>
        )}
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { rentals: mockRentals } };
};

Rentals.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Rentals;