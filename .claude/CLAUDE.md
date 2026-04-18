# line-harness ディレクトリでの作業ルール

このリポジトリは Shudesu/line-harness-oss のフォーク。
月次で upstream を取り込むため、既存ファイルの編集は禁止。

## 絶対ルール

1. このディレクトリのファイルは原則 **読み取り専用** として扱う
2. 編集していいのは以下のみ:
   - `apps/worker/wrangler.toml`（env 設定）
   - `.env` / `.dev.vars`（gitignore 対象、ローカルのみ）
   - 新規追加ファイル（`docs/custom/` など既存ファイルと衝突しない場所）
   - `.claude/CLAUDE.md`（このファイル）
3. 触ってはいけない:
   - `apps/worker/src/**` のソースコード
   - `packages/**`
   - `apps/web/**` の既存ファイル
   - `package.json` / `pnpm-lock.yaml`
4. コミットは `choju-setup` ブランチのみ。`main` には絶対 commit しない
5. 「これは変更が必要かも」と思ったら、必ずユーザーに確認してから編集する
6. 独自機能が必要な場合は、agent-workspace 側で実装する

## ブランチ運用

```
main          ← upstream ミラー、直接コミット禁止
 └─ choju-setup ← 自社の変更はすべてここ
```

## upstream 取り込み（月次）

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
git checkout choju-setup
git rebase main
git push --force-with-lease origin choju-setup
pnpm deploy:worker --env choju
```
