update shelf_d set name = $2, price = $3 where id = $1;
select * from shelf_d
where id = $1