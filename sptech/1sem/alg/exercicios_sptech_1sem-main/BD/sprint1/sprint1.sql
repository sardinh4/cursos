-- BD - EXERCÍCIO PRÁTICO 01 E EXERCÍCIOS PRÁTICOS 02

create database sprint1;

-- EXERCÍCIO 01 - EXERCÍCIO PRÁTICO 01
use sprint1;
create table atleta (
	idAtleta int primary key auto_increment,
    nome varchar(40),
    modalidade varchar(40),
    qtdMedalha int 
);

desc atleta;

insert into atleta values (1, 'Rebeca Andrade', 'Ginastica Artistica', 6),
(2, 'Flávia Saraiva', 'Ginastica Artistica', 1),
(3, 'Simone Biles', 'Ginastica Artistica', 4),
(4, 'Diogo Soares', 'Ginastica Artistica', 0),
(5, 'Rayssa Leal', 'Skate', 1),
(6, 'Letícia Bufoni', 'Skate', 0),
(7, 'Augusto Akio', 'Skate', 1),
(8, 'Ana Patricia', 'Vôlei de Praia', 1),
(9, 'Duda Lisboa', 'Vôlei de Praia', 1),
(10, 'Beatriz Souza', 'Judo', 2),
(11, 'Rafaela Silva', 'Judo', 1),
(12, 'Gabriel Medina', 'Surf', 1),
(13, 'Tatiana Weston-Webb', 'Surf', 1);

select * from atleta;
select nome, qtdMedalha from atleta;
select * from atleta where modalidade = 'Skate';
select * from atleta order by modalidade;
select * from atleta order by qtdMedalha desc;
select * from atleta where nome like '%s%';
select * from atleta where nome like 'r%';
select * from atleta where nome like '%o';
select * from atleta where nome like '%n_'; -- 'r' trocado por n, pois não tem nenhum atleta que atenda a condição: Exibir os dados da tabela, dos atletas cujo nome tenha a penúltima letra r

-- EXERCÍCIO 01 - EXERCÍCIO PRÁTICO 02

select * from atleta;

update atleta set qtdMedalha = 7 
	where idAtleta = 1;
    
update atleta set qtdMedalha = 1
	where idAtleta = 2 OR idAtleta = 3;

update atleta set nome = 'Rafel Campos'
	where idAtleta = 4;
    
alter table atleta add column dtNasc date;
update atleta set dtNasc = '2003-04-28' where idAtleta = 1;
update atleta set dtNasc = '2000-03-02' where idAtleta = 2;
update atleta set dtNasc = '1999-07-20' where idAtleta = 3;
update atleta set dtNasc = '1995-01-29' where idAtleta = 4;
update atleta set dtNasc = '2006-04-03' where idAtleta = 5;
update atleta set dtNasc = '2000-07-25' where idAtleta = 6;
update atleta set dtNasc = '1990-08-21' where idAtleta = 7;
update atleta set dtNasc = '1998-09-09' where idAtleta = 8;
update atleta set dtNasc = '2010-10-17' where idAtleta = 9;
update atleta set dtNasc = '2001-11-22' where idAtleta = 10;
update atleta set dtNasc = '2007-12-14' where idAtleta = 11;
update atleta set dtNasc = '1980-02-12' where idAtleta = 12;
update atleta set dtNasc = '1983-02-27' where idAtleta = 13;

delete from atleta where idAtleta = 5;

select * from atleta where modalidade <> 'natação';

select * from atleta where qtdMedalha >= 3;

alter table atleta modify modalidade varchar(60);

desc atleta;

select * from atleta;

-- truncate table atleta;


-- EXERCÍCIO 02 - EXERCÍCIO PRÁTICO 01

create table musica(
	idMusica int primary key auto_increment,
    titulo varchar(40),
    artista varchar(40),
    genero varchar(40)
);

insert into musica (titulo, artista, genero) values
  ('Bohemian Rhapsody', 'Queen', 'Rock'),
  ('Another One Bites the Dust', 'Queen', 'Rock'),
  ('Sweet Child o Mine', 'Guns N Roses', 'Hard Rock'),
  ('Paradise City', 'Guns N Roses', 'Hard Rock'),
  ('Smells like Teen Spirit', 'Nirvana', 'Grunge'),
  ('Come As You Are', 'Nirvana', 'Grunge'),
  ('Shape of You', 'Ed Sheeran', 'Pop'),
  ('Rolling in the Deep', 'Adele', 'Pop'),
  ('Blinding Lights', 'The Weeknd', 'Pop'),
  ('Hey Jude', 'The Beatles', 'Rock');
  
