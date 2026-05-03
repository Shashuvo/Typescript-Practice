interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        releaseYear: string;
    }
    smartWatch: T;
    bike?: X;
}

interface poorSmartWatch {
    company: string;
    stopWatch: boolean;
}

interface richSmartWatch {
    company: string;
    aiFeature: boolean;
    heartRate: boolean;
}


const poor: Developer<poorSmartWatch, { brand: "Yamaha" }> = {
    name: "poor",
    salary: 10000,
    device: {
        brand: "le noob",
        releaseYear: "2010",
    },
    smartWatch: {
        company: "aram o",
        stopWatch: true
    }
}

const rich: Developer<richSmartWatch> = {
    name: "rich",
    salary: 20000,
    device: {
        brand: "strawberry",
        releaseYear: "2010",
    },
    smartWatch: {
        company: "sin fit",
        aiFeature: true,
        heartRate: true
    }
}