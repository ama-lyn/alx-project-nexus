import React from 'react';
import { GetStaticProps } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import type { NextPageWithLayout } from '../_app';
import { UserMessage } from '@/interfaces';
import { mockMessages } from '@/constants';
import Button from '@/components/common/Button';

interface MessagesProps {
  messages: UserMessage[];
}

const Messages: NextPageWithLayout<MessagesProps> = ({ messages }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-1">Conversations with The Circuit support team.</p>
        </div>
        <Button label="New Message" variant="primary" />
      </div>

      <div className="mt-8 bg-white border rounded-lg">
        {messages.map(message => (
          <div key={message.id} className="flex items-start gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer">
            {!message.isRead && (
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
            )}
            <div className={`flex-grow ${message.isRead ? 'ml-5' : ''}`}>
              <div className="flex justify-between">
                <p className={`font-semibold ${!message.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                  {message.subject}
                </p>
                <p className="text-xs text-gray-500">{new Date(message.lastMessageDate).toLocaleDateString()}</p>
              </div>
              <p className="text-sm text-gray-600 mt-1 truncate">
                {message.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { messages: mockMessages } };
};

Messages.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Messages;