## Docker
container 容器
image 镜像
Dockerfile 定制镜像的文件

1.创建Dockerfile文件
```Dockerfile
FROM node:18-alpine3.15
WORKDIR /egg
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```
2.创建.dockerignore文件
```dockerignore
node_modules
.dockerignore
Dockerfile
.git
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
