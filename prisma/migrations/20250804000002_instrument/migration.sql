create table trading."Instrument"
(
  id     serial not null,
  symbol varchar(10)    not null,
  type   varchar(10)     not null,
  description varchar(100),

  constraint Instrument_pk primary key (id)
);

ALTER TABLE trading."Instrument" ADD CONSTRAINT Instrument_uk UNIQUE ("symbol");
