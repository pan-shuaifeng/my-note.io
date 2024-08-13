# 文件管理

### 获取本地路径
```csharp
 //转义符@
  string pathDemo = @"E:\my-study\c#文件管理\本地资源\副本股票交易所技术合同.docx";
  string path = "E:\\my-study\\c#文件管理\\本地资源\\apache.js";
```

## File

| 方法 | 解释             | 示例 |
|----|----------------|----|
| Exists | 判断文件是否存在       | ` File.Exists(path) ` |
| Create | 创建文件           | `File.Create(path);`|
| Delete | 删除文件           | `File.Delete(path);`|
| WriteAllText | 写入文件（会替换当前文件）  | `File.WriteAllText(path, "写入文件内容")`|
| AppendAllText | 追加文件（不会替换当前文件） | `File.AppendAllText(path, "追加文件内容");`|
| ReadAllText | 读取文件           | `string content = File.ReadAllText(path);`|
| Copy | 复制文件           | `File.Copy(path, "E:\\my-study\\c#文件管理\\本地资源\\副本apache.js");`|

## FileInfo
```csharp
//使用
FileInfo fileInfo = new FileInfo(path);
```

| 属性             | 解释          | 示例 |
|----------------|-------------|----|
| Exists         | 判断文件是否存在    | `fileInfo.Exists` |
| FullName       | 获取文件完整路径    | `fileInfo.FullName` |
| Name           | 获取文件名       | `fileInfo.Name` |
| Length         | 获取文件长度      | `fileInfo.Length` |
| IsReadOnly     | 判断文件是否为只读   | `fileInfo.IsReadOnly` |
| CreationTime   | 获取文件的创建时间   | `fileInfo.CreationTime` |
| LastAccessTime | 获取文件的最后访问时间 | `fileInfo.LastAccessTime` |
| Extension | 获取文件扩展名  | `fileInfo.Extension` |
| Directory | 获取文件所在目录 | `fileInfo.Directory` | 

## FileStream
#### 读取文件
```csharp
string path = "E:\\my-study\\c#文件管理\\本地资源\\apache.js";

//读取文件,没有文件不创建
FileStream fileStream = new FileStream(path, FileMode.Open); 

//读取文件没有的话就创建
FileStream fileStream = new FileStream(path, FileMode.OpenOrCreate);
```

#### 获取文件内容
```csharp
byte[] buffer = new byte[fileStream.Length]; //创建一个字节数组，长度为文件长度     
fileStream.Read(buffer, 0, buffer.Length); //将文件内容读入字节数组
string content = Encoding.UTF8.GetString(buffer); //将字节数组转换为字符串
Console.WriteLine(content); //输出文件内容
fileStream.Close(); //关闭文件流
```

#### 写入文件
```csharp
string path = "E:\\my-study\\c#文件管理\\本地资源\\apache.js";
string content = "写入文件内容";
FileStream fileStream = new FileStream(path, FileMode.OpenOrCreate);
byte[] buffer = Encoding.UTF8.GetBytes(content); //将字符串转换为字节数组
fileStream.Write(buffer, 0, buffer.Length); //将字节数组写入文件
fileStream.Close(); //关闭文件流
```
## StreamReaderWriter

#### 读取文件
```csharp
string path = "E:\\my-study\\c#文件管理\\本地资源\\apache.js";
StreamReader streamReader = new StreamReader(path); //创建一个StreamReader对象，用于读取文件
string content = streamReader.ReadToEnd(); //读取文件内容
Console.WriteLine(content); //输出文件内容
streamReader.Close(); //关闭StreamReader对象
```
#### 写入文件
```csharp
string path = "E:\\my-study\\c#文件管理\\本地资源\\apache.js";
string content = "写入文件内容";
StreamWriter streamWriter = new StreamWriter(path, false); //创建一个StreamWriter对象，用于写入文件 false表示覆盖文件内容，true表示追加文件内容
streamWriter.Write(content); //将内容写入文件
streamWriter.Close(); //关闭StreamWriter对象
```    

## DirectoryInfo
```csharp
//使用
DirectoryInfo directoryInfo = new DirectoryInfo(path);

```
| 属性                         | 解释          | 示例 |
|----------------------------|-------------|----|
| Exists                     | 判断目录是否存在    | `directoryInfo.Exists` |
| FullName                   | 获取文件完整路径    | `directoryInfo.FullName` |
| Name                       | 获取文件名       | `directoryInfo.Name` |
| CreationTime               | 获取文件的创建时间   | `directoryInfo.CreationTime` |
| LastAccessTime             | 获取文件的最后访问时间 | `directoryInfo.LastAccessTime` |
| Extension                  | 获取文件扩展名  | `directoryInfo.Extension` |
| Attributes                 | 获取文件属性，如只读、隐藏等 | `directoryInfo.Attributes` |
| Parent                     | 获取父目录 | `directoryInfo.Parent` |
| Root                       | 获取根目录 | `directoryInfo.Root` |



| 方法     | 解释   | 示例                       |
|--------|------|--------------------------|
| Create | 创建项目 | `directoryInfo.Create()` |
| Delete | 删除项目 | `directoryInfo.Delete()` |
| GetFiles | 获取目录下的所有文件 | `directoryInfo.GetFiles()` |











