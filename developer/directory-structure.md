---
sidebar_position: 3
---

# Directory Structure

In this project, the
Core implementations such as geometry processing and node graphs are managed by the @nodi/core module, and
managed by the @nodi/web module, which is available on the web.

```bash
.
├── core: @nodi/core
└── web: @nodi/web
```

## @nodi/core

@nodi/core is a collection of reusable implementations that are referenced by other packages, and
It manages core implementations such as geometry processing and node graphs.

```bash
├─ preprocess: Scripts to automate the creation of Node class dictionary objects, etc.
├─ src
|   ├─ data: Type information for data handled by nodes and implementation of DataTree
│   ├─ io: Classes to manage Nodi IO
│   ├─ lib: Libraries that are not supported by npm (vrbnurbs)
│   ├─ math
│       ├── geometry: Geometric representation classes and implementations of various geometric operations
│       ├─ misc: Utility implementations
│       ├─ primitive: Basic classes for complex numbers, NDomain, etc.　
│   ├─ misc: Interface and event definitions, etc.
│   ├─ nodes: Class files for all nodes
│   ├─ preview: Implementation for preview
├─ test: Test code by jest
├─ types: Type definition file
├─ wasm: WebAssembly module by Rust
````

## @nodi/web

@nodi/web uses [NuxtJS](https://nuxtjs.org/) as its main framework.

Basically, we follow the structure of NuxtJS, but
However, it should be noted that we are developing the implementation of the node-based editor part in a state that is separated from Vue as much as possible.

This is because we intend to modularize the node-based editor part in the future, so that it can be run on a different application.

```bash
.
├─ assets
│   ├─ images: Image material
│   ├─ json: Text to manage node descriptions, etc.
│   ├─ styles: Style files
│   └─ scripts
|       ├─ editor: Editor UI implementation
|       ├─ service: Implementation for services such as project and user management
|       └─ viewer: Viewer UI implementation
├─ components
├─ pages
.
. (Others are basically in accordance with NuxtJS structure, so omitted)
```
