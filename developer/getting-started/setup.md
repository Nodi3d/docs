---
sidebar_position: 1
---

# Environment setup


Nodi uses Firebase for various backend functions such as authentication, database, and storage.

In order to build the environment for development, we first need to configure Firebase.
We have prepared a sample Firebase project because it is a bit cumbersome.

If the sample Firebase project does not work, or if you want to use your own Firebase project, please refer to the Firebase project setup instructions.
[Firebase configuration](/developer/getting-started/firebase)

## Run Nodi in local

Clone the Nodi repository in local.

https://github.com/Nodi3d/nodi

### Set up the environment variable file.

Rename **.firebase.env.example.js** in the web folder to **.firebase.env.js**.

> If you want to use your own Firebase project, please check [Firebase Settings](/developer/getting-started/firebase).

### Solving dependency and Build

In nodi3d.com, [NuxtJS](https://nuxtjs.org/) is used as the main framework, and the following commands under the web folder are used to resolve dependencies, start up locally, build, etc.

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
