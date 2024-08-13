# Docker

## mac部署nginx

mac的docker安装资源文件在  
`/Users/pan/Library/Containers/com.docker.docker/Data/vms/0/data`

1.下载nginx镜像
```shell       
 docker pull nginx
 docker pull nginx:1.21.1
 ```
2.在本地创建nginx配置文件（我选择的地址在：/Users/pan/technology/Docker/nginx）
```shell
mkdir -p /Users/pan/technology/Docker/nginx/conf
mkdir -p /Users/pan/technology/Docker/nginx/log
mkdir -p /Users/pan/technology/Docker/nginx/html
```
3.
```shell
# 生成容器
docker run --name nginx -p 8090:80 -d nginx

把容器配置文件、html部署文件、日志文件复制出来
docker cp nginx:/etc/nginx/nginx.conf /Users/pan/technology/Docker/nginx/nginx.conf

docker cp nginx:/etc/nginx/conf.d /Users/pan/technology/Docker/nginx/conf.d

docker cp nginx:/usr/share/nginx/html /Users/pan/technology/Docker/nginx/html
```

4.停止并删除该容器
```shell       
docker stop nginx
docker rm  nginx
```

5.重新启动容器
```shell
docker run --name nginx -m 200m -p 80:80 \
-v /home/nginx/nginx.conf:/etc/nginx/nginx.conf \
-v /home/nginx/conf.d:/etc/nginx/conf.d \
-v /home/nginx/html:/usr/share/nginx/html \
-v /home/nginx/log:/var/log/nginx \
-e TZ=Asia/Shanghai \
--restart=always \
--privileged=true -d nginx

# -e TZ=Asia/Shanghai：设置时区
# --restart=always: 保持自动重启
# --privileged=true: 获取root权限启动容器
```



docker build -t eggpain-image . //-t 指定镜像的名字   

docker run -d xiaopantotalpan/nodejs // 后台运行

docker ps -a // 查看所有容器

docker rmi -f xiaopantotalpan/nodejs // 删除镜像

docker pull xiaopantotalpan/nodejs:v1.0 //拉取镜像

docker ps // 查看正在运行的容器

docker run -d -p3000:3000 --name docker-xiaopan  eggpain-image//   
运行镜像 -d   在后台运行不被占用当前窗口    
-p指定访问3000端口转发到镜像3000端口     
--name指定名字
