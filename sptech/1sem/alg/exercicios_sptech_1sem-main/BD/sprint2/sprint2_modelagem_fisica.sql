create database Sprint2;
use Sprint2;

create table Pais(
	idPais int primary key auto_increment,
    nome varchar(30),
    capital varchar(40)
);

insert into Pais (nome, capital) values
("Brasil", "Brasília"),
("EUA", "Washington D.C."),
("Japão", "Tóquio"),
("França", "Paris");

select * from Pais;

create table Atleta(
	idAtleta int primary key auto_increment,
    nome varchar(40),
    modalidade varchar(40),
    qtdMedalha int
);

insert into Atleta (nome, modalidade, qtdMedalha) values
("Marta Vieira da Silva", "Futebol", 2),
("Michael Phelps", "Natação", 28),
("Usain Bolt", "Atletismo", 8),
("Naomi Osaka", "Tênis", 4),
("Teddy Riner", "Judô", 10);

alter table Atleta add column fkPais int;

alter table Atleta add constraint fkAtletaPais foreign key (fkPais) references Pais(idPais);

desc Atleta;

update Atleta set fkPais = 1 where idAtleta = 1;
update Atleta set fkPais = 2 where idAtleta in (2,3);
update Atleta set fkPais = 3 where idAtleta = 4;
update Atleta set fkPais = 4 where idAtleta = 5;

select * from Atleta join Pais on idPais = fkPais;

select Atleta.nome as Atleta, Pais.nome as País from Atleta join Pais on idPais = fkPais;

select * from Atleta join Pais on idPais = fkPais where capital = "Washington D.C.";
