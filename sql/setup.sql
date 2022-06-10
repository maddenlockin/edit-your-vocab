DROP TABLE IF EXISTS words;

CREATE TABLE words (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  word TEXT NOT NULL,
  aka TEXT,
  definition TEXT,
  alternatives TEXT
);
INSERT INTO words (word, aka, definition, alternatives) VALUES 
('dumb', null, 'unable to speak', null),
('crazy', null, 'mentally unstable or unpredictable', 'ridiculous, outrageous, confusing'),
('psychotic', 'psycho', null, 'ridiculous, outrageous, confusing'),
('insane', null, null, 'ridiculous, outrageous, confusing'),
('idiot', null, null, 'not smart'),
('imbecile', null, null, 'not smart'),
('cripple', 'crip', 'Refers to a people with physical disabilities', null),
('crack-head', 'meth-head', 'minimizes the disease of addiction and consolidates a human being as one piece of their life', 'person, neighbor'),
('clean (in relation to STI status)', null, 'a negative result for an STI screening', 'negative'),
-- 'Conotates that a positive result means someone is dirty, stigmatizes STI positive people including people living with HIV',
('lame', null, null, null),
('maniac', null, null, null)
;