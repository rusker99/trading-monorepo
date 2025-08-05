INSERT INTO trading."Transaction" (symbol, quantity, price, currency, "tradeDate", type, "userId")
select 'RSI', 50.33000, 20.9990, 'EUR', '2025-08-03', 'BUY', id from trading."User"
where "userName" = 'test.user';

