
INSERT INTO trading."User" ("userName", "firstName", "lastName", email)
VALUES ('test.user', 'Test', 'User', 'test.user@russ99.com');

with "testUser" as (select id from trading."User" where "userName" = 'test.user')
insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT cast('2023-10-01' as date),5200.00, id from "testUser"
  union all
SELECT cast('2023-11-01' as date),5300.00, id from "testUser"
  union all
SELECT cast('2023-12-01' as date),5500.00, id from "testUser"
  union all
SELECT cast('2024-01-01' as date),3200.00, id from "testUser"
  union all
SELECT cast('2024-02-01' as date),2800.00, id from "testUser"
  union all
SELECT cast('2024-03-01' as date),4100.00, id from "testUser"
  union all
SELECT cast('2024-04-01' as date),4800.00, id from "testUser"
  union all
SELECT cast('2024-05-01' as date),6400.00, id from "testUser"
  union all
SELECT cast('2024-06-01' as date),6900.00, id from "testUser"
  union all
SELECT cast('2024-07-01' as date),7800.00, id from "testUser"
  union all
SELECT cast('2024-08-01' as date),7850.00, id from "testUser"
  union all
SELECT cast('2024-09-01' as date),7640.00, id from "testUser";
