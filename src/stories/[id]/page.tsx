import { getStory } from '@/app/type/story';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function StoryPage({ params }: PageProps) {
  const story = await getStory(params.id);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/stories/gat-all-stories" className="text-blue-500 hover:underline">
          ← Back to all stories
        </Link>
      </div>

      <div className="border rounded-lg p-6 shadow-sm">
        <h1 className="text-3xl font-bold mb-4">{story.authorName}</h1>
        <div className="prose max-w-none">
          <p className="text-gray-700 whitespace-pre-wrap">{story.content}</p>
        </div>
      </div>

      <div className="mt-6 space-x-4">
        <Link 
          href={`/stories/${story.id}/edit`} 
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Edit Story
        </Link>
        <Link 
          href="/stories/gat-all-stories" 
          className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
}