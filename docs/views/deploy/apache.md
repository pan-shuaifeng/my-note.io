# Apache
## 指令
```shell
apachectl -v //查看apache版本
sudo apachectl start //启动apache
sudo apachectl restart //重启apache
sudo apachectl stop //停止apache
sudo apachectl status //查看apache状态
```
## 修改网站根目录
Apache 的网站根目录是 /Library/WebServer/Documents/，如果想切换到自定义的目录下，比如：/Users/hanggg/wwwroot。可以通过如下操作来实现。  
(1)在终端中执行如下命令编辑 httpd.conf 文件
```shell
sudo vim /etc/apache2/httpd.conf
```
(2)按 i 进入编辑模式。将 mod_rewrite 和 libphp7（这个具体根据当前系统 php 版本不同会有变化）前面的注释去掉  
(3)找到 DocumentRoot 和 Directory 替换成 /Users/hangge/wwwroot  
(4)最后按下 esc 退出编辑模式。 接着组合按下 shift + : 开启命令，然后输入 wq 回车，保存退出。
