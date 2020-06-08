# git 简单使用

Git 是 Linux 发明者 Linus 开发的一款新时代的版本控制系统，那什么是版本控制系统呢？怎么理解？

我们在软件开发中源代码其实是最重要的，那么对源代码的管理变得异常重要：

比如为了防止代码的丢失，肯定本地机器与远程服务器都要存放一份，而且还需要有一套机制让本地可以跟远程同步；

又比如我们经常是好几个人做同一个项目，都要对一份代码做更改，这个时候需要大家互不影响，又需要各自可以同步别人的代码；

又比如我们开发的时候免不了有 bug，有时候刚发布的功能就出现了严重的 bug，这个时候需要紧急对代码进行还原；
又比如随着我们版本迭代的功能越来越多，但是我们需要清楚的知道历史每一个版本的代码更改记录，甚至知道每个人历史提交代码的情况；

等等等类似以上的情况，这些都是版本控制系统能解决的问题。所以说，版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统，对于软件开发领域来说版本控制是最重要的一环，而 Git 毫无疑问是当下最流行、最好用的版本控制系统。

### 下载安装

- git 官网 下载
- 安装即可

### git 的四个区域

- 工作区 (操作代码)
- 暂存区 add
- 本地仓库 commit
- 远程仓库 push
  ![git](https://user-gold-cdn.xitu.io/2019/1/23/168766ec478de231?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### git 配置

- 配置信息列表
  git config --list

- 设置用户名
  git config --global user.name "John Doe"

- 设置邮箱
  git config --global user.email johndoe@example.com

### 简单命令

- git init 初始化本地仓库
- git status 查看文件状态 (红色就是没有添加到暂存区,绿色就是已经添加到了暂存区,绿色红色都没有(目前工作区文件都已提交到了本地仓库))
- git add 文件名 (将文件添加到 暂存区)
- git add . (将所有文件添加到 暂存区)
- git commit -m '提交信息' （暂存区内容 提交到本地仓库）
- git remote add origin [url]
- git push origin master

### 如何上传笔记到 github 仓库

- 右键 git bash here 黑窗口
- git init
- git add .
- git commit -m "提交备注"
- git remote add origin [url]
- git push origin master

# git进阶操作

- git branch  [新分支名]	创建新的分支

- git checkout  [分支名]     切换分支

- git branch -b  [新分支名]     创建并切换到新分支

- git merge  [分支名]    将指定分支合并到当前分支

- git rebase  [分支名，假设为orgin]     

  合并分支的另一种方式，会把你当前分支（假设为work）里的每个提交commit取消掉，并且把它们临时保存为补丁patch(这些补丁放到”`.git/rebase`“目录中)，然后把work分支更新到orgin分支，最后把保存的这些补丁应用到work分支上。最终得到的提交序列更线性。

- 分离HEAD。

  HEAD 是一个对当前检出记录的符号引用，也就是指向你正在其基础上进行工作的提交记录。HEAD 总是指向当前分支上最近一次提交记录，通常情况下是指向分支名的（如 bugFix）。分离的 HEAD 就是让其指向了某个具体的提交记录而不是分支名。在命令执行之前的状态如下所示：

  HEAD -> master -> C1   HEAD指向 master， master 指向 C1

  当你执行了`git checkout C1`之后，变成了：

  HEAD -> C1

- 相对引用。

  通过指定提交记录哈希值的方式在 Git 中移动不太方便，并且现实git中哈希值基于 SHA-1，共 40 位，如`fed2da64c0efc5293610bdd892f82a58e8cbc5d8`。比较令人欣慰的是，Git 对哈希的处理很智能。你只需要提供能够唯一标识提交记录的前几个字符即可。因此我可以仅输入`fed2` 而不是上面的一长串字符。git还引入了更加方便的相对引用：

  - 使用 `^` 向上移动 1 个提交记录
  - 使用 `~` 向上移动多个提交记录，如 `~3`

  ```shell
  git checkout master^	// HEAD指向master的父节点
  git checkout HEAD^		// HEAD指向自身的父节点
  git checkout HEAD~4		// HEAD一次性后退四个节点
  ```

- 强制修改分支位置。

  ```shell
  git branch -f master HEAD~3		//强制将master指向HEAD向后第三个节点
  ```

- 撤销变更。

  - git reset  通过（在本地）把分支记录回退几个提交记录来实现撤销改动。撤销的提交不再存在于本地代码库中，但是代码中所做的变更还在，只是出于未加入暂存区的状态。

    ```shell
    git reset HEAD^		// 撤销本地仓库的上一个提交
    ```

  - git revert  在本地仓库生成一个新的提交，这个新的提交引入了更改——这个更改刚好是用来撤销前面若干提交的。revert之后就可以把你的更改推送到远程仓库与别人分享了。

    ```shell
    git revert HEAD		// 生成一个新的提交用于撤销之前的一个提交
    ```

- 整理提交记录。