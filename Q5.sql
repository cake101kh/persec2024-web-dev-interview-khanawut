select c.product_name, sum(a.quantity) Total 
from order_details as a
left join orders as b 
on a.order_id = b.order_id
left join products as c 
on a.product_id = c.product_id
where b.order_date between '2016-01-01' and '2016-12-31'
group by c.product_name
order by Total desc
LIMIT 5;