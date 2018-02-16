update shelf_b set name = $2, price = $3 where id = $1;
select * from shelf_b
where id = $1