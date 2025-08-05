create table trading."Instrument"
(
  id     serial not null,
  symbol varchar(10)    not null,
  last   numeric(16, 4) not null,
  bid    numeric(16, 4) not null,
  ask    numeric(16, 4) not null,
  type   varchar(10)     not null,
  description varchar(100)
);
