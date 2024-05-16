SELECT YEAR(O.order_date) AS year, 
    SUM((P.unit_price * OD.quantity) * (1 - OD.discount)) AS total_sales
FROM order_details AS OD
INNER JOIN orders AS O ON OD.order_id = O.order_id
INNER JOIN products AS P ON OD.product_id = P.product_id
WHERE O.ship_region = 'Western Europe'
GROUP BY year
ORDER BY year;