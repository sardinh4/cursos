-- EXERCÍCIO 01

create database game_store;

use game_store;

create table jogo(
 id int primary key auto_increment,
 nome varchar(30),
 diretor varchar(30),
 genero varchar(30),
 lançamento date,
 nota decimal(2,1), -- 2 indica a quantidade total de digitos antes da virgula e 1 indica as quantidade de casas depois da virgula
 quantidade int
 );

insert into jogo (nome, diretor, genero, lançamento, nota, quantidade) values 
	('The Legend of Zelda', 'Hidemaro Fujimoto', 'Ação', '2017-03-03', 9.5, 10),
    ('The Witcher 3: Wild Hunt', 'Konrad Tomaszkiewicz', 'RPG', '2015-05-19', 9.3, 5),
    ('Red Dead Redemption 2', 'Roger Clark', 'Ação', '2018-10-26', 9.7, 8),
    ('Elden Ring', 'Hidtaka Miyazaki', 'Ação', '2022-02-25', 9.5, 12),
    ('Cyberpunk 2077', 'CD Projekt Red', 'RPG', '2020-12-10', 7.8, 0);

alter table jogo add column midia varchar(30) constraint chk_midia check (midia in('física', 'digital'));

desc jogo;

update jogo set midia = 'física' where id in (1,3,5);
update jogo set midia = 'digital' where id in (2,4);

select * from jogo where lançamento >= '2015-01-01';

select * from jogo where nome like '%a%' and midia = 'física';

select * from jogo where diretor not like '%e%';

alter table jogo add constraint chk_nota check (nota between 0 and 10);

select * from jogo where genero = 'Ação' and quantidade > 0;

select * from jogo where quantidade = 0;

delete from jogo where id = 5;

-- EXERCÍCIO 02

create database olimpiadas;

use olimpiadas;

create table esporte(
	id int primary key auto_increment,
    nome varchar(40),
    categoria varchar(20) check (categoria in ('Individual', 'Coletivo')),
    numeroJogadores int,
    estreia date,
    paisOrigem varchar(30)
);

insert into esporte (nome, categoria, numeroJogadores, estreia, paisOrigem) values
    ('Atletismo', 'Individual', 1, '1896-04-06', 'Grécia'),
    ('Natação', 'Individual', 1, '1896-04-06', 'Grécia'),
    ('Futebol', 'Coletivo', 11, '1900-09-20', 'Inglaterra'),
    ('Basquetebol', 'Coletivo', 5, '1936-08-07', 'Estados Unidos'),
    ('Ginástica Artística', 'Individual', 1, '1896-04-06', 'Grécia');

alter table esporte add popularidade decimal check (popularidade between 0 and 10);
desc esporte;

update esporte set popularidade = 9.5 where id in (1,2,3);
update esporte set popularidade = 0 where id in (4,5);

select * from esporte order by popularidade;

update esporte set estreia = '2002-03-20' where id in (5);

select * from esporte where estreia > '2000-01-01';

alter table esporte add constraint chk_estreia check (estreia between '1896-04-06' and '2024-08-30');

alter table esporte drop constraint esporte_chk_2;

select * from esporte where paisOrigem like '_a%';

select * from esporte where numeroJogadores between 4 and 11;

delete from esporte where id in (1,3,5);

-- EXERCÍCIO 03
create database desenho;
use desenho;

create table desenho(
	id int primary key auto_increment,
    Titulo varchar(50),
    data_de_lançamento date,
    emissora_original varchar(50),
    Classificação int,
    Status varchar(50),
    Nota int check (nota >= 1 and nota <= 5)
)auto_increment = 10 ;

desc desenho;

insert into desenho (Titulo, data_de_lançamento, emissora_original, Classificação, Status, Nota) values
	('Os Simpsons', '1989-12-17', 'Fox', 14, 'exibindo', 4),
    ('Pokémon', '1997-04-01', 'TV Tokyo', 10 , 'exibindo', 5),
    ('Dragon Ball Z', '1989-04-26', 'Fuji Television', 10, 'finalizado', 5),
    ('Bob Esponja', '1999-05-01', 'Nickelodeon', 10, 'exibindo', 4),
    ('Avatar: A Lenda de Aang', '2005-02-21', 'Nickelodeon', 18, 'finalizado', 5),
    ('Rick and Morty', '2013-12-02', 'Adult Swim', 18, 'exibindo', 5),
    ('Steven Universo', '2013-11-04', 'Cartoon Network', 10, 'finalizado', 5);
    
select * from desenho;
select * from desenho where Classificação <= 14;
select * from desenho where emissora_original = 'Nickelodeon';

alter table desenho add constraint chk_status check (Status in ('exibindo',
'finalizado', 'cancelado'));

insert into desenho (Status) value ('Em exibição');

select id from desenho where Status = 'exibindo';
update desenho set Status = 'finalizado' where id in (10,11);
select Status from desenho where id in (10,11);

delete from desenho where id = 12;

select * from desenho where Titulo like 'P%';

alter table desenho rename column Classificação to classificacaoIndicativa;

update desenho set data_de_lançamento = '2024-2-28', Nota = 1 where id = 11;

-- truncate table desenho;

alter table desenho drop constraint chk_status;

