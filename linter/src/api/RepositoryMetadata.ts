// TODO: merge with store-bridge's one
export interface RepositoryMetadata {
    name: string,
    location: {
        type: "localJson" | "localXml"
    } | {
        type: "remoteJson",
        remoteUrl: string
    },
    description: string,
    author: {
        name: string,
        url?: string,
        avatarUrl?: string
    }
}