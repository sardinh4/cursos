use sprint1;

create table funcionario (
	id int primary key auto_increment,
    nome varchar(45) not null,
    peso float,
    altura float,
    salario decimal(10,2),
    dtNasc date);
    
desc funcionario;

insert into funcionario values
	(default, 'Batman', 95.400, 1.89, 99.99, 19600101);
    
select * from funcionario;

insert into funcionario (nome) values
	('Superman');

update funcionario set salario = 19.99 where id = 2;

insert into funcionario (nome) values ('Arlequina');

alter table funcionario add column tipo varchar(45),
	add  constraint chkTipo check(tipo in ('Herói', 'Vilão'));

update funcionario set tipo = 'Herói' where id in (1,2);

update funcionario set tipo = 'Vilão' where id = 3;

select * from functionario;

select nome, dtNasc from funcionario where nome = 'Batman';

select nome as 'Nome Funcionário', timestampdiff(year, dtNasc, now()) as Idade from funcionario where nome = 'Batman';

select concat('O ', nome, ' tem ', timestampdiff(year, dtNasc, now()), ' anos.') as frase from funcionario where nome = 'Batman';

-- if
select nome, case 
when tipo = 'Vilão' then 'Eu sou mau!'
when tipo = 'Herói' then 'Eu sou o cara!'
end as 'frase de efeito' from funcionario;

-- ifnull
select nome, ifnull(peso, 'Está faltando o peso!') as peso from funcionario; -- trabalha por campo
