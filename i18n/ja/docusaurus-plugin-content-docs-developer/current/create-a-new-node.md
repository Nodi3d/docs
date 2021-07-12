---
sidebar_position: 4
---

# 新しいNodeを追加する

新しいNodeを追加する手順について解説します。

## Nodeクラスファイルを追加する

**assets/scripts/core/nodes**フォルダ以下ですべてのNodeクラスを管理しています。

フォルダ構成がそのままNodeを検索する際のディレクトリ構造に対応しているので、
Nodeを所属させたいフォルダ以下に作成するか、もしくは新しいフォルダを作成し、その下にクラスファイルを作成してください。　

**[Node名].ts**という名前でクラスファイルを作成します。

ここではテストのため、**examples**フォルダを作成し、その下に**Example.ts**という名前で作成します。

![フォルダ作成](/img/developer/create-a-new-node/ExamplesFolder.png)

## Nodeクラスファイルを定義する

新しく作成したファイルの中でNodeの中身を実装していきます。

すべてのNodeのベースクラスとなる**NodeBase**を拡張する形で実装します。

```typescript

export default class Example extends NodeBase {

  // エディタ上のNodeViewに表示される名前
  public get displayName(): string {
    return 'Example';
  }

  // 入力のデータ型を定義　
  public registerInputs(manager: InputManager): void {
    manager.add('w', 'Width of a rectangle curve', DataTypes.NUMBER, AccessTypes.ITEM);
    manager.add('h', 'Height of a rectangle curve', DataTypes.NUMBER, AccessTypes.ITEM);
  }

  // 出力のデータ型を定義　
  public registerOutputs(manager: OutputManager): void {
    manager.add('c', 'Rectangle curve', DataTypes.CURVE, AccessTypes.ITEM);
  }

  // 入力を受け取り、どう出力を返すかを定義
  public solve(access: DataAccess): void {
    const width = access.getData(0) as number;
    const height = access.getData(1) as number;
    const curve = new NRectangleCurve(new NPlane(), new NDomain(0, width), new NDomain(0, height));
    access.setData(0, curve);
  }

}

```

## Nodeのインデックスに登録する

Nodeの定義が終了したら、以下のコマンドでNodeのインデックスを登録します。

```bash

yarn barrel # assets/scripts/core/nodes/index.tsファイルに追加したファイルのパスを登録する

```

## Nodeを試す

以上までの手順で追加したNodeがエディタ上で選べるようになるので動作を確認することができます。

![ExampleNode](/img/developer/create-a-new-node/ExampleNode.gif)

## Nodeの説明文を書く

**assets/json/description.json**で各Nodeの説明文を管理しています。

ここに説明を追加すると、Node Inspectorや説明画面(nodi3d.com/nodes/[Node名])に文章を表示することができます。


