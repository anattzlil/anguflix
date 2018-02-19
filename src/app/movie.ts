export class Movie {
    _id: number;
    imgUrl: string;
    title: string;
    year: number;
    price: number;
    shortDescription: string;
    fullDescription: string;
    director: string;
    reviews: [{
        name: String,
        rating: {
            type: Number,
            min: 0,
            max: 5
        },
        text: String      
    }]

}