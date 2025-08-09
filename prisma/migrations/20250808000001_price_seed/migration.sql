INSERT INTO trading."Price" ("instrumentId", bid, last, ask, "date")
select id, 12.40, 12.4600, 12.50, '2025-05-01 01:00:00' from trading."Instrument"
  where symbol = 'RSI';

INSERT INTO trading."Price" ("instrumentId", bid, last, ask, "date")
select id, 12.45, 12.4900, 13.00, '2025-05-01 01:00:01' from trading."Instrument"
  where symbol = 'RSI';

INSERT INTO trading."Price" ("instrumentId", bid, last, ask, "date")
select id, 12.48, 12.5100, 12.54, '2025-05-01 01:00:02' from trading."Instrument"
  where symbol = 'RSI';

INSERT INTO trading."Price" ("instrumentId", bid, last, ask, "date")
select id, 11.80, 12.05, 12.10, '2025-05-01 01:00:03' from trading."Instrument"
  where symbol = 'RSI';

INSERT INTO trading."Price" ("instrumentId", bid, last, ask, "date")
select id, 11.54, 11.60, 11.61, '2025-05-01 01:00:04' from trading."Instrument"
  where symbol = 'RSI';

INSERT INTO trading."Price" ("instrumentId", bid, last, ask, "date")
select id, 0.0002, 0.0003, 0.0003, '2025-05-01 01:00:00' from trading."Instrument"
  where symbol = 'AMHL';

INSERT INTO trading."Price" ("instrumentId", bid, last, ask, "date")
select id, 4.03, 4.18, 4.22, '2025-05-01 01:00:00' from trading."Instrument"
  where symbol = 'ETAO';
