-- BASIC PHASE 1A - DROP and CREATE table
-- Your code here
drop table if exists trees;

create table trees (
    id integer primary key AUTOINCREMENT,
    tree varchar(32),
    location varchar(64),
    height_ft decimal(4, 1),
    ground_circumference_ft decimal(4, 1)
);
-- BASIC PHASE 1B - INSERT seed data
-- Your code here
INSERT INTO
    trees (
        tree,
        location,
        height_ft,
        ground_circumference_ft
    )
VALUES (
        'General Sherman',
        'Giant Forest,Sequoia National Park',
        274.9,
        102.6
    ),
    (
        'General Grant*',
        'Grant Grove,Kings Canyon National Park',
        268.1,
        107.5
    ),
    (
        'President*',
        'Giant Forest,Sequoia National Park',
        240.9,
        93
    ),
    (
        'Lincoln',
        'Giant Forest,Sequoia National Park',
        255.8,
        98.3
    ),
    (
        'Stagg',
        'Alder Creek,Private Land',
        243,
        109
    ),
    (
        'Boole',
        'Converse Basin,Giant Sequoia National Monument',
        268.8,
        113
    ),
    (
        'Genesis',
        'Mountain Home,Mountain Home State Forest',
        253,
        85.3
    ),
    (
        'Franklin',
        'Giant Forest,Sequoia National Park',
        223.8,
        94.8
    ),
    (
        'King Arthur',
        'Garfield,Sequoia National Park',
        270.3,
        104.2
    ),
    (
        'Monroe',
        'Giant Forest,Sequoia National Park',
        247.8,
        91.3
    ),
    (
        'Robert E. Lee',
        'Grant Grove,Kings Canyon National Park',
        254.7,
        88.3
    ),
    (
        'unnamed',
        'Garfield Grove,Sequoia National Park',
        273.1,
        99.5
    ),
    (
        'Adams',
        'Giant Forest,Sequoia National Park',
        250.6,
        83.3
    ),
    (
        'Ishi Giant',
        'Kennedy Grove,Giant Sequoia National Monument',
        255,
        105.1
    ),
    (
        'Column',
        'Giant Forest,Sequoia National Park',
        243.8,
        93
    ),
    (
        'Summit Road',
        'Mountain Home,Mountain Home State Forest',
        244,
        82.2
    ),
    (
        'Euclid',
        'Mountain Home,Mountain Home State Forest',
        272.7,
        83.4
    ),
    (
        'Washington',
        'Mariposa Grove,Yosemite National Park',
        236,
        95.7
    ),
    (
        'Pershing',
        'Giant Forest,Sequoia National Park',
        246,
        91.2
    ),
    (
        'Diamond',
        'Atwell Grove,Sequoia National Park',
        286,
        95.3
    ),
    (
        'Adams',
        'Mountain Home,Mountain Home State Forest',
        247.4,
        94.2
    ),
    (
        'Roosevelt/False Heart',
        'Redwood Mountain Grove,Kings Canyon National Park',
        260,
        80
    ),
    (
        'Nelder',
        'nelder Grove,Sierra National Forest',
        266.2,
        90
    ),
    (
        'AD',
        'Atwell Grove,Sequoia National Park',
        242.4,
        99
    ),
    (
        'Hart',
        'Redwood Mountain Grove,Kings Canyon National Park',
        277.9,
        75.3
    ),
    (
        'Grizzly Giant',
        'Mariposa Grove,Yosemite National Park',
        209,
        92.5
    ),
    (
        'Chief Sequoyah',
        'Giant Forest,Sequoia National Park',
        228.2,
        90.4
    );
