--film tablosunda bulunan title ve description sütunlarındaki verileri sıralayınız.<br>
`SELECT title,description FROM film;`

--film tablosunda bulunan tüm sütunlardaki verileri film uzunluğu (length) 60 dan büyük VE 75 ten küçük olma koşullarıyla sıralayınız.<br>
`SELECT * FROM film WHERE length>60 AND length<75;`

--film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99 VE replacement_cost 12.99 VEYA 28.99 olma koşullarıyla sıralayınız.<br>
`SELECT * FROM film WHERE rental_rate=0.99 AND (replacement_cost=12.99 OR replacement_cost=28.99);`

--customer tablosunda bulunan first_name sütunundaki değeri 'Mary' olan müşterinin last_name sütunundaki değeri nedir?<br>
`SELECT last_name FROM customer WHERE first_name='Mary'; -- "Smith"`

--film tablosundaki uzunluğu(length) 50 ten büyük OLMAYIP aynı zamanda rental_rate değeri 2.99 veya 4.99 OLMAYAN verileri sıralayınız.<br>
`SELECT * FROM film WHERE not length>50 AND NOT (rental_rate=2.99 OR rental_rate=4.99);`

--film tablosunda bulunan tüm sütunlardaki verileri replacement cost değeri 12.99 dan büyük eşit ve 16.99 küçük olma koşuluyla sıralayınız ( BETWEEN - AND yapısını kullanınız.)<br>
`SELECT * FROM film WHERE replacement_cost BETWEEN 12.99 and 16.98;`

--.actor tablosunda bulunan first_name ve last_name sütunlardaki verileri first_name 'Penelope' veya 'Nick' veya 'Ed' değerleri olması koşuluyla sıralayınız. ( IN operatörünü kullanınız.)<br>
`SELECT first_name,last_name FROM actor WHERE first_name IN ('Penelope','Nick','Ed');`

--film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99, 2.99, 4.99 VE replacement_cost 12.99, 15.99, 28.99 olma koşullarıyla sıralayınız. ( IN operatörünü kullanınız.)<br>
`SELECT * FROM film WHERE (rental_rate IN (0.99, 2.99, 4.99)) AND (replacement_cost IN (12.99, 15.99, 28.99));`

--country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.<br>
`SELECT country FROM country WHERE country LIKE 'A%a';`

--country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.<br>
`SELECT country FROM country WHERE country LIKE '_____%n';`

--film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.<br>
`SELECT title FROM film WHERE title ILIKE '%T%%T%%T%%T%';`

--film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.<br>
`SELECT * FROM film WHERE (title LIKE 'C%') and length>90 and rental_rate=2.99;`


--film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?<br>
`SELECT COUNT(DISTINCT replacement_cost) FROM film;`

--film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?<br>
`SELECT count(*) FROM film WHERE (title LIKE 'T%') and rating='G';`

--country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?<br>
`SELECT count(*) FROM country WHERE country LIKE '_____';`

--city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?<br>
`SELECT count(*) FROM city WHERE city LIKE 'R%r';`

--film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.<br>
`SELECT title FROM film WHERE title LIKE '%n' ORDER BY length DESC limit 5;`

--film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.<br>
`SELECT title FROM film WHERE title LIKE '%n' ORDER BY length ASC OFFSET 5 LIMIT 5;`

--customer tablosunda bulunan last_name sütununa göre azalan yapılan sıralamada store_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.<br>
`SELECT * FROM customer WHERE store_id=1 ORDER BY last_name DESC LIMIT 4;`

--film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?<br>
`SELECT AVG(rental_rate) FROM film;`

--film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?<br>
`SELECT count(*) FROM film WHERE title LIKE 'C%';`

--film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?<br>
`SELECT MAX(length) FROM film WHERE rental_rate=0.99;`

--film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?<br>
`SELECT count(DISTINCT replacement_cost) FROM film WHERE length>150;`

--film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.<br>
`SELECT rating, count(title) FROM film GROUP BY rating;`

--film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.<br>
`SELECT replacement_cost, count(title) FROM film GROUP BY replacement_cost HAVING count(title)>50;`

--customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir? <br>
`SELECT store_id, count(customer) FROM customer GROUP BY store_id;`

--city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.<br>
`SELECT country_id, count(city) FROM city GROUP BY country_id ORDER BY count(city) DESC LIMIT 1;`

--test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.<br>
```
CREATE TABLE employee (
	id INT,
	first_name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
);
```
--Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.(Mockaroo'dan ürettiğiniz random verileri import ederek veya query run ederek ekleyin. Var olan tabloya veri eklemek aşağıdaki yapıya benzer.)<br>
`insert into employee (id, first_name, birthday, email) values (1, 'Cathi', '15/01/1971', 'cblaxeland0@virginia.edu');`<br>
`insert into employee (id, first_name, birthday, email) values (2, 'Nata', '13/03/1988', 'nablewhite1@rediff.com');`

--Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.<br>
```
UPDATE employee 
SET first_name = 'Ramazan',
	birthday = '18/01/1997',
	email = 'ustuntasramazan@outlook.com'
WHERE id = 1;

```
--Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.<br>

```
DELETE FROM employee 
WHERE id = 1;
```

--city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.<br>
`SELECT city,country FROM city JOIN country ON country.country_id=city.country_id;`

--customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.<br>
`SELECT payment.payment_id, first_name, last_name FROM customer JOIN payment ON customer.customer_id=payment.customer_id;`

--customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.<br>
`SELECT rental.rental_id, first_name, last_name FROM customer JOIN rental ON customer.customer_id=rental.customer_id;`

--city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.<br>
`SELECT city, country FROM city LEFT JOIN country ON city.country_id=country.country_id;`

--customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.<br>
`SELECT payment_id, first_name, last_name FROM customer RIGHT JOIN payment ON customer.customer_id=payment.customer_id;`

--customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.<br>
`SELECT rental_id, first_name, last_name FROM customer FULL JOIN rental ON customer.customer_id=rental.customer_id;`

--actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.<br>
`(SELECT first_name FROM actor) UNION (SELECT first_name FROM customer);`
--(TEKRARLI VERİLERİ DE LİSTELEMEK İÇİN)<br>
`(SELECT first_name FROM actor) UNION ALL (SELECT first_name FROM customer);`

--actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.<br>
`(SELECT first_name FROM actor) INTERSECT (SELECT first_name FROM customer);`
---(TEKRARLI VERİLERİ DE LİSTELEMEK İÇİN)<br>
`(SELECT first_name FROM actor) INTERSECT ALL (SELECT first_name FROM customer);`

--actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.<br>
`(SELECT first_name FROM actor) EXCEPT (SELECT first_name FROM customer);`
---(TEKRARLI VERİLERİ DE LİSTELEMEK İÇİN)<br>
`(SELECT first_name FROM actor) EXCEPT ALL (SELECT first_name FROM customer);`
