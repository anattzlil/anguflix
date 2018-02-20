export class Review{
    name: string;
    rating: {
        type: Number,
        min: 0,
        max: 5
    };
    text: String;   
}