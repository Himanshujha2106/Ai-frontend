'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlusCircle, Settings, HelpCircle, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export function Sidebar() {
  const [conversations, setConversations] = useState([]);
  const router = useRouter();

  const startNewConversation = () => {
    // Logic to start a new conversation
    console.log('Starting new conversation');
  };

  return (
    <div className="w-64 bg-secondary h-full flex flex-col">
      <div className="p-4">
        <Button onClick={startNewConversation} className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>
      <ScrollArea className="flex-grow">
        {conversations.map((conversation, index) => (
          <div key={index} className="p-2 hover:bg-accent cursor-pointer">
            {/* Conversation item */}
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start" onClick={() => router.push('/settings')}>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start mt-2" onClick={() => router.push('/help')}>
          <HelpCircle className="mr-2 h-4 w-4" />
          Help
        </Button>
        <Button variant="ghost" className="w-full justify-start mt-2" onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  );
}