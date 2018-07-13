docker run  -p 3306:3306 --name mysql  -e MYSQL_ROOT_PASSWORD=root  -d mysql:5.7.13
#如果不指定端口，默认为3306
使用自定义配置文件
docker run --name mysql -v /my/custom:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
使用自定义数据目录
docker run --name mysql -v /my/own/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
使用自定义日志目录
docker run --name mysql -v /my/own/logdir:/var/log/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
数据表备份
docker exec some-mysql sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > /path/on/your/host/all-databases.sql
