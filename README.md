# Template-Vue2-Component-Library

基于 Vue2 + JavaScript + Webpack5 的组件开发模板，既可以通过发布 npm 包并导入项目中来使用组件，也可以直接通过 script 引入构建的生产版本的代码到 HTML 中来使用组件。

## 项目结构

lib 文件夹中的代码为组件代码，项目的入口文件为 lib/main.js

src 文件夹中的代码用于开发时的测试

本模板提供了一个简易的组件实现作为示例，其功能为导入 JSON 文件并显示在页面上。

## 基础依赖安装

```bash
npm ci
```

该模板只包含最基本的依赖，如需其他依赖请自行安装。

```bash
npm install xxx
```

## 开发

```bash
npm run dev
```

## 构建生产版本的代码

```bash
npm run build
```

可以使用 VSCode 插件 Live Server 打开 test.html 来测试构建的生产版本的代码。
