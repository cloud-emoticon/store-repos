export interface JsonRepository {
    information: string[],
    categories: {
        name: string,
        entries: {
            emoticon: string,
            description: string
        }[]
    }[]
}