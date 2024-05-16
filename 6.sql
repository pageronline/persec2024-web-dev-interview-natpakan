WITH TopProducts2016 AS (
    SELECT P.product_name, SUM(OD.quantity) AS sum_quantity2016
    FROM order_details AS OD
    LEFT JOIN products AS P ON OD.product_id = P.product_id
    LEFT JOIN orders AS O ON OD.order_id = O.order_id
    WHERE YEAR(O.order_date) = 2016
    GROUP BY P.product_name
    ORDER BY sum_quantity2016 DESC
    LIMIT 5
),
TopProducts2017 AS (
    SELECT P.product_name, SUM(OD.quantity) AS sum_quantity2017
    FROM order_details AS OD
    LEFT JOIN products AS P ON OD.product_id = P.product_id
    LEFT JOIN orders AS O ON OD.order_id = O.order_id
    WHERE YEAR(O.order_date) = 2017
    GROUP BY P.product_name
    ORDER BY sum_quantity2017 DESC
    LIMIT 5
)
SELECT product_name
FROM (
    SELECT product_name FROM TopProducts2016
    UNION ALL
    SELECT product_name FROM TopProducts2017
) AS CombinedProducts
GROUP BY product_name
HAVING COUNT(product_name) = 2;
