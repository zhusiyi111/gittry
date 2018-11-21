# gittry


# 常用Git命令

## 分支相关
#### 基本
检出新分支：git checkout -b xxx
新分支push到远端：git push origin feature-branch:feature-branch    //推送本地的feature-branch(冒号前面的)分支到远程origin的feature-branch(冒号后面的)分支(没有会自动创建)
查看远程分支：git branch -a  (本地分支不加-a)
删除本地分支：git branch -D xxx
删除远端分支：git push origin --delete xxx
强制提交：git push -f origin xxx

#### 合并
通过merge合并：git merge xxx   //将xxx合并到当前分支


## 节点相关
强行回到远端最新的一次commit：git reset --hard 
提交回滚（revert）上一次提交：git revert HEAD
提交回滚（revert）上上次提交：git revert HEAD^
提交回滚（revert）某次提交：git revert commit 
