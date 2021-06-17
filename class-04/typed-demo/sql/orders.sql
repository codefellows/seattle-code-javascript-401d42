CREATE TABLE Orders (
  id         INT PRIMARY KEY,
  name       VARCHAR(255) NOT NULL,
  customerId INT REFERENCES Customers(id),
);
