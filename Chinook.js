SELECT * 
FROM Invoice i
JOIN InvoiceLine il ON il.invoiceId = i.invoiceId
WHERE il.UnitPrice>0.99;


SELECT i.InvoiceDate, c.FirstName, c.LastName, i.Total
FROM Invoice i
JOIN Customer c ON i.CustomerId = c.CustomerId;

SELECT c.FirstName, c.LastName, e.FirstName, e.LastName
FROM Customer c
JOIN Employee e ON c.SupportRepId = e.EmployeeId;

SELECT al.Title,ar.Name
FROM Album al
JOIN Artist ar ON al.ArtistId = ar.ArtistId;

SELECT pt.TrackId
FROM PlayListTrack pt
JOIN Playlist p ON p.PlaylistId= pt.PlaylistId
WHERE p.Name ="Music"

SELECT t.Name
FROM Track t
JOIN PlaylistTrack pt ON pt.TrackId = t.TrackId
WHERE pt.PlaylistId = 5;

SELECT t.name, p.Name
FROM Track t
JOIN PlayListTrack pt ON t.TrackId = pt.TrackId
Join Playlist p ON pt.PlaylistId = p.PlaylistId;


SELECT t.Name, a.title
FROM Track t
JOIN Album a  ON t.AlbumId =a.AlbumId
JOIN Genre g ON g.GenreId = t.GenreId
WHERE g.Name ="Alternative";


SELECT *
FROM invoice
WHERE InvoiceId IN (SELECT InvoiceId FROM InvoiceLine WHERE UnitPrice>0.99);


SELECT *
FROM PlayListTrack
WHERE PlaylistId IN (SELECT PlaylistId FROM Playlist WHERE Name ="Music"


SELECT Name
FROM Track
WHERE TrackId IN (SELECT TrackId FROM PlaylistTrack WHERE PlaylistId=5);


SELECT *
FROM Track
WHERE GenreId IN (SELECT GenreId FROM Genre WHERE Name ="Comedy")


 
SELECT *
FROM Track 
WHERE AlbumId IN (SELECT AlbumId FROM Album WHERE Title="Fireball")



SELECT *
 FROM Track
 WHERE AlbumId IN(
  SELECT AlbumId FROM Album WHERE ArtistId IN (
   SELECT ArtistId FROM Artist WHERE Name ="Queen"
  )
