# 使用帮助
    下载Dockerfile和配置文件到同一目录下。
    
## 第一步
        docker build -t feiu/jupyter:1 .
## 第二步
        docker run -d -p 8888:8888 --name jupyter feiu/jupyter:1
   运行成功即可
## 第三步
访问测试
        http://YOUR IP:8888
默认密码为：123456


## 制作证书
    openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout jkey.key -out jcert.pem
### 使用其生成的证书并配置jupyter_notebook_config.py
    c.NotebookApp.certfile = '/home/user/jcert.pem'
    c.NotebookApp.keyfile = '/home/user/jkey.key'
