# Expo Setup Instructions

## 1. EAS CLIにログイン
```bash
eas login
```

## 2. プロジェクトを指定のIDで初期化
```bash
eas init --id 36b72670-be82-47d1-911f-22b299b81261
```

## 3. app.config.jsを更新
プロジェクトIDが正しく設定されているか確認してください。

## 4. 初回ビルドの実行
```bash
eas update --branch main --message "Initial setup"
```

これらのステップを順番に実行してください。