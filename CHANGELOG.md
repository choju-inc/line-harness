# Changelog

## v0.21.0 (2026-08-14)

### ライブCTAから個別相談を即時確定

- オートウェビナーのフォーム送信後、その画面のまま空き枠を選び、個別相談を即時確定
- LINE Harnessの受付時間、日付別枠、既存予約、Google Calendarの予定、60分のリードタイムを反映し、確定直前にも二重予約を検査
- Google Meet付き予定、`meet_consultations`、前日・1時間前のLINEリマインド、確定通知を一括作成
- 管理画面からGoogleアカウント本人が許可するOAuth接続を追加。サービスアカウントキーとカレンダー共有は不要
- OAuth権限は `calendar.events` と `calendar.events.freebusy` の2つだけに限定
- 設定とエラー解決を `docs/wiki/28-Google-Calendar-and-Webinar-Booking.md` に追加

### その他

- シナリオ・自動応答の友だち別送信でも `{{liff_id}}` を配信アカウントへ追従
- 「マイル」キーワードで、ユーザー本人のマイルページをreply messageで返信
- メディア問い合わせをD1へ保存し、通知成否を記録
- 即時ステップ配信がcronと同じ条件判定を行うよう修正
- チャット一覧のプレビュー・並び順・ページングを、プロキシ送信を含む実際の最新メッセージへ統一

### Database

- migration 067: 「マイル」キーワード自動返信
- migration 068: メディア問い合わせ保存

過去の変更は [GitHub Releases](https://github.com/Shudesu/line-harness-oss/releases) を参照してください。
