---
sidebar_position: 1
---

# 環境構築について

Nodiでは認証、データベース、ストレージなど各種バックエンドの機能をFirebaseで実現しています。

開発のための環境構築としては、まず最初にFirebaseの設定を行う必要がありますが、
少し面倒な手順を踏むのでサンプルのFirebaseプロジェクトを用意しています。

もしサンプルのFirebaseプロジェクトが動作しなかったり、自前のFirebaseプロジェクトで動かしたい方はFirebaseプロジェクトの設定手順も解説しているのでそちらを参考にしてみてください。
[Firebaseの設定](/developer/getting-started/firebase)

## Nodiをローカルで動かす

Nodiのリポジトリをローカルにcloneします。

https://github.com/Nodi3d/nodi

### 環境変数ファイルの設定

webフォルダ直下に含まれる**.firebase.env.example.js**を**.firebase.env.js**にリネームします。

> もし自前のFirebaseプロジェクトを使いたい場合は[Firebaseの設定](/developer/getting-started/firebase)を確認してください。

### 依存関係の解決とビルド

nodi3d.comでは[NuxtJS](https://nuxtjs.org/)を主なフレームワークとして使用していて、
webフォルダ直下で以下のコマンドを実行することで依存関係の解決やローカルでの立ち上げ、ビルド等を行います。

```bash
# webフォルダ以下に移動して以下のコマンドを実行

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
