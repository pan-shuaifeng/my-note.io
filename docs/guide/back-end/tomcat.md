# tomcat

## 查询是否安装

`brew search tomcat`

## 安装

### 下载

`brew install tomcat`

### 启动

`brew services start tomcat`  
`catalina run ` 

### 部署前端项目目录  
```
/opt/homebrew/Cellar/tomcat/10.1.23/libexec/webapps
```
### 更改端口号
```xml
<!--  /opt/homebrew/etc/tomcat/server.xml 文件-->
<!--   port为端口号-->
   <Connector port="8089" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"
               maxParameterCount="1000"
               />
```