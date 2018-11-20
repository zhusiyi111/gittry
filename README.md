# gittry


# 常用Git命令

## 分支相关
检出新分支：git checkout -b xxx
新分支push到远端：git push origin feature-branch:feature-branch    //推送本地的feature-branch(冒号前面的)分支到远程origin的feature-branch(冒号后面的)分支(没有会自动创建)
查看远程分支：git branch -a  (本地分支不加-a)
删除本地分支：git branch -D xxx
删除远端分支：git push origin --delete xxx