export async function getCategories() {
  const response = await fetch('/api/v1/categories');
  const categories = await response.json();
  
  return categories;
} 