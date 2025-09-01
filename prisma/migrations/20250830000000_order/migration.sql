create table trading."Order"
(
  id             serial         not null,
  action         varchar(10)    not null,
  type           varchar(10)    not null,
  "limitPrice"   numeric(16, 4),
  "filledPrice"  numeric(16, 4),
  status         varchar(10)    not null,
  quantity       numeric(10, 5) not null,
  "orderDate"    timestamp      not null,
  "filledDate"   timestamp,
  "instrumentId" integer        not null,

  CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

ALTER TABLE trading."Order"
  ADD CONSTRAINT "Order_Instrument_id_fkey" FOREIGN KEY ("instrumentId") REFERENCES trading."Instrument" ("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;
