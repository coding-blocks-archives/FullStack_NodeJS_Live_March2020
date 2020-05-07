### Setting up MySQL Database and User
```shell
mysql -u root
```


```sql
create database sampledb22;
create user sampleuser22 identified with mysql_native_password by 'samplepass22';
grant all privileges on sampledb22.* to sampleuser22;
flush privileges;
```
