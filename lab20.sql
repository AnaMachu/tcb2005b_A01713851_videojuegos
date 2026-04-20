/*
Materiales(Clave, Descripción, Costo)
Proveedores(RFC, RazonSocial)
Proyectos(Numero,Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)

Reunión Natural

Algebra relacional.
entregan JN materiales
*/

SQL
select * from materiales,entregan
where materiales.clave = entregan.clave

/*
Si algún material no ha se ha entregado ¿Aparecería en el resultado de esta consulta?
No, no aparecería, solo está trayendo los que si han sido entregados.

-------------------------------

Unión (se ilustra junto con selección)

Algebra relacional.
SL{clave=1450}(entregan) UN SL{clave=1300}(entregan)
*/

SQL
(select * from entregan where clave=1450)
union
(select * from entregan where clave=1300)

/*¿Cuál sería una consulta que obtuviera el mismo resultado sin usar el operador Unión? Compruébalo.

--------------------------------
Producto cartesiano

Algebra relacional.
entregan X materiales
*/

SQL
select * from entregan,materiales

/*
¿Cómo está definido el número de tuplas de este resultado en términos del número de tuplas de entregan y de materiales?
El numero son todas las tuplas de ambas tablas.

-----------------------------------
Construcción de consultas a partir de una especificación

Plantea ahora una consulta para obtener las descripciones de los materiales entregados en el año 2000.

Recuerda que la fecha puede indicarse como '01-JAN-2000' o '01/01/00'.

Importante: Recuerda que cuando vayas a trabajar con fechas, antes de que realices tus consultas debes ejecutar la instrucción "set dateformat dmy". Basta con que la ejecutes una sola vez para que el manejador sepa que vas a trabajar con ese formato de fechas.
*/
SELECT descripcion
FROM materiales M INNER JOIN entregan E ON M.clave=E.clave
WHERE (fecha BETWEEN '01-JAN-2000' AND '31-DEC-2000' ) OR (fecha BETWEEN '01/01/00' AND '31/12/00' )


SELECT descripcion
FROM materiales M INNER JOIN entregan E ON M.clave = E.clave
WHERE YEAR(E.fecha) = 2000;

/*
¿Por qué aparecen varias veces algunas descripciones de material?
Porque es posible que en el año 2000 se hayan entregado varias veces materiales con mismas descripciones, y porque no se indica que sea unico
--------------------------------------------
Uso del calificador distinct

En el resultado anterior, observamos que una misma descripción de material aparece varias veces.

Agrega la palabra distinct inmediatamente después de la palabra select a la consulta que planteaste antes.
*/
SELECT descripcion
DISTINCT
FROM materiales M INNER JOIN entregan E ON M.clave = E.clave
WHERE YEAR(E.fecha) = 2000;

/*
¿Qué resultado obtienes en esta ocasión? Una descripción solo aparece una vez.
Aparecen descripciones únicas
-------------------------------------
Ordenamientos.

Si al final de una sentencia select se agrega la cláusula

order by campo [desc] [,campo [desc] ...]

donde las partes encerradas entre corchetes son opcionales (los corchetes no forman parte de la sintaxis), los puntos suspensivos indican que pueden incluirse varios campos y la palabra desc se refiere a descendente. Esta cláusula permite presentar los resultados en un orden específico.

Obtén los números y denominaciones de los proyectos con las fechas y cantidades de sus entregas, ordenadas por número de proyecto, presentando las fechas de la más reciente a la más antigua.
*/

SELECT numero, denominacion, fecha, cantidad
FROM  entregan E,Proyectos P
WHERE E.numero=P.numero
ORDER BY  numero, fecha desc

-------------------------------------
/*Operadores de cadena

El operador LIKE se aplica a datos de tipo cadena y se usa para buscar registros, es capaz de hallar coincidencias dentro de una cadena bajo un patrón dado.

También contamos con el operador comodín (%), que coincide con cualquier cadena que tenga cero o más caracteres. Este puede usarse tanto de prefijo como sufijo.
*/ 

