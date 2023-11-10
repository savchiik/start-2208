// apiService.js Модуль для работы с API.
export async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}