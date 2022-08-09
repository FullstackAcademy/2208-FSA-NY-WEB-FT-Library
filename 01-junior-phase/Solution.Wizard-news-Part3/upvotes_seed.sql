DROP TABLE IF EXISTS upvotes;

CREATE TABLE upvotes (
  userId INTEGER REFERENCES users(id) NOT NULL,
  postId INTEGER REFERENCES posts(id) NOT NULL,
  date timestamp DEFAULT now()
);

INSERT INTO upvotes (userId, postId) VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(1,13),(1,14);
INSERT INTO upvotes (userId, postId) VALUES (2,1),(2,2),(2,3),(2,4),(2,5),(2,6),(2,7),(2,8),(2,9),(2,10),(2,11),(2,12),(2,13);
INSERT INTO upvotes (userId, postId) VALUES (3,1),(3,2),(3,3),(3,4),(3,5),(3,6),(3,7),(3,8),(3,9),(3,10),(3,11);
INSERT INTO upvotes (userId, postId) VALUES (4,1),(4,2),(4,3),(4,4),(4,5),(4,6),(4,7),(4,8),(4,9);
INSERT INTO upvotes (userId, postId) VALUES (5,1),(5,2),(5,3),(5,5),(5,5),(5,6);
INSERT INTO upvotes (userId, postId) VALUES (6,1),(6,2),(7,3),(8,5);
INSERT INTO upvotes (userId, postId) VALUES (9,1),(10,2),(11,3);
INSERT INTO upvotes (userId, postId) VALUES (12,1),(13,2);
INSERT INTO upvotes (userId, postId) VALUES (14,1);
