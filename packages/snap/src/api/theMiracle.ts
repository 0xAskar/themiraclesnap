import { Benefit } from "../interfaces/component_interfaces";
export async function getBenefits(addresses: string[]) {
    try {
        // Initialize combined benefits object
        const allBenefitsByCollection: Record<string, Benefit[]> = {};
        console.log("fetching benefits for addresses", addresses);
        // Fetch benefits for each address
        for (const address of addresses) {
            const url = `https://www.themiracle.io/api/v1/wallet/${"ethereum"}/${address}/benefits`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MzE2OTc3ODksImV4cCI6MTczOTQ3Mzc4OSwicm9sZXMiOlsiUk9MRV9BUElfQ09OU1VNRVIiXSwiZW1haWwiOiJhc2thckBmbGlwcy5maW5hbmNlIn0.Iix4kx26zNdKK6SktYQf-6nBfQOoyaV6lw1N0bB6_7Cxjf09OsEYcQdEI_Imoc2HCNGmjn7_5xfkdK8zNsgqcp4ipboFLkJLVwfQs6iOH4zSbfPudUmze7Ss3A_3z18Iwd_1f0QSfLXXU6qZ0NCEdYsjfceLZfJhssUWFviMN4OcNo72JZ8dpR4dV7iiUOpmq2xXH2hf9-Tab5is1EgIouHBnPiIizPROGuIOSuOcYtRuLaY87GMVg99HQOERB2JgrA6QGrD1FQi7UL0o4c_wz3RHOYjDhrvVjJx4ifrOM1nuZBfYVKZCTiKMiedEr8qkhJ5vTlOx0XJv6xtt974Bg"}`
                }
            });
            
            if (!response.ok) {
                console.log("error for address", address, ":", response.status);
                continue; // Skip this address if there's an error, but continue with others
            }

            const data = await response.json();
            
            // Add benefits from this address to the combined object
            data.forEach((benefit: Benefit) => {
                benefit.collections.forEach((collection) => {
                    if (!allBenefitsByCollection[collection.name]) {
                        allBenefitsByCollection[collection.name] = [];
                    }
                    // Avoid duplicates by checking if benefit already exists
                    if (!allBenefitsByCollection[collection.name]?.some(b => JSON.stringify(b) === JSON.stringify(benefit))) {
                        allBenefitsByCollection[collection.name]?.push(benefit);
                    }
                });
            });
        }

        // If no benefits were found for any address, return error code
        if (Object.keys(allBenefitsByCollection).length === 0) {
            console.log("no benefits found");
            return 0;
        }

        return allBenefitsByCollection;
    } catch (error) {
        console.log("error fetching benefits", error);
        return -1;
    }
}
