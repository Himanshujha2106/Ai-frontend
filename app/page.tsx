import { Sidebar } from '@/components/sidebar';
import { ChatWindow } from '@/components/chat-window';

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}