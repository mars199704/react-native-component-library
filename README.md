# gogoout-ui-library

## getting started

安裝相關依賴

```
yarn
```

執行 storybook

```
yarn storybook
```

若新增 stories，為了讓 .ondevice 中的 main.js 吃到新增的路徑，有以下兩種方式可使用：

p.s. 這兩個指令只有在 `新增/刪除路徑` 時才需使用，一般情況下若單純修改 stories 的內容使用 `yarn storybook 即可`

更新 stories 一次

```
yarn update-stories
```

監聽 stories 的變化

```
yarn storybook-watcher
```

## publish to npm

將 src 中的 component 打包成 dist 檔

```
rm -rf dist && yarn rollup
```

發布到 npm 上

```
npm version SET_YOUR_VERSION && npm publish
```

## 部署靜態檔到 github pages

先產生靜態檔 storybook-static

```
yarn build-storybook
```

部署到 github pages

```
yarn deploy-storybook
```
