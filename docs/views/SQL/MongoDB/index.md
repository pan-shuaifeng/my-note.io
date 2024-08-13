# MongoDB
mac安装
```shell
brew install mongodb-community@4.2
```

启动
```shell
brew services start mongodb-community@4.2
```
停止
```shell
brew services stop mongodb-community@4.2
```
将mongodb作为后台进程手动运行
```shell
mongod --config /usr/local/etc/mongod.conf --fork
```
**mongodb配置文件路径 ：**/usr/local/etc/mongod.conf

查看mongodb是否运行
```shell
ps aux | grep -v grep | grep mongod
```

链接Mongosh
```shell
mongosh
```
