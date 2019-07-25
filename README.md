# store-repos

[![Build Status](https://travis-ci.org/cloud-emoticon/store-repos.svg?branch=master)](https://travis-ci.org/cloud-emoticon/store-repos)

The repository store, revived on GitHub

## Repository requirements

* Every file that ends with `.meta.json` represents a repository
* Every repository is a JSON object
* Every repository must have a string `name`
* Every repository must have an object `location`
  * The object must have a string `type` that is either `localJson` or `localXml` or `remoteJson`
  * If `type` is `localJson`, this GitHub repo must have a valid JSON repository that has the same name as the `.meta.json` file, but whose name ends with only `json` (see `JSON repository requirements` section)
  * If `type` is `localXml`, this GitHub repo must have a valid XML repository that has the same name as the `.meta.json` file, but whose name ends with only `xml` (see `XML repository requirements` section)
  * If `type` is `remoteJson`, the object must have a string `remoteUrl`, which is a url that points to a valid JSON repository (see `JSON repository requirements` section)
* Every repository must have a string `description`
* Every repository must have an object `author`
  * The object must have a string `name`
  * The object can have a string `url`
  * The object can have a string `avatarUrl`

## JSON repository requirements

TBD

## XML repository requirements

Deprecated?