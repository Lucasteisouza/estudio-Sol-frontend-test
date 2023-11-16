export interface IBook{
    name: string;
    cover: string;
    author: IAuthor;
    category: string;
    id:number;
}

export interface IAuthor {
    name: string;
    picture: string;
    id:number;
    booksCount:number;
}