SELECT * FROM productos where Descripcion LIKE 'Si%'
/*
¿Qué resultado obtienes?
Se obtiene la descripcion de productos que inician con Si
Explica que hace el símbolo '%'. 
Coincide con todos o ningun string posterior a lo que se puso 
¿Qué sucede si la consulta fuera : LIKE 'Si' ? 
¿Qué resultado obtienes?
Regresa aquells descripciones que literalmente sean Si
Explica a qué se debe este comportamiento.

Otro operador de cadenas es el de concatenación, (+, +=) este operador concatena dos o más cadenas de caracteres.
Su sintaxis es : Expresión + Expresión.
Un ejemplo de su uso, puede ser: Un ejemplo de su uso, puede ser:
SELECT (Apellido + ', ' + Nombre) as Nombre FROM Personas;

DECLARE @foo varchar(40);
DECLARE @bar varchar(40);
SET @foo = '¿Que resultado';
SET @bar = ' ¿¿¿??? '
SET @foo += ' obtienes?';
PRINT @foo + @bar;

/*
 ¿Qué resultado obtienes de ejecutar el siguiente código?
    Se imprime: ¿Que resultado obtienes? ¿¿¿???
    @foo inicia con '¿Que resultado', luego con += se le concatena
    ' obtienes?', quedando '¿Que resultado obtienes?'.
    Al hacer PRINT @foo + @bar se une con el valor de @bar que es ' ¿¿¿??? '.
*/

/*
¿Para qué sirve DECLARE?
    Sirve para declarar (crear) una variable en T-SQL,
    especificando su nombre y tipo de dato.
    Sin DECLARE, la variable no existe y no puede usarse.
*/

/*
¿Cuál es la función de @foo?
    Es una variable de tipo VARCHAR(40) que almacena una cadena de texto.
    En el ejemplo guarda el texto '¿Que resultado' y después
    se le concatena ' obtienes?' usando el operador +=.
*/

/*
¿Qué realiza el operador SET?
    Asigna un valor a una variable previamente declarada con DECLARE.
    En el ejemplo:
      SET @foo = '¿Que resultado'  --> guarda ese texto en la variable.
      SET @foo += ' obtienes?'     --> concatena y reasigna el nuevo valor.
*/

/*
Explica el comportamiento, función y resultado de:
SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';

    Devuelve todos los RFC de la tabla Entregan cuyo PRIMER carácter
    esté entre A y D (es decir, A, B, C o D).
    El % indica que el resto de la cadena puede ser cualquier cosa.
    Ejemplo de resultados: 'ABCD123', 'CASA456', 'DATO789'
*/
SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';

/*
Explica el comportamiento, función y resultado de:
SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';

    Devuelve todos los RFC cuyo PRIMER carácter NO sea la letra A.
    El operador [^] dentro de los corchetes niega el conjunto indicado.
    El % permite cualquier continuación después del primer carácter.
    Ejemplo de resultados: 'BCDE123', 'CASA456', 'DATO789'
    (Excluye cualquier RFC que empiece con 'A')
*/
SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';

/*
Explica el comportamiento, función y resultado de:
SELECT Numero FROM Entregan WHERE Numero LIKE '___6';


    Devuelve los números que tengan EXACTAMENTE 4 caracteres y terminen en 6.
    Cada guion bajo _ representa exactamente UN carácter cualquiera.
    Con tres guiones bajos más el '6', busca cadenas de 4 caracteres
    donde el último sea 6.
    Ejemplo de resultados: '1006', '2346', '5556'
*/
SELECT Numero FROM Entregan WHERE Numero LIKE '___6';


-- ALL: compara un valor con TODOS los valores de un subquery.
-- ANY / SOME: compara con AL MENOS UN valor del subquery.
-- BETWEEN: especifica intervalos de valores.

