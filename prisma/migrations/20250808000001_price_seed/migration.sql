
with "rsiInstrument" as (select id from trading."Instrument" where symbol = 'RSI')
INSERT INTO trading."Price" ("instrumentId", bid, last, ask, change, "date")
select "rsiInstrument".id, 12.40, 12.4600, 12.50, 0, cast('2025-05-01 01:00:00' as timestamp)
from "rsiInstrument"
union all
select "rsiInstrument".id, 12.45, 12.4900, 13.00, 0.03, cast('2025-05-01 01:00:01' as timestamp)
from "rsiInstrument"
union all
select "rsiInstrument".id, 12.48, 12.5100, 12.54, 0.2, cast('2025-05-01 01:00:02' as timestamp)
from "rsiInstrument"
union all
select "rsiInstrument".id, 11.80, 12.05, 12.10, -0.46, cast('2025-05-01 01:00:03' as timestamp)
from "rsiInstrument"
union all
select "rsiInstrument".id, 11.54, 11.60, 11.61, -0.45, cast('2025-05-01 01:00:04' as timestamp)
from "rsiInstrument";

INSERT INTO trading."Price" ("instrumentId", bid, last, ask, change, "date")
select id, 0.0002, 0.0003, 0.0003, 0, cast('2025-05-01 01:00:00' as timestamp)
from trading."Instrument"
  where symbol = 'AMHL';

INSERT INTO trading."Price" ("instrumentId", bid, last, ask, change, "date")
select id, 4.03, 4.18, 4.22, 0, cast('2025-05-01 01:00:00' as timestamp)
from trading."Instrument"
  where symbol = 'ETAO';
