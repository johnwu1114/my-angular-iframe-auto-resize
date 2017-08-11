This repository is sample code for Angular 4 (Angular 2) SPA.  
Use the Visual Studio Code to development.  

# Angular 4 教學 - iframe 自動調整大小

在網頁新舊版本交界期，`iframe` 算是蠻常用的手法，在 Angular 4 (Angular 2) 的 SPA 頁面中，利用 `iframe` 插入舊版網頁，使系統整體感一致。  
`iframe` 的寬高大小又不能固定不變，太小會留下很多空白，太大會使內外頁都產生 Scrollbar。  
本篇將介紹如何讓 `iframe` 在  Angular 的 SPA 頁面中，隨著視窗自動調整大小。  

Blog：  
[Angular 4 教學 - iframe 自動調整大小](https://blog.johnwu.cc/article/angular-4-iframe-auto-resize.html)  

## 說明

安裝軟體的部分我就沒有詳細介紹，以下是我使用到的工具跟語言。  

開發工具：
1. Visual Studio Code。[官網下載頁面](https://code.visualstudio.com/Download)  
> 基本上 VS Code 就是純文字編輯工具，你要用 Sublime、Notepade++、Atom、TextEdit都可以。  
2. Nodejs 6.9.x 以上版本 及 npm 3 以上版本。[官網下載頁面](https://nodejs.org/en/download/)  

下載範例後記得在專案目錄安裝 npm packages

``` batch
npm install
```
