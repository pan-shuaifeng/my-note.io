# 网络编程
``每次使用连接等待时记得使用try catch 出错的话记得关闭连接``
## TCP
### Client客户端
```csharp
//使用TcpClient类
1.实例化TcpClient对象
client = new TcpClient();

2.连接服务器
await client.ConnectAsync("127.0.0.1", 8888); //使用异步等待

3.向服务器发送消息
client.Connected //判断是否连接成功

//将字符串转换成字节数组
byte[] data = Encoding.UTF8.GetBytes("hello");

//向服务器发送数据 data为数据， 0为起始位置，data.Length为长度
await client.GetStream().WriteAsync(data,0,data.Length); 

4.接收服务器返回的消息

//一直判断是否连接成功
while(client.Connected){
try{
    //创建缓冲区
    byte[] buffer = new byte[4069];
    //接收数据 异步等待写入到buffer中
    int length = await client.GetStream().ReadAsync(buffer, 0, buffer.Length);
    //将字节数组转换成字符串
    string msg = Encoding.UTF8.GetString(buffer, 0, length);
    Console.WriteLine(msg); //输出消息
    }catch (Exception e){
        Console.WriteLine(e.Message);
    client.Close(); //关闭连接    
    }
}
```

### Server服务端

```csharp
//使用TcpListener类
1.创建一个端口号为7788的类
TcpListener listener = TcpListener.Create(7788);

listener.Start(500); //启动监听 最大连接数为500

2.等待客户端连接
TcpClient client = await listener.AcceptTcpClientAsync(); //异步等待客户端连接
 // 可以获取客户端的Ip地址 ipv6
 Console.WriteLine("客户端已连接:" + client.Client.RemoteEndPoint);
 
3.接收客户端发送的消息
client.Connected //判断是否处于连接状态
//创建缓冲区
byte[] buffer = new byte[4096];
//异步等待客户端发送数据
int length = await client.GetStream().ReadAsync(buffer, 0, buffer.Length);
//将字节数组转换成字符串
string msg = Encoding.UTF8.GetString(buffer, 0, length);
Console.WriteLine(msg); //输出消息

4.向客户端发送消息
try{
//将字符串转换成字节数组
byte[] data = Encoding.UTF8.GetBytes("hello");
//向客户端发送数据 data为数据， 0为起始位置，data.Length为长度
await client.GetStream().WriteAsync(data,0,data.Length);
}catch (Exception e){
    Console.WriteLine(e.Message);
    client.Close(); //关闭连接    
}
```
## UDP
### Client客户端
``` csharp
创建一个UdpClient对象
UdpClient client = new UdpClient(0); //端口为0表示随机端口
//向服务器发送消息
byte[] data = Encoding.UTF8.GetBytes("hello");
try{
int length= await client.SendAsync(data, data.length, "127.0.0.1", 8899); //异步等待发送数据
if(data.Length == length){
Console.WriteLine("完整发送");
}
}catch (Exception e){
Console.WriteLine(e.Message);
udpClient.Close(); //关闭连接
}

//接收服务器返回的消息
while(client!=null){
  UdpReceiveResult result =  await client.ReceiveAsync()
    string msg = Encoding.UTF8.GetString(result.Buffer);
    Console.WriteLine(msg); //输出消息 
}
```

### Server服务端
```csharp
创建一个UdpClient对象
UdpClient client = new UdpClient(8899); //端口为8899
//接收客户端发送的消息
while(client!=null){
  UdpReceiveResult result =  await client.ReceiveAsync()
    string msg = Encoding.UTF8.GetString(result.Buffer);
    Console.WriteLine(msg); //输出消息 
}

//向客户端发送消息
try{
//将字符串转换成字节数组
byte[] data = Encoding.UTF8.GetBytes("hello");
//向客户端发送数据 data为数据， 0为起始位置，data.Length为长度
await client.SendAsync(data,0,data.Length, result.RemoteEndPoint); //异步等待发送数据
}catch (Exception e){
Console.WriteLine(e.Message);
udpClient.Close(); //关闭连接
}
```





