select a.product_id, a.product_name, a.Total Total2016, b.Total Total2017
from (
select c.product_id, c.product_name, sum(a.quantity) Total 
from order_details as a
left join orders as b 
on a.order_id = b.order_id
left join products as c 
on a.product_id = c.product_id
where b.order_date between '2016-01-01' and '2016-12-31'
group by c.product_id, c.product_name
order by Total desc
LIMIT 5 ) a
inner join
(
select c.product_id, c.product_name, sum(a.quantity) Total 
from order_details as a
left join orders as b 
on a.order_id = b.order_id
left join products as c 
on a.product_id = c.product_id
where b.order_date between '2017-01-01' and '2017-12-31'
group by c.product_id, c.product_name
order by Total desc
LIMIT 5) b 
on a.product_id = b.product_id