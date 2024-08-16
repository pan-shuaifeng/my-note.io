#### 启动mysql  
```shell
sudo /usr/local/mysql/support-files/mysql.server start

//mysql的停止和重启 和 启动相似 把start 替换为 stop 或 restart 即可
```
## 更改数据库用户密码(8.0以上版本适用)
```sql 
ALTER USER 'root'@'localhost' IDENTIFIED BY '227010';

//root为用户名，227010为密码
```


## 将本地数据库授予远程连接权限
1.查看数据库用户权限
```sql
select user,host from mysql.user;
```
2.选择myql数据库
```sql
use mysql
```
3.授权用户权限
```sql
UPDATE user SET host='%' WHERE user='your_username';
```
```
host ="%"表示任何ip都可以连接,user="your_username"表示你要授权的用户名
注意事项
安全性：将 host 设置为 '%'，允许用户从任何主机连接，这可能带来安全风险。确保只对信任的用户进行此操作。
特定IP：如果希望只允许特定IP的访问，可以将 host 设置为特定的IP地址，而不是 '%'。
```
4.刷新权限
```sql
FLUSH PRIVILEGES;
```





