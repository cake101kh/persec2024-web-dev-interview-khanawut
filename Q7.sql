select year(b.order_date) order_year, sum(((c.unit_price*a.quantity)-a.discount)) total_price
from order_details a 
left join orders b 
on a.order_id = b.order_id
left join products c 
on a.product_id = c.product_id
where b.ship_region = 'Western Europe'
group by order_year
order by order_year;