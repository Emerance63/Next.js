import { getStories, deleteStory } from '@/app/type/story';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

export default async function StoriesPage() {
  const stories = await getStories();

  async function handleDelete(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    if (confirm('Are you sure you want to delete this story?')) {
      await deleteStory(id);
      revalidatePath('/stories');
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Stories</h1>
      <Link href="/stories/create-story" className="text-blue-500 underline mb-4 inline-block">
        Create New Story
      </Link>

      <ul className="mt-4 space-y-2">
        {stories.map((story) => (
          <li key={story.id} className="border p-4 rounded">
            <p className="font-semibold">{story.authorName}</p>
            <p className="text-gray-600 mt-2 line-clamp-2">{story.content}</p>
            <div className="mt-3 space-x-3">
              <Link href={`/stories/${story.id}`} className="text-blue-500 hover:underline">
                View
              </Link>
              <Link href={`/stories/${story.id}/edit`} className="text-green-500 hover:underline">
                Edit
              </Link>
              <form action={handleDelete}>
                <input type="hidden" name="id" value={story.id} />
                <button 
                  type="submit" 
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}