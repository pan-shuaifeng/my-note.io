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
## Http
### Client客户端
```csharp
1.实例化HttpClient对象
HttpClient client = new HttpClient();

//<1>服务器地址
string page = "http://localhost:8080/";

2.发送get请求
//<2>请求路径
string data = "login"
//<3>拼接请求路径
string url= page+data
//<4>异步等待发送get请求
HttpResponseMessage response = await client.GetAsync(url); 
//<5>服务器对请求作出响应，异步等待服务器响应内容
string text = await response.Content.ReadAsStringAsync();
cwonsole.WriteLine(text); //输出响应内容

3.发送post请求
//<2>请求路径
string data = "login"
//<3>拼接请求路径
string url= page+data

//<4>字典结构发送数据
Dictionary<string, string> dic = new Dictionary<string, string>(){
{"account", "admin"},
{"password", "123456"}
};
//<5>将字典转换成表单数据
FormUrlEncodedContent content = new FormUrlEncodedContent(dic);
//<6>异步等待发送post请求
HttpResponseMessage respone =  await client.PostAsync(page,stringContent);
 //<7>服务器对请求作出响应，异步等待服务器响应内容
 string text = await respone.Content.ReadAsStringAsync();
 Console.WriteLine("响应的内容:{0}", text);
 
 4.使用post请求获取服务器返回的文件
if (data == "/download") {
//读取到的文件
byte[] fileData=  await respone.Content.ReadAsByteArrayAsync();
     
 //将文件保存到本地
string path = @"E:\my-study\c#网络编程\HTTP\客户端的文件\1.jpeg";
 
 //创建文件流     
FileStream fileStream = new FileStream(path, FileMode.OpenOrCreate);

//将文件写入到文件流中
await fileStream.WriteAsync(fileData,0,fileData.Length);

//关闭文件流
fileStream.Close();
Console.WriteLine("下载完毕");
  }
 
 
```
Server服务端
```csharp
string pagr = "http://localhost:8080/";

//1.实例化HttpListener对象
HttpListener httpListener = new HttpListener();

//2.添加监听地址,监听客户端请求
httpListener.Prefixes.Add(page);

//3.启动服务
httpListener.Start();

//4.等待客户端发送get请求
HttpListenerContext context = await httpListener.GetContextAsync();

//<1>获取拼接在Url路径的参数
string text = HttpUtility.UrlDecode(context.Request.RawUrl);
Console.WriteLine(text);
//listenerContext.Response.OutputStream表示响应数据的输出流，可以通过它向客户端发送数据
StreamWriter stream = new StreamWriter(listenerContext.Response.OutputStream,Encoding.UTF8);//代码创建了一个 StreamWriter 实例，该实例将字符数据写入到 HTTP 响应流中，使用 UTF-8 编码。通过这个 StreamWriter，你可以将文本数据发送回客户端，以响应 HTTP 请求。

if(text.Contains("/login")){
//<2>向客户端发送响应数据
await stream.WriteAsync("登录成功");
//<3>关闭流
stream.Close();
}

//5等待客户端发送post请求
HttpListenerContext listenerContext = await httpListener.GetContextAsync();

//<1>获取请求参数
Stream inputStream = listenerContext.Request.InputStream;

//<2>创建一个字节数组，用于存储从输入流中读取的数据
byte[] readData = new byte[listenerContext.Request.ContentLength64];

//<3>异步等待读取数据
int length =  await inputStream.ReadAsync(readData,0,readData.Length);


//<4>将字节数组转换成字符串
string text= Encoding.UTF8.GetString(readData)
Console.WriteLine("请求的内容:{0}",text);
//<5>关闭读取流
inputStream.Close();

//同上Get请求
StreamWriter stream = new StreamWriter(listenerContext.Response.OutputStream, Encoding.UTF8);

 if(text.Contains("/login")){
//<2>向客户端发送响应数据
await stream.WriteAsync("登录成功");
//<3>关闭流
stream.Close();
}

//使用post请求向客户端返回数据

if (text.Contains("/download")) {
 //定义返回的文件路径 
 string path = @"E:\my-study\c#网络编程\HTTP\服务端的文件\1.jpeg";

//通过文件路径获取文件
FileStream file = new FileStream(path, FileMode.Open);
byte[] data = new byte[file.Length];

//将文件写入到byte数组中
int  fileLength=  await file.ReadAsync(data, 0, data.Length);

//关闭文件流
file.Close();
Console.WriteLine(fileLength);

//客户端的输出流，服务器向客户端返回数据使用
Stream streamByte = listenerContext.Response.OutputStream;

// 将文件返回到客户端
await streamByte.WriteAsync(data, 0, data.Length);

//关闭文件流
streamByte.Close();
}



```


