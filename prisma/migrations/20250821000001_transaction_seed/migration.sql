
with "rsiInstrument" as (select id from trading."Instrument" where symbol = 'RSI'),
     "testUser" as (select id from trading."User" where "userName" = 'test.user')
INSERT INTO trading."Transaction" ("instrumentId", quantity, price, currency, "tradeDate", type, "userId")
select "rsiInstrument".id, 50.33000, 20.9990, 'EUR', cast('2025-08-03' as timestamp), 'BUY', "testUser".id
from "rsiInstrument", "testUser"
  union all
select "rsiInstrument".id, -20, 25.34, 'EUR', cast('2025-08-15' as timestamp), 'BUY', "testUser".id
from "testUser", "rsiInstrument";
