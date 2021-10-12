---
sidebar_position: 3
---

# ディレクトリ構成

このプロジェクトでは、
幾何処理やノードグラフなどのコアとなる実装を@nodi/coreモジュールで管理していて、
Web上で利用できる@nodi/webモジュールで管理しています。

```bash
.
├── core: @nodi/core
└── web: @nodi/web
```

## @nodi/core

@nodi/coreは他のパッケージから参照される再利用可能な実装をまとめたもので、
幾何処理やノードグラフなどのコアとなる実装を管理しています。

```bash
├── preprocess: Nodeクラスの辞書オブジェクトの生成などを自動化するスクリプトなど
├── src
    ├── data: ノードが扱うデータの型情報や、DataTreeの実装
│   ├── io: NodiのIOを管理するクラス群
│   ├── lib: npmに対応していないライブラリ (verbnurbs)
│   ├── math
│       ├── geometry: 幾何表現クラスや各種幾何処理の実装群
│       ├── misc: ユーティリティ系の実装
│       ├── primitive: 複素数やNDomainなどの基本的なクラス群　
│   ├── misc: インターフェイスやイベントの定義など
│   ├── nodes: 全てのノードのクラスファイル
│   ├── preview: プレビュー用の実装
├── test: jestによるテストコード
├── types: 型定義ファイル
├── wasm: RustによるWebAssemblyモジュール
```

## @nodi/web

@nodi/webでは[NuxtJS](https://nuxtjs.org/)を主なフレームワークとして使用しています。

基本的にNuxtJSの構成に則っていますが、
ノードベースエディター部分の実装についてはなるべくVueと切り離した状態で開発している点に注意が必要です。
これは、将来的にノードベースエディター部分をモジュール化し、別アプリケーション上でも動かせるようにすることを意図しているためです。

```bash
.
├── assets
│   ├── images: 画像素材
│   ├── json: ノードの説明文言を管理するテキストなど
│   ├── styles: スタイルファイル群
│   └── scripts
|       ├── editor: エディタUIの実装
|       ├── service: プロジェクトやユーザ管理などのサービスに関わる実装
│       └── viewer: ビューワUIの実装
├── components
├── pages
.
. (他は基本的にNuxtJSの構成に則っているので省略)
```
