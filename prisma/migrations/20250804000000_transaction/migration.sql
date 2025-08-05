create table trading."Transaction"
(
  id        serial not null,
  symbol    varchar(10)                                                  not null,
  quantity  numeric(10, 5)                                               not null,
  price     numeric(16, 4)                                               not null,
  "userId"    integer                                                       not null,
  currency  varchar(3)
    constraint currency_check
      check ((currency)::text = ANY
             ((ARRAY ['USD'::character varying, 'CAD'::character varying, 'EUR'::character varying])::text[])),
  "tradeDate" date                                                         not null,
  type      varchar(3)                                                   not null
    constraint type_check
      check ((type)::text = ANY
             ((ARRAY ['BUY'::character varying, 'SELL'::character varying, 'DIV'::character varying])::text[]))

);

ALTER TABLE trading."Transaction" ADD CONSTRAINT "Trading_userId_fkey" FOREIGN KEY ("userId") REFERENCES trading."User"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;
