covid19-repo-monitor
----

- [covid19/FORKED_SITES.md at development · tokyo-metropolitan-gov/covid19](https://github.com/tokyo-metropolitan-gov/covid19/blob/fb456e86064804818b7844f1d46be79d012fc1ac/FORKED_SITES.md) に掲載のプロジェクトの更新状況を取得して、マージされたプルリクエストを新しい順に表示するサイトです。
- 各リポジトリから最新100件の PR を取得し、BOT を除外しているため、BOT による PR が多い場合は、相対的に表示される件数が減ります(最新100件がいずれも BOT であると判定されたら、そのリポジトリは表示されません)。
- データは、GitHub Actions により 1日に1回の頻度で更新します。

## Fork して動かす方法

1. このリポジトリを Fork する
2. Repository の Setting で「master ブランチの docs ディレクトリを公開する」と設定する
3. development ブランチを push する

で、GitHub Actions が起動して、サイトが公開されるはずです。
公開される URL は前述の通り、 ttps://<ユーザー名>.github.io/<リポジトリ名>/ 。


## ローカルでの動かし方

node(npm), yarn が必要です。

1. このリポジトリを clone する
2. [GitHub - Personal Access Tokens](https://github.com/settings/tokens) で、repo へのアクセス権を持った token を生成する
3. 環境変数 ``GITHUB_TOKEN`` に、2 の token を設定する（``tools/.env`` ファイルに ``GITHUB_TOKEN=<2 の token>`` と記述しても OK）
4. tools, spa 各ディレクトリで ``yarn`` を実行する
5. tools ディレクトリで ``yarn gen`` を実行する（ ``spa/src/data/data.json`` が更新されるはずです）
6. spa ディレクトリで、``npx ng serve`` を実行する
7. ブラウザで ``http://localhost:4200/`` を開く
