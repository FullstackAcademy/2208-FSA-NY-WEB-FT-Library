DROP TABLE IF EXISTS upvotes;
DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT DEFAULT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES users(id) NOT NULL,
  title varchar(255) DEFAULT NULL,
  content TEXT DEFAULT NULL,
  date timestamp DEFAULT now()
);

INSERT INTO users (name) VALUES ('RubeusH');
INSERT INTO users (name) VALUES ('Baddock');
INSERT INTO users (name) VALUES ('Hetty');
INSERT INTO users (name) VALUES ('Alphard');
INSERT INTO users (name) VALUES ('Baruffio');
INSERT INTO users (name) VALUES ('Hbeery');
INSERT INTO users (name) VALUES ('Alatar');
INSERT INTO users (name) VALUES ('Falco');
INSERT INTO users (name) VALUES ('Otto');
INSERT INTO users (name) VALUES ('Cuthbert');
INSERT INTO users (name) VALUES ('Humphrey22');
INSERT INTO users (name) VALUES ('Bellatrix1');
INSERT INTO users (name) VALUES ('Dracod');
INSERT INTO users (name) VALUES ('Lupin');

INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='RubeusH'), 'Fianto Duri, the complete tutorial', 'Fianto Duri is a charm that was created to be combined with protective spells (Can be used with another person''s shield spell)(When used on something else creates a explosion). As we already knows the (i.e.) Shield Charm needs the caster to stay focused on the spell in order to continue protecting him, so Fianto Duri allows the caster to keep a charm “alive” while he does some other work or casts some other spells.', (now() - interval '4 hours'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Baddock'), 'Untransfiguration classes to become compulsory at Hogwarts', 'Learning untransfiguration is going to be mandatory at Hogwarts School of Witchcraft and Wizardry from 2017 onward. Untransfiguration will be covered in beginner-level spellbooks such as A Beginner''s Guide to Transfiguration. Failure to at least attempt to untranfigure a wrongly-done transfiguration will be considered irresponsible.', (now() - interval '1 day'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Hetty'), 'Cracking the Aurologist Interview', 'Now in the 5th edition, Cracking the Aurologist Interview gives you the interview preparation you need to get the top aura study jobs. The book is over 500 pages and includes 150 aurologist interview questions and answers, as well as other advice.', (now() - interval '15 minutes'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Alphard'), 'ASK WN: What do you use to digitalize your scrolls?', 'Some scrolls need conservation treatment before they can be safely transported, handled, and digitized.  After these questions are answered, Preservation and Information Technology Specialists assess the project requirements and create the digitilized version.', (now()));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Baruffio'), 'The Pragmatic Dragon Feeder', 'In The Pragmatic Dragon Feeder, the author Baruffio tell us how to give food to dragons in a way that we can follow. How did they get so smart? Aren''t they just as focused on details as other dragon feeders? The answer is that they paid attention to what they were doing while they were doing it.', (now() - interval '3 hours'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Hbeery'), 'The complete quidditch statistics', 'This is the Complete source for quidditch history including complete player, team, and league stats, awards, records, leaders, rookies and scores.', (now() - interval '1 hour'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Alatar'), 'Ordinary Wizarding Levels study guide', 'The Ordinary Wizarding Level (O.W.L.) is, as you know, going to determine whether or not you will be allowed to continue taking that subject in subsequent school years, and whether they might be successful in obtaining a particular job. This guide help direct you to the most important information you need to know to ace the test', (now() - interval '1 hour'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Falco'), 'Is muggle-baiting ever acceptable?', 'Muggle-baiting can be a manifestation of anti-Muggle sentiments and is not acceptable according to the International Statute of Wizarding Secrecy - But, are there any circumstances under which it could be acceptable?', (now() - interval '10 minutes'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Otto'), 'Conserving waterplants cheatsheet.', 'This Cheat Sheet is dedicated to providing wizards the information they want in an approachable, entertaining way.', (now() - interval '24 hours'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Cuthbert'), 'Could wizards prevent WW3?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae fermentum enim. Pellentesque sodales ut risus eu porta. Duis dictum rhoncus semper. Proin accumsan mollis ligula, eget elementum nibh dignissim quis. Proin augue risus, mollis non neque in, molestie rutrum purus. Morbi pretium nisl a commodo.', (now() - interval '50 minutes'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Humphrey22'), 'Show WN: Wand-Extinguishing Protection', 'This spell extinguishes the wand the caster is holding, a counter-charm to Lumos.', (now() - interval '1 hour'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Bellatrix1'), 'Do you still use Alarte Ascendare?', 'You''ve got levicorpus and Ascendio and wingardium leviosa, so is anyone still using Alarte Ascendare, too? (That is, unless you find wingardium leviosa too difficult to pronounce.)', (now() - interval '30 seconds'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Dracod'), 'Mailing lists WN readers ought to know about?', 'I love to subscribe to information feeds through mailing list subscription. What do you subscribe to that you think others would benefit by if they were to as well?', (now() - interval '1 minute'));
INSERT INTO posts (userId, title, content, date) VALUES ((SELECT id from users where name='Lupin'), 'How to tell which spell used on a bug?', 'Question: Are ther any non-jinx incantations available to detect which spell used on a bug?', (now()));
