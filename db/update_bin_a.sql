update shelf_a set name = $2, price = $3 where id = $1;
select * from shelf_a
where id = $1