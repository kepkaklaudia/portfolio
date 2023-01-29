export const getRepos = async () => {
  const response = await fetch("https://api.github.com/users/kepkaklaudia/repos");
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};