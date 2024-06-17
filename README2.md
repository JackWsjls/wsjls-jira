# 482 React17+React Hook+TS4 最佳实践仿 Jira 企业级项目

## 用 Create React  App 初始化项目

npx create-react-app wsjls-jira --template typescript
cd wsjls-jira
npm start

## 配置 eslint、 prettier 和 commitlint 规范工程

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
[如何使用Commitlint](https://blog.csdn.net/weixin_61434483/article/details/131542611)
[新版husky配合commitlint，规范我们的git的提交记录--Nodejs项目超详细教程](https://www.jianshu.com/p/4c82761c0a68)

## 对比常见 Mock  方案 配置 JSON SERVER

全局安装json server
npm i json-server -g (node 18.3.0)
npm i json-server --location=global

### --watch/-w can be omitted, JSON Server 1+ watches for file changes by default

[json-server --watch. db.json](https://blog.csdn.net/Raid02/article/details/120874070)
json-server ./__json_server_mock__/db.json -p 2000

## Node 版本

```bash
v20.12.2 18.3.0
nvm use 20.12.2
```

## Question

### Adding a middleware from CLI does not work[https://github.com/typicode/json-server/issues/1481]

the versions I used were:
"json-server": "^0.17.4",
"json-server-auth": "^2.1.0",

cause the version 1.0^ of json-server doesn't have middleware implementations.

## 告别后端依赖：用 MSW 实现独立的前端应用 Mock[https://blog.csdn.net/lecepin/article/details/136112705]
