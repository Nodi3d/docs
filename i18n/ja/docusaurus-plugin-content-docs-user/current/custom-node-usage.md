---
sidebar_position: 4
---

# Custom Nodeの使い方

NodiではJavaScriptでノードの中身を自作することができるCustom Nodeを用意しており、入力に対してどのような出力をするかを定義することができます。

![CustomNode](/img/user/custom-node-usage/CustomNode.png)

## 入力と出力の定義

入力と出力に関して、どういった型のデータをいくつ取るかを定義することができます。

![IO](/img/user/custom-node-usage/IO.png)

入力と出力は**Item**か**List**、どちらで受け取るかを定義することができます。
**Item**であれば単一のデータとして、**List**であれば配列形式でデータを処理することができます。

## プログラムの記述

Inspectorに表示されているエディタにJavaScriptコードを書くことによってCustom Nodeの中身を記述することができます。

プログラムには**access**という変数名で**DataAccess**というクラスのインスタンスが渡されているので、このインスタンスを経由することで入出力をハンドリングすることができます。

### 例

以下の例では
- 2つの数値型の入力を持ち、0番目をItem、1番目をListで受け取る
- 2つの数値型の出力を持ち、0番目をList、1番目をItemで書き出す

という簡単なCustom Nodeの実装を紹介します。

![IO](/img/user/custom-node-usage/Example.png)

プログラムの内容

```javascript

// access: DataAccessのインスタンス

// 0番目に入力されるデータをItem形式で受け取る
let x = access.getData(0);

// 1番目に入力されるデータをList形式で受け取る
let numbers = access.getDataList(1);

// 0番目に出力されるデータをList形式で書き出す
let result = numbers.map(i => i * x);
access.setDataList(0, result);

// 1番目に出力されるデータをItem形式で書き出す
let max = Math.max(...result);
access.setData(0, max);

```
