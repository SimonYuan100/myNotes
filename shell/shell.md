# shell 命令
```bash
# mkdir 
新建文件夹
# echo '' > name.xx
新建文件

# cd ..
返回上级
# cd fileFolderName
打开文件夹
# rm fileName
移除文件
# rm -rf fileFolderName
移除文件夹
# ls
查看目录文件

# ps -ef|grep java
查看进程

# 创建tar.xz文件：只要先 tar cvf xxx.tar xxx/ 这样创建xxx.tar文件先，然后使用 xz -z xxx.tar 来将 xxx.tar压缩成为 xxx.tar.xz
解压tar.xz文件：先 xz -d xxx.tar.xz 将 xxx.tar.xz解压成 xxx.tar 然后，再用 tar xvf xxx.tar来解包

# 对于tar版本大于1.22（http://www.gnu.org/software/tar/），直接一条命令tar -xvf balabala.tar.xz就足矣，因为从1.15起tar就可以自动识别压缩的格式。