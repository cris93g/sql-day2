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
