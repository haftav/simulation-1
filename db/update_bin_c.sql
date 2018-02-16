update shelf_c set name = $2, price = $3 where id = $1;
select * from shelf_c
where id = $1