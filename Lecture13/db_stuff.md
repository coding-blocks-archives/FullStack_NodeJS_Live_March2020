

RDBMS / SQL
==============
MySQL 
MariaDB
PostgreSQL 
Oracle DB
DB2
----------
SQLite
H2



NoSQL / (Document Store / Key Value)
====================
MongoDB 
Cassandra
Firebase 
DynamoDB
Redis 



CAP Theorem 

Consistency
Availability 
Partion Tolerance

PACELC 

if (Partition tolerant)
    Availability
    or
    Consistency
Else
    (Low) Latency
    or
    Consistency

int count = 10;
thread1 {                     thread 2 {
    r1 = count1                    
    r1 = r1 + 1                    
    count1 = r1                 
                                r2 = count1
                                r2 = r2 - 1
                                count1 = r2
}                            }


// count?? 


ACID
    - atomicity
    - consistency
    - isolation
    - durability

BASE
    - Basically Available 
    - Soft state
    - Eventually Consistent










