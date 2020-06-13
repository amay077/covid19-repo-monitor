# covid19-repo-monitor

- [covid19/FORKED_SITES.md at development · tokyo-metropolitan-gov/covid19](https://github.com/tokyo-metropolitan-gov/covid19/blob/fb456e86064804818b7844f1d46be79d012fc1ac/FORKED_SITES.md) に掲載のプロジェクトの更新状況を取得して、新しい順に表示するサイトです。
- 更新状況とは Pull Request の作成された事を示し、BOT によるデータ更新などは除外しています。
- 各リポジトリから最新100件の PR を取得し、BOT を除外しているため、BOT による PR が多い場合は、相対的に表示される件数が減ります(最新100件がいずれも BOT であると判定されたら、そのリポジトリは表示されません)。
- データは、GitHub Actions により 1日に1回の頻度で更新します。
