# 购买电影票网站

使用的是Vue 3 +pinia

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## 安装依赖包

```sh
npm install
```

### 启动项目

```sh
npm run dev
```

### 打包项目

```sh
npm run build
```


### 第一天
  在设计选择影院界面时,我最开始想把海报放在最上面 把详情放在海报下面 可以通过滚轮移动到海报上并添加一层高斯模糊蒙版 ,但是在写的过程中发现 详情会移动到top 0 的位置 把海报盖住了还过了一部分 ,滚动过多了 后面又设置了staick, 发现footer 版权去 把影城盖住了, 所以这个结构又问题  因该分成三个部分 -->> 
  首先单独写海报区 让他 staick top 80 
  详情去要和选择影院区分开 应该是跟 footer 版权区 一个层级  把详情区 设置 staick top 80 这样移动正好可以把海报区盖住 显示高斯模糊
  最后 把选择影院区 不要设置 staick  这样 向上滚动时 footer 不会盖住 选择影院区 而且 向上滚动时 遇到详情区会被盖住 但是可以移动过去 从而实现效过  不过详情去就不能设置跟选择影院区一样的背景颜色了  也就是功能实现了 但是效果很丑  也有解决办法 不过多阐述了 就是全部先放到一个容器中设置一个背景颜色就行

  不过这样写会导致进入界面显示选择影院区内容过少 导致界面不好看  所以我选择把 海报跟详情区合在一起 这样效果也还不错
  
  第一天总结: 一个好的布局可以解决很多事情, 写完后发现布局不好 向再去改会很麻烦 很容易改错 不过养成每个容器都写class 并且在scss 中嵌套写法  比较方便转移布局   用标签选择器可能会出现不必要的问题 所以少用标签选择器 对后续扩展有好处
