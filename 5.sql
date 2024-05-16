SELECT P.product_name, SUM(OD.quantity) AS sum_quantity2016
FROM order_details AS OD
LEFT JOIN products AS P ON OD.product_id = P.product_id
LEFT JOIN orders AS O ON OD.order_id = O.order_id
WHERE YEAR(O.order_date) = 2016
GROUP BY P.product_name
ORDER BY sum_quantity2016 DESC
LIMIT 5;