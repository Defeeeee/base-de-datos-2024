### 1
```sql
SELECT empleado.dni, empleado.nombre, empleado.apellido, sector.nombre AS sector FROM empleado JOIN sector;
```
### 2
```sql
SELECT sala.id, sala.superficie
FROM sala
ORDER BY superficie DESC
LIMIT 3;
```
### 3
```sql
SELECT empleado.nombre, empleado.apellido, telefono.numero AS numero
FROM empleado 
JOIN telefono ON telefono.dni_duenio = empleado.dni
WHERE empleado.id_sector = 1;;
```
### 4
```sql
INSERT INTO empleado
VALUES (44444444, "Julian", "Alvarez", "91218@riverplate.com", 4);
```
### 5
```sql
SELECT sala.*, sector.nombre AS nombre_sector, sector.apellido_jefe AS jefe_sector
FROM sala
LEFT JOIN sector ON sala.id_sector = sector.id;
```
### 6
```sql
UPDATE sector 
SET email_jefe = CONCAT(LEFT(nombre_jefe, 1), apellido_jefe, "@simuladores.com.ar") 
WHERE sector.id = NUMERO SECTOR;
```
### 7
```sql
DELETE FROM empleado 
WHERE dni = 8578124;
```
### 8
```sql
UPDATE empleado SET id_sector = 3 
WHERE dni = 43182902;
```
### 9
```sql
SELECT empleado.dni, empleado.nombre, empleado.apellido, empleado.email, telempleado.numero AS numero_empleado, sector.nombre AS nombre_sector, sector.apellido_jefe, teljefe.numero
FROM empleado
JOIN sector ON empleado.id_sector = sector.id
JOIN telefono teljefe ON teljefe.dni_duenio = sector.dni_jefe
JOIN telefono telempleado ON telempleado.dni_duenio = empleado.dni
WHERE empleado.dni = 18354680;
```
### 10
```sql
DELETE FROM empleado WHERE dni = 18354680;
```
```sql
INSERT INTO empleado VALUES(2, "Php", "Myadmin", "phpmyadmin@phpmyadmin.com", 2);
```
```sql
INSERT INTO telefono VALUES(1122334455, 2);
```
## Bonus 1
Para permitir que cada empleado tenga mas de un email lo hariamos de una manera parecida a como se manejan los numeros de telefono, creando una tabla nueva que decidimos que contenga
la direccion de correo, el dominio y el dni del dueño de la casilla. Posterior a esto podemos correr la query que esta abajo para copiar los mail de los empleados a la nueva tabla. 
Por ultimo se borra la columnta email de la tabla empleados con un DROP
```sql
INSERT INTO email
SELECT SUBSTRING_INDEX(empleado.email, "@", 1) AS direccion, CONCAT("@", SUBSTRING_INDEX(empleado.email, "@", -1)) AS dominio, empleado.dni 
FROM empleado;
```
## Bonus 2
```sql
SELECT SUM(superficie) AS superficie_total
FROM sala;
```