select * from musica;
select titulo, artista from musica;
select * from musica where genero = 'Pop';
select * from musica where artista = 'Nirvana';
select * from musica order by titulo;
select * from musica order by artista desc;
select * from musica where titulo like 'B%';
select * from musica where artista like '%n';
select * from musica where genero like '_o%';
select * from musica where titulo like '%d_';


-- EXERCÍCIO 02 - EXERCÍCIO PRÁTICO 02

select * from musica;

alter table musica add column curtidas int;

desc musica;

update musica set curtidas = 200 where idMusica = 1;
update musica set curtidas = 500 where idMusica = 2;
update musica set curtidas = 100 where idMusica = 3;
update musica set curtidas = 800 where idMusica = 4;
update musica set curtidas = 90 where idMusica = 5;
update musica set curtidas = 10 where idMusica = 6;
update musica set curtidas = 2000 where idMusica = 7;
update musica set curtidas = 2150 where idMusica = 8;
update musica set curtidas = 150 where idMusica = 9;
update musica set curtidas = 290 where idMusica = 10;

select * from musica;

alter table musica modify artista varchar(80);

desc musica;

update musica set curtidas = 300 where idMusica = 1;
update musica set curtidas = 400 where idMusica = 2 or idMusica = 3;
update musica set titulo = 'Lunch' where idMusica = 5;

delete from musica where idMusica = 4;

select * from musica where genero <> 'Funk';

select * from musica where curtidas >= 20;

-- truncate table musica;


-- EXERCÍCIO 03 - EXERCÍCIO PRÁTICO 01

create table filme(
	idFilme int primary key auto_increment,
    titulo varchar(50),
    genero varchar(40),
    diretor varchar(40)
);

insert into filme (titulo, genero, diretor) values
  ('O Poderoso Chefão', 'Drama', 'Francis Ford Coppola'),
  ('O Poderoso Chefão II', 'Drama', 'Francis Ford Coppola'),
  ('O Senhor dos Anéis: A Sociedade do Anel', 'Fantasia', 'Peter Jackson'),
  ('O Senhor dos Anéis: As Duas Torres', 'Fantasia', 'Peter Jackson'),
  ('O Senhor dos Anéis: O Retorno do Rei', 'Fantasia', 'Peter Jackson'),
  ('Interestelar', 'Ficção Científica', 'Christopher Nolan'),
  ('Inception', 'Ficção Científica', 'Christopher Nolan'),
  ('Pulp Fiction', 'Crime', 'Quentin Tarantino'),
  ('Kill Bill: Volume 1', 'Ação', 'Quentin Tarantino'),
  ('Kill Bill: Volume 2', 'Ação', 'Quentin Tarantino');
  
  select * from filme;
  select titulo, diretor from filme;
  select * from filme where genero = 'Ação';
  select * from filme where diretor = 'Peter Jackson';
  select * from filme order by titulo;
  select * from filme order by diretor desc;
  select * from filme where titulo like 'O%';
  select * from filme where diretor like '%a';
  select * from filme where genero like '_r%';
  select * from filme where titulo like '%e_';
  

-- EXERCÍCIO 03 - EXERCÍCIO PRÁTICO 02
  
select * from filme;

alter table filme add protagonista varchar(50);

desc filme;

update filme set protagonista = 'Leonardo DiCaprio' where idFilme = 1;
update filme set protagonista = 'Kate Winslet' where idFilme = 2;
update filme set protagonista = 'Brad Pitt' where idFilme = 3;
update filme set protagonista = 'Johnny Depp' where idFilme = 4;
update filme set protagonista = 'Tom Cruise' where idFilme = 5;
update filme set protagonista = 'Tobey Maguire' where idFilme = 6;
update filme set protagonista = 'Margot Robbie' where idFilme = 7;
update filme set protagonista = 'Mark Wahlberg' where idFilme = 8;
update filme set protagonista = 'Leonardo DiDaprio' where idFilme = 9;
update filme set protagonista = 'Leonardo DiDaprio' where idFilme = 10;

alter table filme modify diretor varchar(150);

update filme set diretor = 'Leonardo DiDaprio' where idFilme = 5;

update filme set diretor = 'Tom Cruise' where idFilme = 2 or idFilme = 7;

update filme set titulo = 'Harry Potter e a Pedra Filosofal' where idFilme = 6;

delete from filme where idFilme = 3;

select * from filme where genero <> 'Drama';

