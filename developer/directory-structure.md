---
sidebar_position: 3
---

# Directory Structure

In this project, we are using [NuxtJS](https://nuxtjs.org/) as the main framework.

It basically follows the structure of NuxtJS, but
However, it should be noted that the implementation of the geometry processing and node-based editor portions that are the core of Nodi have been developed in a manner that is as separate from Vue as possible.

This is because we intend to modularize the geometry processing and node-based editor parts so that they can be run in different applications in the future.

The most important part of the directory structure that needs to be explained is the **assets/scripts** section.
This section contains the implementation of the geometry handling and interfaces that are important for Nodi.

```bash
.
├── assets
│   ├── images: Image materials
│   ├── json: Text to manage node descriptions, etc.
│   ├── styles: Style files
│   └── scripts
|       ├── core
│           ├── data: Types of the data handled by the node and implementation of DataTree
│           ├── io: Classes that manage IO
│           ├── lib: Libraries that are not supported by npm (verbnurbs)
│           ├── math
│               ├── geometry: Geometric representation classes and implementations of various geometric operations
│               ├── misc: Utility implementation
│               ├── primitive: Primitive classes for complex numbers, NDomain, etc.
│           ├── misc: Interface and event definitions, etc.
│           ├── nodes: Class files for all nodes
|       ├── editor: Editor UI implementation
|       ├── service: Implementation for services such as project and user management
│       └── viewer: Viewer UI implementation
├── components
├── pages
.
. (The others are basically in accordance with the NuxtJS structure, so they are omitted.)
```
