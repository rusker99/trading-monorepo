create table trading."Transaction"
(
  id        serial not null,
  quantity  numeric(10, 5)                                               not null,
  price     numeric(16, 4)                                               not null,
  "userId"    integer                                                       not null,
  currency  varchar(3)                                                    not null,
  "tradeDate" timestamp                                                         not null,
  type      varchar(3)                                                   not null,
  "instrumentId" integer        not null,
    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")

);

ALTER TABLE trading."Transaction" ADD CONSTRAINT "Trading_userId_fkey" FOREIGN KEY ("userId") REFERENCES trading."User"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE trading."Transaction" ADD CONSTRAINT "Transaction_Instrument_id_fkey" FOREIGN KEY ("instrumentId") REFERENCES trading."Instrument"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;
