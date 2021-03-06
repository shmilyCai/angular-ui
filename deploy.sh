#!/bin/sh

### 先提交master分支下的dist文件
git branch
git checkout master
git add .
git commit -am"dist"
git pull --rebase
git push

### 更新gh-pages下的文件
git checkout gh-pages
git branch
rm -rf *~
git checkout master dist
cp -r dist/* .
rm -rf dist

#### 提交到git上
date=$(date +%Y%m%d)
git add .
git commit -am"$date-周五发布"
git push

git branch
git checkout master