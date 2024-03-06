# 482 React17+React Hook+TS4 最佳实践仿 Jira 企业级项目

npx create-react-app wsjls-jira --template typescript
cd wsjls-jira
npm start

[](https://prettier.io/docs/en/install.html)
yarn add --dev --exact prettier
新建 .prettierrc.json .prettierignore

虽然可以 手动格式化命令 yarn prettier --write . 最好用下面的方法

<!-- 在package添加提交之前的格式化配置 -->
<!-- npx mrm@2 lint-staged -->
npx mrm lint-staged

项目node版本要求 16.0.0以上

yarn add eslint-config-prettier -D

<!-- commitlint -->

[](https://github.com/conventional-changelog/commitlint)
[](https://commitlint.js.org/guides/getting-started.html)
yarn add --dev @commitlint/{cli,config-conventional}
新建 commitlint.config.js

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {}
};
```

新建 .husky/commit-msg

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1
```

```bash
(base) ➜  wsjls-jira git:(master) ✗ git commit -m "fix"
✔ Preparing lint-staged...
✔ Hiding unstaged changes to partially staged files...
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Restoring unstaged changes to partially staged files...
✔ Cleaning up temporary files...
⧗   input: fix
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg script failed (code 1)
```

```text
Common types according to commitlint-config-conventional (based on the Angular convention) can be:

build
chore
ci
docs
feat
fix
perf
refactor
revert
style
test
```

标准格式
git commit -m "ci: 内容"

1234