-- Ejemplo de BETWEEN:
SELECT Clave, RFC, Numero, Fecha, Cantidad
FROM Entregan
WHERE Numero BETWEEN 5000 AND 5010;

/*
¿Cómo filtrarías rangos de fechas?
    Se usa el operador BETWEEN con fechas en formato 'YYYY-MM-DD'.
    Ejemplo:
*/
SELECT Clave, RFC, Numero, Fecha, Cantidad
FROM Entregan
WHERE Fecha BETWEEN '2000-01-01' AND '2000-12-31';


-- Ejemplo de EXISTS:
SELECT RFC, Cantidad, Fecha, Numero
FROM [Entregan]
WHERE [Numero] BETWEEN 5000 AND 5010
  AND EXISTS (
      SELECT [RFC]
      FROM [Proveedores]
      WHERE RazonSocial LIKE 'La%'
        AND [Entregan].[RFC] = [Proveedores].[RFC]
  );

/*
¿Qué hace la consulta?
    Devuelve RFC, Cantidad, Fecha y Numero de la tabla Entregan
    donde el Numero esté entre 5000 y 5010, PERO únicamente de
    aquellos proveedores cuya RazonSocial comience con 'La'
    (verificado en la tabla Proveedores mediante el EXISTS).
    Es decir, filtra filas de Entregan que tengan una contraparte
    válida en Proveedores con nombre que empiece en 'La'.
*/

/*
¿Qué función tiene el paréntesis ( ) después de EXISTS?

    Contiene la subconsulta (subquery) que EXISTS evalúa.
    EXISTS devuelve TRUE si esa subconsulta retorna al menos UNA fila.
    Si no retorna ninguna fila, devuelve FALSE y la fila principal
    es excluida del resultado.
*/



/*
Realiza el query que devuelva el mismo resultado usando IN.
/ QUERY:
*/
SELECT RFC, Cantidad, Fecha, Numero
FROM Entregan
WHERE Numero BETWEEN 5000 AND 5010
  AND RFC IN (
      SELECT RFC
      FROM Proveedores
      WHERE RazonSocial LIKE 'La%'
  );


=

/*
Realiza el query usando NOT IN para devolver el mismo resultado.
 / QUERY:
    (Devuelve las entregas entre 5000 y 5010 excluyendo los RFC
    que NO pertenecen a proveedores con nombre que empiece en 'La')
*/
SELECT RFC, Cantidad, Fecha, Numero
FROM Entregan
WHERE Numero BETWEEN 5000 AND 5010
  AND RFC NOT IN (
      SELECT RFC
      FROM Proveedores
      WHERE RazonSocial NOT LIKE 'La%'
  );



Realiza un ejemplo donde apliques algún operador: ALL, SOME o ANY.
 EJEMPLO CON ALL:
    Devuelve entregas cuya cantidad sea MAYOR que TODAS las cantidades
    registradas en el proyecto con clave 1.
*/
SELECT RFC, Cantidad
FROM Entregan
WHERE Cantidad > ALL (
    SELECT Cantidad
    FROM Entregan
    WHERE Numero IN (
        SELECT Numero FROM Proyectos WHERE Clave = 1
    )
);

-- Ejemplo con ANY (al menos una coincidencia):
SELECT RFC, Cantidad
FROM Entregan
WHERE Cantidad > ANY (
    SELECT Cantidad
    FROM Entregan
    WHERE Numero IN (
        SELECT Numero FROM Proyectos WHERE Clave = 1
    )
);


-
-- OPERADOR TOP


/*¿Qué hace la siguiente sentencia? Explica por qué.
SELECT TOP 2 * FROM Proyectos


    Devuelve únicamente las primeras 2 filas de la tabla Proyectos.
    Como no hay ORDER BY, las filas devueltas dependen del orden
    interno de almacenamiento del motor de base de datos (no garantizado).
    TOP limita la cantidad de filas retornadas al número especificado.
*/
SELECT TOP 2 * FROM Proyectos;

