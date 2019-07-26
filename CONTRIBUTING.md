(This documentation will assume some minimal knowledge on GitHub, JSON and programming)

Welcome!

So you want to contribute to the repository store, great! Now you can share your repositories to everyone!

Contributions to the repository store are currently happening in form of pull requests to [this exact GitHub repo](https://github.com/cloud-emoticon/store-repos).

There is [a server](https://github.com/cloud-emoticon/store-bridge) running behind the scenes to then translate this GitHub repo to a format that Cloud Emoticon apps can understand as a repository store.

So by making your own repository available in this GitHub repo, you make your repository available to repository store :)

Let's get started

1. Fork this repo and create a branch from `master`
2. Create a JSON file for your repository metadata. End its filename with `.meta.json`, for example, `foo.meta.json`
3. If you decide to host your repository on this GitHub repo
    1. Metadata JSON file should follow [this interface](https://github.com/cloud-emoticon/store-repos/blob/master/linter/src/api/RepositoryMetadata.ts). Don't worry about TypeScript, the interface alone should be easy to follow. If you are still not sure, look at [this example](https://github.com/cloud-emoticon/store-repos/blob/master/kt-favorites.meta.json)
    2. Create a JSON file for your actual repository in JSON format (sorry no XML). Name the file to have the same name as the repository metadata JSON file, e.g. if your metadata JSON file is named `foo.meta.json`, this file should be named `foo.json`
    3. Repository JSON file should follow [this interface](https://github.com/cloud-emoticon/store-repos/blob/master/linter/src/api/JsonRepository.ts). Again, no worries on TypeScript. Here is [an example](https://github.com/cloud-emoticon/store-repos/blob/master/kt-favorites.json).
4. If you decide to host your repository on your own server
    1. Metadata JSON file should still follow [this interface](https://github.com/cloud-emoticon/store-repos/blob/master/linter/src/api/RepositoryMetadata.ts). Don't worry about TypeScript, the interface alone should be easy to follow. If you are still not sure, look at [this example](https://github.com/cloud-emoticon/store-repos/blob/master/remote-demo.meta.json)
5. Push the branch, create a merge request to this repo's master. There is a CI bot to check the integrity of the JSON files. Please assign the reviewer to `KTachibanaM`(me).
6. Wait for review, merge, and profit :P
