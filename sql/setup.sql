DROP TABLE IF EXISTS words;

CREATE TABLE words (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  word TEXT NOT NULL,
  aka TEXT,
  definition TEXT,
  reason TEXT,
  origin TEXT,
  alternatives TEXT
);
INSERT INTO words (word, aka, definition, reason, origin, alternatives) VALUES 
('dumb', null, 'unable to speak', 'deaf and dumb', '', ''),
('crazy', null, 'mentally unstable or unpredictable', '', '', 'ridiculous, outrageous, confusing'),
('psychotic', 'psycho', '', '', '', 'ridiculous, outrageous, confusing'),
('insane', null, '', '', '', 'ridiculous, outrageous, confusing'),
('idiot', null, '', '', '', 'not smart'),
('imbecile', null, '', '', '', 'not smart'),
('cripple', 'crip', 'a physically disabled person', 'slur against physically disabled people', '', ''),
('crack-head', 'meth-head', 'a drug user', 'minimizes the disease of addiction and consolidates a human being as one piece of their life', '', 'person, neighbor'),
('clean (in relation to STI status)', null, 'a negative result for an STI screening', 'Conotates that a positive result means someone is dirty, stigmatizes STI positive people including people living with HIV.', '', 'negative'),
('lame', null, '', '', '', ''),
('maniac', null, '', '', '', '')
;