
# Firebaseの設定

## 1. Firebaseプロジェクトの作成

Firebaseプロジェクトを新規に作成します。
(手順については公式ドキュメントを確認)

## 2. アプリの追加

Firebaseの管理画面からウェブアプリを追加します。

![AddApp](/img/developer/getting-started/firebase/AddApp.gif)

## 3. Authenticationの設定

NodiではGoogleアカウントによるログインを行っています。
Firebaseの管理画面からAuthenticationのメニューを開き、**Sign-in method**でGoogleによる認証を有効化します。

![Authentication](/img/developer/getting-started/firebase/Authentication.png)

## 4. Firestore Databaseの有効化

Firestore Databaseを有効化します。

セキュリティを高めるためにはルールを厳密に設定する必要がありますが、
ひとまずはローカルでの開発用途なのでテストモードで起動します。

## 5. Nodi内の環境変数の設定

Firebaseの設定の**手順2**で登録したウェブアプリの**構成**のメニューからFirebaseの構成オブジェクトをコピーします。

![Configuration](/img/developer/getting-started/firebase/Configuration.jpg)

Nodiのフォルダのルートに**.firebase.env.js**というファイルを作成し、
以下のキャプチャのようにFirebaseの構成オブジェクトの内容をコピーします。

![Env](/img/developer/getting-started/firebase/Env.png)

## 6. CORSの設定

[google-cloud-sdk](https://cloud.google.com/sdk/docs/quickstart)を用い、Firebase StorageにCORSの設定を行います。

具体的な方法はFirebaseの公式ドキュメントを参照してください。
https://firebase.google.com/docs/storage/web/download-files?hl=ja#cors_configuration

## 他の設定項目について

以上で自前で用意したFirebaseプロジェクトをNodiに読み込ませ、ひとまずエディタUIやモデリング機能などを動作させることができますが、まだ完全でありません。

サイト内で行っているファイルの検索に必要なFirestore Databaseのindexやruleの登録など、他にも設定すべきものがあります。
必要な設定ファイルはリポジトリに含まれているので、もし完全な状態で動作させたい方はFirebaseのドキュメントを参考に各種設定を行ってみてください。