select * from filme where genero = 'Suspense';

desc filme;

-- truncate table filme;
  
  
-- EXERCÍCIO 04 - EXERCÍCIO PRÁTICO 01

  create table professore(
	idProfessor int primary key auto_increment,
    nome varchar(50),
    especialidade varchar(40),
    dtNasc date
  );
  
 rename table pr0fessore to professor;
  
  insert into  professor (nome, especialidade, dtNasc) values
  ('João Silva', 'Matemática', '1980-05-15'),
  ('Maria Pereira', 'Português', '1975-12-20'),
  ('Pedro Santos', 'História', '1990-03-08'),
  ('Ana Oliveira', 'Matemática', '1985-09-25'),
  ('Carlos Souza', 'Ciências', '1978-07-12'),
  ('Luiza Almeida', 'Português', '1992-01-05');
  
  select * from professore;
  select especialidade from professor;
  select * from professor where especialidade = 'Matemática';
  select * from professor order by nome;
  select * from professor order by dtNasc desc;
  select * from professor where nome like 'L%';
  select * from professor where nome like '%a';
  select * from professor where nome like '_a%';
  select * from professor where nome like '%r_';
  
-- EXERCÍCIO 04 - EXERCÍCIO PRÁTICO 02
  
select * from professor;

alter table professor add column funcao varchar(50);

desc professor;

alter table professor add constraint chkFuncao check (funcao in ('monitor', 'assistente', 'titular'));

update professor set funcao = 'monitor' where idProfessor = 1;
update professor set funcao = 'assistente' where idProfessor = 2;
update professor set funcao = 'monitor' where idProfessor = 3;
update professor set funcao = 'titular' where idProfessor = 4;
update professor set funcao = 'titular' where idProfessor = 5;
update professor set funcao = 'monitor' where idProfessor = 6;


insert into professor (nome, especialidade, dtNasc, funcao) values 
	('Roberto Almeida', 'Historia', '1999-02-25', 'assistente');
    
delete from professor where idprofessor = 5;

select * from professor where funcao = 'titular';

select especialidade, dtNasc from professor where funcao = 'monitor';

update professor set dtNasc = '1996-02-23' where idProfessor = 3;

-- truncate table professore;
  
  
-- EXERCÍCIO 05 - PRÁTICA 01 E PRÁTICA 02

create table curso (
	idCurso int primary key auto_increment,
    nome varchar(50),
    sigla varchar(3),
    coordenador varchar(50)
  ); 
  
 insert into curso (nome, sigla, coordenador) values
  ('Ciência da Computação', 'CC', 'João Silva'),
  ('Engenharia Civil', 'EC', 'Maria Pereira'),
  ('Administração', 'ADM', 'Pedro Santos'),
  ('Direito', 'DIR', 'Ana Oliveira'),
  ('Medicina', 'MED', 'Carlos Souza');
  
  select * from curso;
  select coordenador from curso;
  select * from curso where sigla = 'MED';
  select * from curso order by nome;
  select * from curso order by coordenador desc;
  select* from curso where nome like 'A%';
  select * from curso where nome like '%o';
  select * from curso where nome like '_i%';
  select * from curso where nome like '%a_';
  

-- EXERCÍCIO 06 - PRÁTICA 01 E PRÁTICA 02

create table revista (
	idRevista int primary key auto_increment,
    nome varchar(40),
    categoria varchar(30)
);

insert into revista (nome) values
('Veja'),
('Isto É'),
('Época'),
('Quatro Rodas');

select * from revista;

-- ATUALIZandO DADOS DA TABELA PELA CATEGORIA (LINHAS QUE JÁ EXISTEM)
update revista set categoria = 'Notícias' where idRevista = 1;
update revista set categoria = 'Notícias' where idrevista = 2;
update revista set categoria = 'Geral' where idRevista = 3;

select * from revista;

-- INSERINDO NOVOS REGISTROS (LINHAS NOVAS)
insert into revista (nome, categoria) values
('Claudia', 'Mulher'),
('National Geographic', 'Ciência'),
('Superinteressante', 'Ciência');

select * from revista;

desc revista;

-- MODIFICANDO A QUANTIDADE MÁXIMA DE CARACTERES DA COLUNA
alter table revista modify categoria varchar(40);

desc revista;

-- ADICIONANdO UMA NOVA COLUNA
alter table revista add periodicidade varchar(15);

select * from revista;

-- EXCLUINDO UMA COLUNA
alter table revista drop column periodicidade;

select * from revista;
