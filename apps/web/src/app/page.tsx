import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">Attendance — Web</h1>
        <p className="text-gray-500">Next.js App Router + Tailwind is ready.</p>
        <div className="space-x-2">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
    </main>
  );
}