/*
 ¿Qué sucede con la siguiente consulta?
SELECT TOP Numero FROM Proyectos


    Genera un ERROR DE SINTAXIS.
    TOP requiere un valor numérico literal o una expresión entre paréntesis
    como TOP (10) o TOP (100) PERCENT.
    No acepta el nombre de una columna directamente como argumento.
*/
-- SELECT TOP Numero FROM Proyectos;  <-- Esta línea genera error, se deja comentada.






ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2);
UPDATE materiales SET PorcentajeImpuesto = 2 * Clave / 1000;
SELECT * FROM materiales;

/*
¿Qué consulta usarías para obtener el importe de las entregas?
          (total en dinero basado en cantidad, precio e impuesto)
RESPUESTA / QUERY:
*/
SELECT
    e.RFC,
    e.Numero,
    e.Clave,
    e.Cantidad,
    m.Precio,
    m.PorcentajeImpuesto,
    e.Cantidad * m.Precio * (1 + m.PorcentajeImpuesto / 100) AS Importe
FROM Entregan e
JOIN Materiales m ON e.Clave = m.Clave;




-- Una vista es una consulta etiquetada con un nombre.
-- Sintaxis: CREATE VIEW nombrevista AS SELECT ...
-- Se puede consultar como si fuera una tabla: SELECT * FROM nombrevista
-- IMPORTANTE: Las vistas NO pueden incluir ORDER BY.

Materiales entregados al proyecto "México sin ti no estamos completos"
CREATE VIEW vMaterialesMexico AS
SELECT m.Clave, m.Descripcion
FROM Materiales m
JOIN Entregan e ON m.Clave = e.Clave
JOIN Proyectos p ON e.Numero = p.Numero
WHERE p.Denominacion = 'México sin ti no estamos completos';

SELECT * FROM vMaterialesMexico;

 Materiales proporcionados por "Acme tools"
CREATE VIEW vMaterialesAcme AS
SELECT m.Clave, m.Descripcion
FROM Materiales m
JOIN Entregan e ON m.Clave = e.Clave
JOIN Proveedores pr ON e.RFC = pr.RFC
WHERE pr.RazonSocial = 'Acme tools';

SELECT * FROM vMaterialesAcme;

RFC de proveedores con promedio >= 300 en el año 2000
CREATE VIEW vProveedores300 AS
SELECT RFC
FROM Entregan
WHERE YEAR(Fecha) = 2000
GROUP BY RFC
HAVING AVG(Cantidad) >= 300;

SELECT * FROM vProveedores300;

Total entregado por material en el año 2000
CREATE VIEW vTotalMaterial2000 AS
SELECT Clave, SUM(Cantidad) AS TotalEntregado
FROM Entregan
WHERE YEAR(Fecha) = 2000
GROUP BY Clave;

SELECT * FROM vTotalMaterial2000;

Productos con el patrón 'ub' en su nombre
CREATE VIEW vProductosUB AS
SELECT * FROM Materiales
WHERE Descripcion LIKE '%ub%';

SELECT * FROM vProductosUB;


-- 1. Materiales (clave y descripción) entregados al proyecto
--    "México sin ti no estamos completos"
SELECT m.Clave, m.Descripcion
FROM Materiales m
JOIN Entregan e ON m.Clave = e.Clave
JOIN Proyectos p ON e.Numero = p.Numero
WHERE p.Denominacion = 'México sin ti no estamos completos';

-- 2. Materiales (clave y descripción) proporcionados por "Acme tools"
SELECT m.Clave, m.Descripcion
FROM Materiales m
JOIN Entregan e ON m.Clave = e.Clave
JOIN Proveedores pr ON e.RFC = pr.RFC
WHERE pr.RazonSocial = 'Acme tools';

-- 3. RFC de proveedores que en 2000 entregaron en promedio >= 300 materiales
SELECT RFC
FROM Entregan
WHERE YEAR(Fecha) = 2000
GROUP BY RFC
HAVING AVG(Cantidad) >= 300;

