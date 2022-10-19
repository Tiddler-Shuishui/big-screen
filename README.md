# 我的大屏可视化项目

## 如何开发
``` bash
yarn install
yarn dev
```

## 如何打包
``` bash
yarn build --base ./
```

## 如何发布
``` bash
cd dist
git init
git add .
git commit -m 'deploy'
git remote add origin 数据源
git push -u -f origin master
```