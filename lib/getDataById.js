export async function getData(endpoint) {
    try {
        const baseUrl = process.env.PROD_BASE_URL;
        const response = await fetch(`${baseUrl}/api/${endpoint}`, {
            cache: "no-store",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data", error);
    }
}