-- 4. Total entregado por cada material en el año 2000
SELECT Clave, SUM(Cantidad) AS TotalEntregado
FROM Entregan
WHERE YEAR(Fecha) = 2000
GROUP BY Clave;

-- 5. Clave del material más vendido durante el 2001
--    (usando vista intermedia)
CREATE VIEW vVentas2001 AS
SELECT Clave, SUM(Cantidad) AS Total
FROM Entregan
WHERE YEAR(Fecha) = 2001
GROUP BY Clave;

SELECT TOP 1 Clave FROM vVentas2001 ORDER BY Total DESC;

-- 6. Productos que contienen el patrón 'ub' en su nombre
SELECT * FROM Materiales
WHERE Descripcion LIKE '%ub%';

-- 7. Denominación y suma del total a pagar para todos los proyectos
SELECT
    p.Denominacion,
    SUM(e.Cantidad * m.Precio * (1 + m.PorcentajeImpuesto / 100)) AS TotalPagar
FROM Proyectos p
JOIN Entregan e ON p.Numero = e.Numero
JOIN Materiales m ON e.Clave = m.Clave
GROUP BY p.Denominacion;

-- 8. Denominación, RFC y RazonSocial de proveedores que suministran a
--    "Televisa en acción" y NO están en "Educando en Coahuila" (USANDO VISTAS)
CREATE VIEW vProvTelev AS
SELECT DISTINCT e.RFC
FROM Entregan e
JOIN Proyectos p ON e.Numero = p.Numero
WHERE p.Denominacion = 'Televisa en acción';

CREATE VIEW vProvEduc AS
SELECT DISTINCT e.RFC
FROM Entregan e
JOIN Proyectos p ON e.Numero = p.Numero
WHERE p.Denominacion = 'Educando en Coahuila';

SELECT p.Denominacion, pr.RFC, pr.RazonSocial
FROM vProvTelev vt
JOIN Proveedores pr ON vt.RFC = pr.RFC
CROSS JOIN Proyectos p
WHERE p.Denominacion = 'Televisa en acción'
  AND vt.RFC NOT IN (SELECT RFC FROM vProvEduc);


SELECT DISTINCT p.Denominacion, pr.RFC, pr.RazonSocial
FROM Entregan e
JOIN Proyectos p ON e.Numero = p.Numero
JOIN Proveedores pr ON e.RFC = pr.RFC
WHERE p.Denominacion = 'Televisa en acción'
  AND e.RFC NOT IN (
      SELECT e2.RFC
      FROM Entregan e2
      JOIN Proyectos p2 ON e2.Numero = p2.Numero
      WHERE p2.Denominacion = 'Educando en Coahuila'
  );

-- 10. Costo de materiales entregados a "Televisa en acción" cuyos
--     proveedores también suministran a "Educando en Coahuila"
SELECT DISTINCT m.Descripcion, m.Precio
FROM Materiales m
JOIN Entregan e ON m.Clave = e.Clave
JOIN Proyectos p ON e.Numero = p.Numero
WHERE p.Denominacion = 'Televisa en acción'
  AND e.RFC IN (
      SELECT e2.RFC
      FROM Entregan e2
      JOIN Proyectos p2 ON e2.Numero = p2.Numero
      WHERE p2.Denominacion = 'Educando en Coahuila'
  );

-- 11. Nombre del material, cantidad de veces entregado y costo total
--     de dichas entregas por material de TODOS los proyectos
SELECT
    m.Descripcion AS NombreMaterial,
    COUNT(e.Clave)  AS VecesEntregado,
    SUM(e.Cantidad * m.Precio * (1 + m.PorcentajeImpuesto / 100)) AS CostoTotal
FROM Materiales m
JOIN Entregan e ON m.Clave = e.Clave
GROUP BY m.Descripcion;

-- ============================================================
-- FIN DEL SCRIPT
-- ============================================================