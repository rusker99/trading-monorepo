create table trading."Price"
(
  id           serial not null,
  bid          numeric(16, 4) not null,
  last         numeric(16, 4) not null,
  ask          numeric(16, 4) not null,
  date         timestamp        not null,
  "instrumentId" integer        not null,

  CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

ALTER TABLE trading."Price" ADD CONSTRAINT "Price_Instrument_id_fkey" FOREIGN KEY ("instrumentId") REFERENCES trading."Instrument"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;
