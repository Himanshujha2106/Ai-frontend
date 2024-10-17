export default function HelpPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Help</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold">Getting Started</h2>
          <p>Welcome to our ChatGPT clone! Here's how to get started:</p>
          <ul className="list-disc list-inside">
            <li>Click "New Chat" to start a new conversation</li>
            <li>Type your message in the input box at the bottom of the chat window</li>
            <li>Press Enter or click the Send button to send your message</li>
            <li>Wait for the AI to respond</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="list-disc list-inside">
            <li>Multiple conversation support</li>
            <li>Markdown rendering in messages</li>
            <li>Customizable AI behavior through settings</li>
            <li>Dark mode support</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Troubleshooting</h2>
          <p>If you encounter any issues, try the following:</p>
          <ul className="list-disc list-inside">
            <li>Refresh the page</li>
            <li>Clear your browser cache</li>
            <li>Check your internet connection</li>
            <li>If problems persist, please contact our support team</li>
          </ul>
        </section>
      </div>
    </div>
  );
}