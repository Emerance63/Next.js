const BASE_URL = "https://sms-express-app-1-production-a843.up.railway.app/api/stories";

//get all
const getStories = async (): Promise<story[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch stories');
  }
  return response.json();
};

//get one 
const getStory = async (id: string): Promise<story> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch story');
  }
  return response.json();
};

//post 
const createStory = async (data: createStoryDTO): Promise<story> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create story');
  }
  return response.json();
};

//delete 
const deleteStory = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error('Failed to delete story');
  }
};

export { getStories, getStory, createStory, deleteStory };