
INSERT INTO trading."User" ("userName", "firstName", "lastName", email)
VALUES ('test.user', 'Test', 'User', 'test.user@russ99.com');

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2023-10-01',5200.00, id from trading."User"
where "userName" = 'test.user';

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2023-11-01',5300.00, id from trading."User"
where "userName" = 'test.user';

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2023-12-01',5500.00, id from trading."User"
where "userName" = 'test.user';

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2024-01-01',3200.00, id from trading."User"
where "userName" = 'test.user';

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2024-02-01',2800.00, id from trading."User"
where "userName" = 'test.user';

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2024-03-01',4100.00, id from trading."User"
where "userName" = 'test.user';

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2024-04-01',4800.00, id from trading."User"
where "userName" = 'test.user';

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2024-05-01',6400.00, id from trading."User"
where "userName" = 'test.user';

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2024-06-01',6900.00, id from trading."User"
where "userName" = 'test.user';

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2024-07-01',7800.00, id from trading."User"
where "userName" = 'test.user';

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2024-08-01',7850.00, id from trading."User"
where "userName" = 'test.user';

insert into trading."AccountPerformance" ("date", amount, "userId")
SELECT '2024-09-01',7640.00, id from trading."User"
where "userName" = 'test.user';
